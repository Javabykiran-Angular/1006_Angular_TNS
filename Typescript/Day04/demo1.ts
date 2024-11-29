// Arithmathic => +,-,/,*,%
// logical => &&,||
// bitwise => &,|,!,~,^,<<,>>
// conditional => >,<,<=,>=,
// relation => !=,==(it only checks value ),===(strongly equality => It checks value as well as data type  )
// unary => post/pre inc/dec ++a,a--
// ternary => condition ? Expression1 : Expression2
// assignment => =,+=,-=,*=,/=,%=

// control statement/sequential statement
// if,if-else,nested if-else ,switch,break,continue
var a=21;

// if(a<4){
//     console.log("Condition is True");
// }else{
//     console.log("Condition is false");
// }

var choice=2;
// switch(choice){
//     case 1:console.log("U r in case 1")
//            break;
//     case 2: console.log("U r in case 2");
//             break;
//     default:  console.log("U r in default Case");
//             break;
// }

//Loop Statement
// for loop,for each ,while,do-while
var count=5;
// while(count!=0){
//     console.log("Count is "+count);
//     count--;
// }

// do{
//     console.log("Count is "+count);
//         count--;
// }while(count!=0)

// for(var i=0;i<4;i++){
//     console.log("Value of i is "+i)
// }
// console.log("Value of i After Loop "+i)

// var => It has a global scope 
// let => It is keyward to create a varibale 
    // => scope within a nearest block 
for(let i=0;i<4;i++){
    console.log("Value of i is "+i)
}

// console.log("Value of i After Loop "+i)

// const => It is keyward to create a varibale but it create a constant value 
// scope => Global as well as local 
const pi=3.14;
// pi=2.5;
