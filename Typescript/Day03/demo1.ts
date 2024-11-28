// console.log(" Hello World")
// console.log(' Welcome to Angular Module')
// console.log(`
//             Hi r U enjoyed
//     `);

var a1,a_1,a$1;
var b_a;

//data type
// number(int,long,double,float,short)
// string (''/"")
// boolean => true/false
// any (number/string/boolean)
// misec. null & Undefined => data type is used to store value as well as data type 

var a:number=10; // forward decalration & defination

// console.log("Value of a is "+a);
// console.log(`
//         value of a is ${a}
//     `);

var str!:string;
// console.log('Value of str is '+str)

str="sumit";
// console.log('Value of str is '+str);

var c:any;
c=2.5;
// console.log("Value of c is "+c);
// c="Sumit Raokhande";
// console.log("Value of c is "+c);
// c=true;
// console.log("Value of c is "+c);


// Literal 
var d:number | string;
d=25;
// console.log("Value of d is "+d);
d='Sumit'
// console.log("Value of d is "+d);

var t1:number | null;
t1=null;
// console.log("Value of t1 is "+t1)
t1=45;
// console.log("Value of t1 is "+t1)

var t2:50|string;
t2=50;
t2='sumit';

// Type Assertion 

// t3.
// any/Object/Unknown

// 1 Angle Bracket Syntax => Ts file use 
// 2 as syntax => Js => ts as well as html 
var t3:any;
// 1 Angle Bracket Syntax
// (<data type> variable name)
var temp=(<string> t3);
// temp.

// 2 as syntax => Js => ts as well as html
// (variable name as data type )
var temp1=(t3 as string);
// temp1.

