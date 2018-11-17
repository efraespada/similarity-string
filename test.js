String.similarity = require("./index");
const sim = require('similarity');
const logjs = require('logjsx');
const leven = require('leven');
const list = require("./values").LIST;
let logger = new logjs();
logger.init({
    level : "DEBUG"
});
describe('similarity-string vs leven test', function () {
    for (let c in list) {
        it(`${list[c][0]} and ${list[c][1]}`, function (done) {
            let similarity = String.similarity(list[c][0], list[c][1]);
            let bar = "[";
            for (let _i = 0; _i < Math.round(similarity); _i++) bar += "░"
            for (let _i = 0; _i < 100 - Math.round(similarity); _i++) bar += " "
            bar += "]";
            logger.info(`${list[c][0]} - ${list[c][1]}: ${similarity.toFixed(2)}% ${bar} leven: ${leven(list[c][0], list[c][1])}`);
            done();
        });
    }
});

describe('levenshtein comparision test (similarity + leven)', function () {
    for (let c in list) {
        it(`${list[c][0]} and ${list[c][1]}`, function (done) {
            let similarity = sim(list[c][0], list[c][1]) * 100;
            let bar = "[";
            for (let _i = 0; _i < Math.round(similarity); _i++) bar += "░"
            for (let _i = 0; _i < 100 - Math.round(similarity); _i++) bar += " "
            bar += "]";
            logger.warn(`${list[c][0]} - ${list[c][1]}: ${similarity.toFixed(2)}% (leven: ${leven(list[c][0], list[c][1])}) ${bar}`);
            done();
        });
    }
});