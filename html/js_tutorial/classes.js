class Abc {
    constructor(val) { this.val = 2 * val}
    ab() {
        console.log(this.val)
    }
}

let refAbc = new Abc(2)
console.log(refAbc)
refAbc.val = 6
console.log(refAbc)

let refAbc1 = new Abc()
console.log(refAbc1)

// var Singleton = (function () {
//     var instance;

//     function createInstance() {
//         var object = new Object("I am the instance");
//         return object;
//     }

//     return {
//         getInstance: function () {
//             if (!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     };
// })();

// function run() {

//     var instance1 = Singleton.getInstance();
//     var instance2 = Singleton.getInstance();

//     console.log("Same instance? " + (instance1 === instance2));
// }

// var kk = (function hh() {
//     var ab = 10
// })()
// iifi
// // console.log(kk, run())

// (function () {

//     var abc = 10
// })()