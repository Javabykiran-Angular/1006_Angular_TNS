//fat arrow function / Arrow function 
var temp1 = function () {
    console.log("Fat arrow function is called...");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
// console.log("Addition is "+temp2(10,5))
// optional parameter Functions
function add1(a, b) {
    console.log("Value of a " + a); // 10
    console.log("Value of b " + b); // undefined
    console.log("Value of a+b " + (a + b)); // NAN
}
// add1(10);
// add1(10,20);
function add2(a, b) {
    console.log("Value of a " + a); // 10
    console.log("Value of b " + b); // undefined
    console.log("Value of a+b " + (a + b)); // NAN
}
//Default parameter function
function add3(a, b) {
    if (b === void 0) { b = 10; }
    console.log("Value of a " + a); // 10
    console.log("Value of b " + b); // undefined
    console.log("Value of a+b " + (a + b)); // NAN
}
// add3(20);
// add3(40,60);
function add4(a, b) {
    if (a === void 0) { a = 100; }
    console.log("Value of a " + a); // 10
    console.log("Value of b " + b); // undefined
    console.log("Value of a+b " + (a + b)); // NAN
}
// add4(70,90)
add4();
