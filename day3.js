// let a =[1,2,3,4,5,6,7,8]
// let b =[11,12,13,14,15,6,17,18]
// // delete a[0]
// // console.log(a)
// let newarray=a.concat(b)
// console.log(newarray)
 
// let a = [ 2 ,1,12,15,23,24,5,444,3333,67,66,98]
// let b=[1,12,15,2,23,24,3333,444,5,66,67,98]
// let c=a.sort()
// console.log("after sorting the array will be ",c)
// // console.log("the array i sorted is ",b)
// let compare=(a,b)=>{
//     return a-b
// }
// let d=a.sort(compare)
// console.log("after sorting the array will be ",d)

// let a = [ 2 ,1,12,15,23,24,5,444,3333,67,66,98]
// a.splice(2, 3, 999, 999, 999)
// console.log("the new array after adding the elementa is ",a)
// let b= [ 2 ,1,12,15,23,24,5,444,3333,67,66,98]
// let c=b.slice(4,6)
// console.log("the new array  is ",c)

// let b= [ 2 ,1,12,15,23,24,5,444,3333,67,66,98]
// for(let i of b){
//   console.log(i)
// }

// let b= [ 2 ,1,12,15,23,24,5,444,3333,67,66,98]
// b.forEach(element => {
//     console.log(element*element)
// });

// let b= [ 2 ,1,12,15,23,24,5,444,3333,67,66,98]
// let a =b.map((value )=>{
//     console.log(value)
//     return value + 1
// })
// console.log(a)
 
// let a =[12,3,5,67,78,56]
// let b =a.filter((value)=>{
//     return value>50
// })
// console.log(b)

// let a =[12,3,5,67,78,56]
// let b=a.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(b)

//practice set
// let a =[ 1,2,4,5]
// let b =a.push(23,24,45)
// console.log(a)
// console.log(b)
// let a =[10,22,30,40,13,100]
// let b=a.filter((value)=>{
//     return value%10==0
// })
// console.log(b)
// let a = [1,2,3,4,5]
// let b = a.reduce((p1,p2)=>{
//      return p1*p2
// })
// console.log(b)
alert("hello this is javascipt ")
let a =prompt("enter a number","234")
a=Number.parseInt(a)
alert("the number you enter is a " + (typeof a))
let write= confirm("do you want it to write on the page")
if(write){
    document.write(a)
}
else{
    document.write("please allow me to write the number")
}