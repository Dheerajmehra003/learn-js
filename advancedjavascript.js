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

//    ------Promises---

// const cart = ['kurta', 'pajama', 'shirt']


// const promise = getCartData(cart)
// console.log(promise)

// promise.then(function(orderId) {
//     console.log(orderId)
//     return orderId
// })
// .then(function(orderId){
//    return proceedToPayment(orderId)
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo)
// })

// .catch(function(error) {
//     console.log(error.message)
// })

// getCartData(cart)
// .then((orderId) => console.log(orderId))
// .then((orderId) => proceedToPayment(orderId))
// .then((paymentInfo) => console.log(paymentInfo))
// .then((paymentInfo) => showOrderSummary(paymentInfo) )
// .then((orderSummary) => console.log(orderSummary))
// .then((orderSummary) => updateWallet(orderSummary))
// .then((walletMessage) => console.log(walletMessage))
// .catch((error) => console.log(error.message))



// function getCartData(cart) {

//     const pr = new Promise(function(resolve, reject) {
//         if(valitdateCart(cart)) {
//             const err = new Error("there is an error")
//             reject(err)
//         }
//         const orderId = '12345'
//         if(orderId) {
//             resolve(orderId)
//         }
//     })
    
//     return pr;
// }

// function valitdateCart(cart) {
//     return false
// }

// function proceedToPayment(orderId) {
//     return new Promise( function(reslove, reject) {
//         reslove('payment was successful')
//     })
// }

// function showOrderSummary(paymentInfo) {
//     return new Promise(function(reslove, reject){
//         reslove('here is the order summary')
//     })
// }

// function updateWallet(orderSummary) {
//     return new Promise(function(reslove, reject){
//         reslove('the wallet is updated')
//     })
// }

// ------Promise APIs --------

// Promise is an object that represents the eventual completion of an async operation

// const p1 = new Promise(function(reslove, reject){
//     setTimeout(() => reslove('p1 is successful'), 2000)
//     setTimeout(() => reject('p1 failed'),2000)
// })
// const p2 = new Promise(function(reslove, reject){
//     setTimeout(() => reslove('p2 is successful'), 5000)
//     setTimeout(() => reject('p2 failed'), 5000)
// })
// const p3 = new Promise(function(reslove, reject){
//     setTimeout(() => reslove('p3 is successful'), 1000)
//     setTimeout(() => reject('p3 failed'), 1000)
// })

//--------Promise all-------

// Promise.all([p1, p2, p3]) 
// .then((res) => {console.log(res)})
// .catch((error) => {console.error(error)})

//----Promise all settled------

// Promise.allSettled([p1, p2, p3])
// .then((res) => {console.log(res)})
// .catch((error) => {console.error(error)})

//------Promise race--------
// Promise.race([p1, p2, p3])
// .then((res) => {console.log(res)})
// .catch((error) => {console.error(error)})

//------Promise any---------
// Promise.any([p1, p2, p3])
// .then((res) => {console.log(res)})
// .catch((error) =>
//      {console.error(error);
//       console.log(error.errors)
//      }
//     )

// const p = new Promise(function(reslove, reject) {
//     // reslove('promise is successful')
//     reject('promise is failed')
// })

// async function handlePromise() {
//     try {
//         const val = await p;
//         console.log(val)
//     } catch (error) {
//        console.log(error) 
//     }
 
// }
// handlePromise();

// -------This keyword ------------

//this keyword in global scope  shows window object
// console.log(this)

// // this keyword value in function depends on strict or non-strict mode in strict mode the value is undefined 
// // but in non-strict mode the value of this is window object
// // this code is in non-strict mode
// console.log(this)

// // this in object method
// const demoObject = {
//     name: 'Dheeraj',
//     age: 34,
//     printName: function () {
//         console.log(this)
//         // console.log(this.name)
//     }
// }
// demoObject.printName()

// const demoObject2 = {
//     name: 'rohit',
//     age: 45,
// }

// demoObject.printName.call(demoObject2)

// // this keyword in arrow function 
// const student = {
//     name: 'Dheeraj',
//     age: 34,
//     printName: ()=>{
//         console.log(this)
//         // console.log(this.name)
//     }
// }

// student.printName()

// // second method to use this in arrow function
// const student2 = {
//     name: 'Dheeraj',
//     age: 34,
//     x: function () {
//         const y = () => {
//         console.log(this)
//         // console.log(this.name)
//     };
//     y();
//     }
// }
// student2.x()

// this keyword in DOM element 
// used in button element

//-------Call Apply bind -----------------

// function borrowing-call
// const demoObject = {
//     name: 'Dheeraj',
//     age: 34,
// }
//  let printName = function (hometown, state) {
//     console.log(this.name + " from " + hometown + " " + state)
// }
// printName.call(demoObject, "Haldwani", "Uttarakhand")

// const demoObject2 = {
//     name: 'rohit',
//     age: 45,
// }

// const demoObject3 = {
//     name: 'Rahul',
//     age: 45,
// }

// printName.call(demoObject2, "Barwala", "Haryana")

// // apply method is same as call it just have to make a array of set of the arguments passed after object name
// printName.apply(demoObject2, ["Barwala", "Haryana"])

// // bind create a new variable which returns a function where it bind the function and the call then call the variable 
// let printdemo3 = printName.bind(demoObject3,"mumbai", 'Maharastra')
// printdemo3();

 document.getElementById("heading").innerText = "Learning dom manipulation"