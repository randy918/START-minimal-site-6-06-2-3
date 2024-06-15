//$   function c(toConsole)
//$   function r(min, max)  Random integers, can be just 'max'

function c(toConsole) {
    console.log(toConsole);
}

function r(min, max) {
    // 2.0, accepts single value for 1-x
    if (max === undefined) {
        max = min;
        min = 1;
    }
    const randomNumber = min - 1 + Math.ceil(Math.random() * (max + 1 - min));
    return randomNumber;
}

