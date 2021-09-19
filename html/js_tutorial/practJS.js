// console.log('hello world')

// function birthday(a) {
//         console.log('Happy Birthday', a)
//     }
    
//     birthday('vikas')
//     birthday('babu')


//     'use strict'; 
//     // var a;
// a = 10;
// console.log(a)

//hoisting
//  var a;
//  a = 10  // initialization
//  console.log(a)
//  var a;  // declaration

//  birthday('vikas')
//  function birthday(a) {
//     console.log('Happy Birthday', a)
// }

// let vs var vs const

// let => block scoped
// var => funcition scoped
(function scopeTest() {
    var a = 10
    let b = 11
    {
        let c = 12
        var d = 13
        console.log(c,d)
    }

    console.log(a,b, d)

})()

// const => cannot change the value
const e =123
// e = 33
console.log(e, typeof e)
