// class Person {
//     sleep() {
//        console.log("sleep")
//     }
//     eat() {
//         console.log("eat")
//     }
// }

// class engineer extends Person {
//     work() {
//         console.log("solve problems, and build something")
//     }
// }

// class doctor {
//     check() {
//         console.log("does check up")
//     }
// }

// let dheeraj = new engineer();

// let data = "secert information"

// class user {
//     constructor(name,email) {
//         this.name = name;
//         this.email = email;
//     }
//     showdata() {
//         console.log("data is : ",data)
//     }
// }

// let student1 = new user("dheeraj","dheerajmehra@gmail.com");
// let student2 = new user("mohit","mohitsandhu@gmail.com");

//  function hello() {
//     console.log("hello world");
// }
// setTimeout(hello, 2000);

// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("hello world");
// }, 2000);
// console.log("three");
// console.log("four");

// function sum(a,b) {
//     console.log(a+b)
// }
// function calculator(a,b,sumcallback) {
//     sumcallback(a,b)
// }
// calculator(1,2,sum)

// function getdata(dataid,getnextdata) {
//     setTimeout(()=> {
//         console.log("data",dataid);
//         if(getnextdata){
//             getnextdata();
//         }
        
//     },2000)
// }
// getdata(1);
//  getdata(2);

// call back hell!!
// getdata(1,()=> {
//     console.log("getting data2...");
//     getdata(2,()=> {
//         console.log("getting data3...");
//         getdata(3,()=> {
//             console.log("getting data4...");
//             getdata(4,()=> {
//                 console.log("getting data5...");
//                 getdata(5)
//             });
//         });
//     });
// });

// function getdata(dataid,getnextdata) {
//     return new Promise((resolve,reject)=> {
//       setTimeout(()=> {
//         console.log("data",dataid);
//         resolve("sucess");
//         if(getnextdata){
//               getnextdata();
//             }           
//         },5000);
//       });
//     }
    
// const getpromise=()=> {
//     return new Promise((resolve,reject)=> {
//         console.log("this is a promise")
//         // resolve("sucess");
//         reject("network error")
//     });
// };

// let promise = getpromise();
// promise.then((res)=> {
//     console.log("promise fulfilled",res)
// });
// promise.catch((err)=> {
//     console.log("rejected",err)
// })

// function getasync1() {
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             console.log("data1");
//             resolve("sucess");
//         },4000);
//     });
// }


// function getasync2() {
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             console.log("data2");
//             resolve("sucess");
//         },4000);
//     });
// }


// console.log("fetching data1....")
// // let p1 = getasync1();
// // p1.then((res)=> {
// //     console.log(res)
// getasync1().then((res)=>{
//     console.log("fertching data2....")
//     getasync2().then((res)=>{})
//     // let p2 = getasync2();
//     // p2.then((res)=>{
//     //     console.log(res)
//     // })
// // });
// })


// function getdata(dataid) {
//     return new Promise((resolve,reject)=> {
//        setTimeout(()=> {
//           console.log("data",dataid); 
//           resolve("sucess")     
//         },2000)
//     });
// }

// console.log("fetching data1...");
// getdata(1).then((res)=>{
//         console.log(res);
//         console.log("fetching data2...");
//     getdata(2).then((res)=>{
//         console.log(res);
//     })
// })

// promise chain!!
// console.log("getting data1...");
// getdata(1).then((res)=>{
//     console.log("getting data2...");
//     return getdata(2);
// })
// .then((res)=>{
//     console.log("getting data3...");
//     return getdata(3);
// })
// .then((res)=>{
//     console.log(res)
// })

// function api(dataid) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data ",dataid);
//             resolve(200);
//         },2000);
//     });
// }


// async-await!!  &&&  IIFE(immediately invoked function expression) function
// (async function getweatherdata() {
//     console.log("getting data1....")
//     await api(1);
//     console.log("getting data2....")
//     await api(2);
//     console.log("getting data3....")
//     await api(3);
//     console.log("getting data4....")
//     await api(4);
//     console.log("getting data5....")
//     await api(5);
// })();



// promise chain!!
// console.log("getting data1...");
// getdata(1).then((res)=>{
//     console.log("getting data2...");
//     return getdata(2);
// })
// .then((res)=>{
//     console.log("getting data3...");
//     return getdata(3);
// })
// .then((res)=>{
//     console.log(res)
// })


// call back hell!!
// getdata(1,()=> {
//     console.log("getting data2...");
//     getdata(2,()=> {
//         console.log("getting data3...");
//         getdata(3,()=> {
//             console.log("getting data4...");
//             getdata(4,()=> {
//                 console.log("getting data5...");
//                 getdata(5)
//             });
//         });
//     });
// });
