// const arr = [2,3,4,5,6]
// arr[10] = 100                //  5 empty elements will be there
// console.log(arr)

// function myfunc() {
//     // "use strict"
//     xyz = 100          // reference error
//     console.log(xyz)
// }

// console.log(myfunc())

// var xyz = 1 + abc
// var abc = 100            /// output was NaN
// console.log(xyz)

// const abc = [1,2,3]
// const data = {
//     name: 'rohit'
// }
// console.log(delete data.name)
// console.log(delete abc[1])       // while console delete operator gives boolean so the result is false, false

// const [x, y] = abc
// console.log(x, y)      // output undefined error

// const a = []
// const b = []
// console.log(a == b);     // returns false
// console.log(a === b);

function func1(f2){
    // console.log('this the higher order function')
    f2();
}

func1(function func2() {
    console.log('this is its child function')
});
