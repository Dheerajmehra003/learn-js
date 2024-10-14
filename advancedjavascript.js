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
// console.log(findFirstname

//    ------Promises---

const cart = ['kurta', 'pajama', 'shirt']


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

// ------Promise methods --------

const p1 = new Promise(function(reslove, reject){
    // setTimeout(() => reslove('p1 is successful'), 2000)
    setTimeout(() => reject('p1 failed'),2000)
})
const p2 = new Promise(function(reslove, reject){
    // setTimeout(() => reslove('p2 is successful'), 5000)
    setTimeout(() => reject('p2 failed'), 5000)
})
const p3 = new Promise(function(reslove, reject){
    // setTimeout(() => reslove('p3 is successful'), 1000)
    setTimeout(() => reject('p3 failed'), 1000)
})

//--------Promise APIs-------

Promise.all([p1, p2, p3]) 
.then((res) => {console.log(res)})
.catch((error) => {console.error(error)})

//----Promise all settled------

Promise.allSettled([p1, p2, p3])
.then((res) => {console.log(res)})
.catch((error) => {console.error(error)})

//------Promise race--------
Promise.race([p1, p2, p3])
.then((res) => {console.log(res)})
.catch((error) => {console.error(error)})

//------Promise any---------
Promise.any([p1, p2, p3])
.then((res) => {console.log(res)})
.catch((error) =>
     {console.error(error);
      console.log(error.errors)
     }
    )


