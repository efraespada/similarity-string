String.similarity = require("./index");
const sim = require('similarity');
const list = require("./values").LIST;
describe('similarity test', function () {
    for (let c in list) {
        it(`similarity ${list[c][0]} and ${list[c][1]}`, function (done) {
            let similarity = String.similarity(list[c][0], list[c][1]);
            let bar = "[";
            for (let _i = 0; _i < Math.round(similarity); _i++) bar += "░"
            for (let _i = 0; _i < 100 - Math.round(similarity); _i++) bar += " "
            bar += "]";
            console.log(`${list[c][0]} - ${list[c][1]}: ${similarity.toFixed(2)}% ${bar}`);
            done();
        });
    }
});

describe('levenshtein similarity test', function () {
    for (let c in list) {
        it(`levenshtein similarity ${list[c][0]} and ${list[c][1]}`, function (done) {
            let similarity = sim(list[c][0], list[c][1]) * 100;
            let bar = "[";
            for (let _i = 0; _i < Math.round(similarity); _i++) bar += "░"
            for (let _i = 0; _i < 100 - Math.round(similarity); _i++) bar += " "
            bar += "]";
            console.log(`${list[c][0]} - ${list[c][1]}: ${similarity.toFixed(2)}% ${bar}`);
            done();
        });
    }
});