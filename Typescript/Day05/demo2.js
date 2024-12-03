//basics of Array
// array is growable & shrinkable dynamically 
// array is homogenous as well as hetrogenous 
var a1 = [10, 5, 96, 78];
var a3 = [];
var a4 = [2.5, 'Sumit', 45, true];
var a = [10, 20, 30];
// for(let i=0;i<a.length;i++){
//     console.log("Value of array is "+a[i])
// }
// console.log(a);
// console.log(a.join("#"))
// console.log(a.join(" "))
// console.log(a.join());
a.forEach(function (myvalue, i, kuchbhi) {
    console.log(myvalue + " Index is " + i + " arr is " + kuchbhi);
});
