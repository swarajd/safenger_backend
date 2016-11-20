let Promise = require('bluebird');
let twitter = require('twitter');

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

async function getMentions() {
    try {
        let resp = await client.getAsync('search/tweets', params);
        console.log(resp);
        return resp;
    } catch(e) {
        console.error(e);
        return e;
    }
}

async function getDMs() {
    try {
        let resp = await client.getAsync('direct_messages', params);
        console.log(resp);
        return resp;
    } catch (e) {
        console.error(e);
        return e;
    }
}

// getMentions().then(() => {
//     console.log("end");
// })


getDMs().then(() => {
    console.log("end");
})
