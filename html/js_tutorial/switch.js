function testSwitch(param) {
let a= param.type
let b= param.num1
let c= param.num2
    // console.log(param, param.type, param.num1, param.num2)
    switch(a){
        case 'plus': console.log(b + c); break;
        case 'minus': console.log(b - c); break;
        default: console.log('bhad me jao')
    }
}
var valu1 = document.getElementById('sampleID')
var valu2 = document.getElementById('sampleID')

let obj = {
    type: type,
    num1: value1,   
    num2: value2
}
testSwitch(obj)
calculator