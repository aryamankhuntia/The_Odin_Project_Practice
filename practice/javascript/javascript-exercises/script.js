function add7(num) {
    return num + 7;
}

function multiply(num1, num2) {
    return num1 * num2;;
}

function capitalize(str) {
    let res;
    res= str.at(0).toUpperCase() + str.slice(1).toLowerCase();
    return res;
}

function lastletter(str) {
    return str.at(-1);
}
console.log(add7(10));
console.log(multiply(5,6));
console.log(capitalize("HELLO"));
console.log(lastletter("hello"));