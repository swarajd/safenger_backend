let Promise = require('bluebird');
let Facebook = require('facebook-node-sdk');

Promise.promisifyAll(Facebook.prototype);

let fb = new Facebook({
    appId: '1155718381174396',
    version: 'v2.3'
})

fb.setAccessToken('EAACEdEose0cBADoZBWjg0OmcG9TNZAoevivCXPCmsPOoaUcUXb7m9g0btowBFNF9uVSKEKZCZCRwhxs4a37cfKWBF1XyZCaTkgvyNaKIljV09UvNVveztJ5jR9y2RyYADZAxURq1ZCnNXmY73ObHAoHZBB0BBXk9IQFoTWNDbkMS6wZDZD');

async function fbStats() {
    let res = await fb.apiAsync('/me/inbox');
    let threads = res.data;
    for (let thread of threads) {
    // //     console.log("=======================");
        try {
            console.log(thread.comments.data.length);
        } catch (e) {
            console.log(0);
        }
    // //     console.log("=======================");
    }

    // let comments = threads[1].comments.data;

    // console.log(comments);
    return res;
}

fbStats().then(() => {
    // console.log('ayy');
});