let Promise = require('bluebird');
let twitter = require('twitter');
let express = require('express');
let bodyParser = require('body-parser');
let rp = require('request-promise');

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
    to: 'SDcoolio',
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
    let msgs = [];
    try {
        let resp = await client.getAsync('direct_messages', params);
        for (let dm of resp) {
            msgs.push({
                text: dm.text,
                recipient: dm.recipient.screen_name,
                sender: dm.sender.screen_name,
                img: dm.sender.profile_image_url
            })
        }

        console.log(msgs);

        let dataString = JSON.stringify({
            messages: msgs
        });

        let options = {
            method: "POST",
            url: "http://bocajdude.pythonanywhere.com/pizza",
            body: dataString
        }
        
        resp = await rp(options);
        console.log(resp);
        return "asdf";
    } catch (e) {
        console.error(e);
        return e;
    }
}

// getMentions(params).then(() => {
//     console.log("end");
// })

app.get('/', function(req, res) {
    // let key = req.body.key;
    // let secret = req.body.secret;
    // let subject = req.body.subject;

    // let config = {
    //     consumer_key: "2nkEy3wkbkFFvDcUCkuCYeIrn",
    //     consumer_secret: "rNEf4gA1GSniCr30PwtTeLYwsc58NEzcjVgC7qdwjJwqTjNa7H",
    //     access_token_key: key,
    //     access_token_secret: secret
    // };

    // let params = {
    //     to: subject,
    //     count: 10
    // };

    // let client = new twitter(config);

    // Promise.promisifyAll(client);

    // getMentions(params).then(() => {
    //     console.log("end");
    // })

    res.json({
        messages: [
            {
                sender: "riship",
                message: "you're an idiot",
                img: "https://i.ytimg.com/vi/XALGrYWJCf0/hqdefault.jpg"
            },
            {
                sender: "riship",
                message: "I hate you",
                img: "https://i.ytimg.com/vi/XALGrYWJCf0/hqdefault.jpg"
            },
            {
                sender: "riship",
                message: "give me the link you bitch",
                img: "https://i.ytimg.com/vi/XALGrYWJCf0/hqdefault.jpg"
            },
            {
                sender: "riship",
                message: "Go die in a hole",
                img: "https://i.ytimg.com/vi/XALGrYWJCf0/hqdefault.jpg"
            }
        ]
    })

});

getDMs(params).then(() => {
    console.log("end");
})

// app.listen(3000, function() {
//     console.log('listening on :3000');
// });
