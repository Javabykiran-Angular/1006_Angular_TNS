//fat arrow function / Arrow function 
let temp1=()=>{
    console.log("Fat arrow function is called...");
}

// temp1();
let temp2=(a:number,b:number):number=>{
    return (a+b);
}
// console.log("Addition is "+temp2(10,5))

// optional parameter Functions

function add1(a:number,b?:number){
    console.log("Value of a "+a);// 10
    console.log("Value of b "+b); // undefined
    console.log("Value of a+b "+(a+b!));// NAN
}
// add1(10);
// add1(10,20);

function add2(a?:number,b?:number){
    console.log("Value of a "+a);// 10
    console.log("Value of b "+b); // undefined
    console.log("Value of a+b "+(a!+b!));// NAN
}

//Default parameter function
function add3(a:number,b:number=10){
    console.log("Value of a "+a);// 10
    console.log("Value of b "+b); // undefined
    console.log("Value of a+b "+(a+b));// NAN
}

// add3(20);
// add3(40,60);

function add4(a:number=100,b?:number){
    console.log("Value of a "+a);// 10
    console.log("Value of b "+b); // undefined
    console.log("Value of a+b "+(a+b!));// NAN
}

// add4(70,90)

// add4();


