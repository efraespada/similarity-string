const Analyzer = require('./subsequence');

describe('verifying subsequences', function () {
    let a = "CAS";
    let b = "CASTOR DE CASTRO URDIALES CASTRADO CON CASCO";
    let analyzer = new Analyzer();

    let test_a = `number of times ${a} exists in ${b}`;
    it(test_a, function (done) {
        let times = analyzer.appear_times(a, b);
        if (times == 4) {
            console.log(test_a + ": " + times);
            done()
        } else {
            console.error(test_a + ": " + times);
            done(times + "")
        }
    });

    let c = "CASTELLON";
    let d = "DE LA PLANA - CASTELLO";
    it(`verifying ${c} and ${d}`, function (done) {
        let relation = analyzer.verify(c, d);
        console.log("relation: " + relation);
        done()
    });
});