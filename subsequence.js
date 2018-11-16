String.prototype.replaceAll = function (search, replacement) {
    let target = this;

    return target.replace(new RegExp(search, 'g'), replacement);
};

function Analyzer() {


    this.verify = (a, b, initial_set_size = 4) => {
        let main = b;
        let slave = a;

        // slave size is smaller or equal to main
        let size = slave.length;

        let processed = {};

        let relation = 0;

        // every loop increases the char set, from 4 to slave length limit
        for (let _i = initial_set_size; _i <= size; _i++) {
            processed["" + _i] = {};
            // for every set, main value is checked
            for (let _s = 0; _s < size; _s++) {
                if (_s + _i > size) {
                    continue;
                }
                let current = slave.substring(_s, _s + _i);
                let count = this.appear_times(current, main);
                processed["" + _i][current] = count;
                relation += count;
            }
        }
        return relation - Math.abs(main.length - slave.length)
    };

    this.appear_times = (value, base) => {
        return (base.length - base.replaceAll(value, "").length) / value.length
    }

}

module.exports = Analyzer;