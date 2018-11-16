String.similarity = require("./index");

describe('similarity test', function () {
    let list = [
        ["Dummy", "dummy"],
        ["dUmmy", "dummy"],
        ["duMmy", "dummy"],
        ["dumMy", "dummy"],
        ["dummY", "dummy"]
    ];
    for (let c in list) {
        it(`similarity ${list[c][0]} and ${list[c][1]}`, function (done) {
            let similarity = String.similarity(list[c][0], list[c][1]);
            console.log(`${list[c][0]} - ${list[c][1]}: ${similarity.toFixed(2)}%`);
            done()
        });
    }
});