//rest parameter function

function display(...item:number[]){
    console.log(item);
}

//  display(200,300,500);

// Push & pop Method
// LIFO Principal 

// let a:number[]=[];
// a.push(78);
// console.log(a)
// a.push(90,45,30);
// console.log(a);
// let popedValue =a.pop();
// console.log(a)
// console.log("Poped Value is "+popedValue);

// Splice Method 
// let a:number[]=[45,78,60];
// console.log(a);

// a.splice(1,0,800);
// console.log(a);
// a.splice(2,0,900,600);
// console.log(a);
// a.splice(2,1);
// console.log(a);
// a.splice(3,2);
// console.log(a);
// a.splice(1,1,5);
// console.log(a);

//slice
// It copy a section of data & return a new array 

let course:string[]=['Core Java','Advanced java','HTML,CSS,JS','MySql','Spring Core','Spring Boot','Spring MVC','Hibernate','Typescript','Angular 16','AWS','Docker'];

// console.log(course);
// let newArr=course.slice(0,8);
// console.log(course);
// console.log("----------------------------");
// console.log(newArr);

// map
// element by element operation performed

// let a:number[]=[2,3,4,5,6]
// let resArr= a.map((value)=>{
//     return (value*value);
// });
// console.log(a)
// console.log(resArr);



