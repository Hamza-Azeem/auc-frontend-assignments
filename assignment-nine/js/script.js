//! first task
// let arr = [];
// for(let i=0; i<5;i++){
//     let num = Number(prompt("Enter a number"));
//     arr.push(num);
// }
// console.log("Printing using for in");
// for(let i in arr){
//     console.log(arr[i]);
// }
// console.log("Printing using for of");
// for(let i of arr){
//     console.log(i);
// }

//! 2nd task  
// let fname = prompt("Enter your first name");
// let lname = prompt("Enter your last name");
// let age = Number(prompt("Enter your age"));
// let country = prompt("Enter your country");
// let isStudent = Boolean(prompt("If you are a student enter anything if not leave it empty."));
// let student = {
//     firstName:fname,
//     lastName:lname,
//     age: age,
//     country: country,
//     isStudent: isStudent
// }
// console.log(student);

// !3rd task
function iterateAndCreateArray(arr, condition){
    newArray = [];
    for(let i of arr){
        if(condition == true && i % 2 == 0){
            newArray.push(i);
        }else if(condition != true && i % 2 != 0){
            newArray.push(i);
        }
    }
    return newArray;
}
let size = Number(prompt("Enter the size of your array"));
let arr = [];
for(let i = 0; i<size;i++){
    if(i == 0)
    let x = Number(prompt("Enter the " + i + "th"))
}
console.log(iterateAndCreateArray(arr, true));
console.log(iterateAndCreateArray(arr, false));