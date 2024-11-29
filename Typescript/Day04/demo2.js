//Functions => User defined 
// 1 Function without parameter & without return Type 
// 2 Function with parameter & without return Type 
// 3 Function without parameter & with return Type
// 4 Function with parameter & with return Type  
// 1 Function without parameter & without return Type 
function add1() {
    console.log("U r in first Type of Function");
}
// add1();
// 2 Function with parameter & without return Type 
function add2(a, b) {
    console.log("Addition is " + (a + b));
}
// add2(10,2);
// 3 Function without parameter & with return Type
function add3() {
    return (8 + 8);
}
var res = add3();
// console.log("Result is "+res);
// console.log("Result is "+add3());
// 4 Function with parameter & with return Type  
function add4(a, b) {
    return (a + b);
}
// console.log("Addition is "+add4(40,5));
console.log("\n        Addition is ".concat(add4(50, 5), "\n    "));
