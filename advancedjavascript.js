// document.getElementById('btn').addEventListener('click', function () {
//     console.log('button clicked')
// })

// var a = 10;
// let b = 10;

// console.log(a)

// setTimeout(() => {
//     console.log('timeout called')
// }, 5000);


// console.log(b)
 
// function outer() {
//     let c = 10;
//     function inner() {
//         console.log("c :", c);
//     }
//     inner()
// }

// outer();
// const radius = [2, 4, 5, 6]

// const Area = function(radius) {
//    return Math.PI * radius * radius
// }

// const Circumstance = function(radius) {
//    return Math.PI * radius * radius
// }

// const calculate = function(radius,logic) {
//     const output = []
//     for(let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]))
//     }
//     return output;  
// }

// console.log(calculate(radius,Area))

// const arr = [2,4,5,6,7,54,3,2,4,56,6]

// const users = [
//     {
//         firstName: 'Dheeraj',
//         lastName: 'Mehra',
//         age: '23'
//     },
//     {
//         firstName: 'Tarun',
//         lastName: 'verma',
//         age: '23'
//     },
//     {
//         firstName: 'Rohit',
//         lastName: 'Kumar',
//         age: '20'
//     },
// ]


// function oddNumbers (x) {
//     return x % 2 === 0
// }
// function evenNumbers (x) {
//     return x % 2
// }
// function deleteNumber (x) {
//     return x != 54
// }

// function sum(arr) {
//     let add = 0;
//     for(i=0;  i < arr.length; i++){
//         add = add+ arr[i]
//     }
//     return add;
// }
// function findmaximum(arr) {
//    let max =0
//    for(i=0; i<arr.length; i++){
//     if(arr[i]>max) {
//         max = arr[i]
//     }
//    }
//    return max;
// }

// const fullName = users.map((x) => {
//    return(
//     x.firstName + " " + x.lastName
//    ) 
// })



// const odd = arr.filter(oddNumbers)
// const even = arr.filter(evenNumbers)
// const number = arr.filter(deleteNumber)
// const output =arr.reduce(function(acc,curr){
//     acc = acc + curr
//     return acc
// },0)

// const maximum = arr.reduce(function(acc, curr){
//     if(curr>acc){
//         acc = curr
//     }
//     return acc
// },0)

// const age = users.reduce(function(acc, curr){
//   if(acc[curr.age]){
//     acc[curr.age] = ++acc[curr.age]
//   }
//   else {
//     acc[curr.age] = 1
//   }
//   return acc
// },{})


// const findFirstname = users.filter((x) => x.age>20).map((x) => x.firstName)


// console.log(sum(arr))
// console.log(odd)
// console.log(even)
// console.log(number)
// console.log(output)
// console.log(findmaximum(arr))
// console.log(maximum)
// console.log(fullName)
// console.log(age)
// console.log(typeof(users))
// console.log(typeof(sum))
// console.log(findFirstname)

                            //    ------Promises-----

                            
