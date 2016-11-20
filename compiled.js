"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getMentions = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(params) {
        var resp;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return client.getAsync('search/tweets', params);

                    case 3:
                        resp = _context.sent;

                        console.log(resp);
                        return _context.abrupt("return", resp);

                    case 8:
                        _context.prev = 8;
                        _context.t0 = _context["catch"](0);

                        console.error(_context.t0);
                        return _context.abrupt("return", _context.t0);

                    case 12:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 8]]);
    }));

    return function getMentions(_x) {
        return _ref.apply(this, arguments);
    };
}();

var getDMs = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(params) {
        var resp;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return client.getAsync('direct_messages', params);

                    case 3:
                        resp = _context2.sent;

                        console.log(resp);
                        return _context2.abrupt("return", resp);

                    case 8:
                        _context2.prev = 8;
                        _context2.t0 = _context2["catch"](0);

                        console.error(_context2.t0);
                        return _context2.abrupt("return", _context2.t0);

                    case 12:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 8]]);
    }));

    return function getDMs(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

// getMentions(params).then(() => {
//     console.log("end");
// })

// app.post('/', function(req, res) {
//     let key = req.body.key;
//     let secret = req.body.secret;
//     let subject = req.body.subject;

//     let config = {
//         consumer_key: "2nkEy3wkbkFFvDcUCkuCYeIrn",
//         consumer_secret: "rNEf4gA1GSniCr30PwtTeLYwsc58NEzcjVgC7qdwjJwqTjNa7H",
//         access_token_key: key,
//         access_token_secret: secret
//     };

//     let params = {
//         to: subject,
//         count: 10
//     };

//     let client = new twitter(config);

//     Promise.promisifyAll(client);

//     getMentions(params).then(() => {
//         console.log("end");
//     })

// });

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("babel-core/register");
require("babel-polyfill");

var Promise = require('bluebird');
var twitter = require('twitter');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var config = {
    consumer_key: "2nkEy3wkbkFFvDcUCkuCYeIrn",
    consumer_secret: "rNEf4gA1GSniCr30PwtTeLYwsc58NEzcjVgC7qdwjJwqTjNa7H",
    access_token_key: "56455755-qdlZ84RZdubuq0o1inUNabPevOL2w5iphneWzVFAp",
    access_token_secret: "0XLnuHq7dgqif08iqhBMdFU3kJv8z0m89AsXVt0zOn8oY"
};

var client = new twitter(config);

Promise.promisifyAll(client);

var params = {
    to: 'SDcoolio',
    count: 10
};

getDMs(params).then(function () {
    console.log("end");
});

// app.listen(3000, function() {
//     console.log('listening on :3000');
// });
