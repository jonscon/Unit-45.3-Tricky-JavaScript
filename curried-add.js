function curriedAdd(total) {
    if (total === undefined) return 0;
    return function add(num) {
        // if no argument is passed ()
        if (num === undefined) {
            return total;
        }
        total += num;
        return add;
    } 
}

console.log(curriedAdd());

module.exports = { curriedAdd };