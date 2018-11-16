String.similarity = require("./index");
const sim = require('similarity');
const list = require("./values").LIST;
let ratio = 4;
let max = 100;
describe('readme print similarity', function () {
    for (let c in list) {
        let similarity = String.similarity(list[c][0], list[c][1]) / ratio;
        let bar = "[";
        for (let _i = 0; _i < Math.round(similarity); _i++) bar += "░"
        for (let _i = 0; _i < (max / ratio) - Math.round(similarity); _i++) bar += " "
        bar += "]";
        console.log(`${list[c][0]} - ${list[c][1]}: ${(similarity * ratio).toFixed(2)}% ${bar} \n`);
    }
    for (let c in list) {
        let similarity = sim(list[c][0], list[c][1]) * (max / ratio);
        let bar = "[";
        for (let _i = 0; _i < Math.round(similarity); _i++) bar += "░"
        for (let _i = 0; _i < (max / ratio) - Math.round(similarity); _i++) bar += " "
        bar += "]";
        console.log(`${list[c][0]} - ${list[c][1]}: ${(similarity * ratio).toFixed(2)}% ${bar} \n`);
    }
});