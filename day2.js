// let a = 4
// if(a>0){
//     console.log("this is a valid page")
// }
// let a = -4
// if(a>0){
//     console.log("this is a valid page")
// }
// else(a<0){
//     console.log("this is a invalid page")
// }
// let a = 15
// if(a<0){
//     console.log("this is a invalid age");
// }
// else if(a<9){
//     console.log("you are a kid.This is a invalid age for driving");
// }
// else if(a>9 && a<18 ){
//     console.log("this is a invalid age for driving");
// }
// else{
//     console.log("you can drive");
// }
// this is an ternary operator------>
// let a=25
// console.log("you can", (a<18? "not drive" : "drive"))
// let a = 21
// if(a>10 && a<20)
//     console.log ("the lies between 10 and 20")
// else{
//     console.log("the age is greater than 20")
// }
// switch satement
// let a =14
// switch(a){
//     case 12:
//         console.log("your age is 12")
//         break
//     case 13:
//         console.log("your age is 13")
//         break
//     case 14:
//         console.log("your age is 14")
//         break
//      default:
//         console.log("your age is not special")
// }
// let a=6
// if( a%2==0 && a%3==0 ){
//     console.log("the number is divisible by 2 and 3")
// }
// else{
//     console.log("the number is not divisible by 2  and 3")
// }
//  for( let a =0;a<10;a++){
//   console.log("this is number",a)
//  }

// sum of n numbers----->
// let n = 10
// let sum=0
// for(let i=0;i<n;i++){
//     sum += i
//     console.log("sum is ",sum)
// }
// console.log("sum of n numbers is ",sum)

// for in loop------>
// let obj={
//     shubh :45,
//     ritika :56,
//     saurav: 78
// }
// for(let a in obj){
//     console.log("the marks of " + a + " is "  +  obj[a])
// }

// for of loop------>
// for(let b of "dheeraj"){
//     console.log(b)
// }
// let n=5
// let i=0
// while(i<n){
//     console.log(i)
//     i++
// }
// let n=5
// let i=0
// do{
//     console.log(i)
//     i++
// }while(i<n)

// function----->
// function sum(x,y){
//     return x+y/2 
// }
// let a=3
// let b=6
// let c=9
// console.log("the average  of a and b is: ",sum(a,b))
// console.log("the  average of c and b is: ",sum(c,b))
// console.log("the average  of a and c is: ",sum(a,c))
// let obj={
//     harry:97,
//     rohan:56,
//     akash:75
// }
// for(let i in obj){
//     console.log("marks of " + i+ " are "+obj[i])
    
// }
// let obj={
//     harry:97,
//     rohan:56,
//     akash:75
// }
// let i=0
// for(let i;i<4;i++){
//   console.log(obj[i])
// }
// let name="dheeraj"
// console.log(name[0])
// console.log(name[1])
// console.log(name[2])
// console.log(name[3])
// console.log(name[4])
// console.log(name[5])
// console.log(name[6])

//template literals
//  let boy1="parmod"
// let boy2="nikhil"
// let sentence=`${boy1} is the friend of ${boy2}`
// console.log(sentence)

//escape sequence character
// let fruit='bana\'na'
// console.log(fruit)

//string methods
// let a="dheeraj"
// console.log(a.length)

// console.log(a.toUpperCase())
// console.log(a.slice(2,5))
// console.log(a.replace("dhe","ory"))

// let a = "dheeraj"
// let b = "mehra"
// console.log(a.concat(" is a friend of ",b))
// let c ="     meena     "
// console.log(c.trim())
// console.log(c)

// let a ="shivika"
// let i=0
// for(let i in a){
//     console.log(a[i])
// }
// const a ="the quick brown fox jumps over the lazy dog"
// const b="fox2"
// console.log(`the word " ${b} " ${a.includes(b)? 'is' :'is not'} in the sentence`)

// let a = "please give me Rs 1000"
// let b = a.slice("please give me Rs".length)
// console.log(b)

// let a = "dheeraj"
// console.log(a.replace("e"."i"))

//array

// let a=[10,20,40,null]
// a[4]="hello"
// a[0]=12
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])
// console.log(a)

// console.log(typeof a)

// to string--->
// let a=[10,2,4,5]
// let b= a.toString()
// console.log(b)

// to join--->
// let a=[10,2,4,5]
// let b= a.join("-")
// console.log(b)

// let a =[10,2,4,5]
//  let b =a.pop()
//  console.log(a,b)
//  a.push(23)
//  console.log(a)

// let a =[10,2,4,5]
//  let b =a.shift()
//  console.log(a,b)
//  a.unshift(23)
//  console.log(a)