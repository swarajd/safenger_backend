let Promise = require('bluebird');
let twitter = require('twitter');
let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());

let config = {
    consumer_key: "2nkEy3wkbkFFvDcUCkuCYeIrn",
    consumer_secret: "rNEf4gA1GSniCr30PwtTeLYwsc58NEzcjVgC7qdwjJwqTjNa7H",
    access_token_key: "56455755-qdlZ84RZdubuq0o1inUNabPevOL2w5iphneWzVFAp",
    access_token_secret: "0XLnuHq7dgqif08iqhBMdFU3kJv8z0m89AsXVt0zOn8oY"
}

let client = new twitter(config);

Promise.promisifyAll(client);

let params = {
    to: 'addyosmani',
    count: 10
}

async function getMentions(params) {
    try {
        let resp = await client.getAsync('search/tweets', params);
        console.log(resp);
        return resp;
    } catch(e) {
        console.error(e);
        return e;
    }
}

async function getDMs(params) {
    try {
        let resp = await client.getAsync('direct_messages', params);
        console.log(resp);
        return resp;
    } catch (e) {
        console.error(e);
        return e;
    }
}

// getMentions(params).then(() => {
//     console.log("end");
// })

app.post('/', function(req, res) {
    let key = req.body.key;
    let secret = req.body.secret;
    let subject = req.body.subject;

    let config = {
        consumer_key: "2nkEy3wkbkFFvDcUCkuCYeIrn",
        consumer_secret: "rNEf4gA1GSniCr30PwtTeLYwsc58NEzcjVgC7qdwjJwqTjNa7H",
        access_token_key: key,
        access_token_secret: secret
    };

    let params = {
        to: subject,
        count: 10
    };

    let client = new twitter(config);

    Promise.promisifyAll(client);

    getMentions(params).then(() => {
        console.log("end");
    })

});

// getDMs().then(() => {
//     console.log("end");
// })

app.listen(3000, function() {
    console.log('listening on :3000');
});
