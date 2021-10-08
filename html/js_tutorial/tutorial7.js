 /*
console.log('we are in arrays and object properties');
const marks = [18,85,63,45,25];
const fruits = ['orange','apple','mango','banana'];
const mixed = ['Str', 85 , [25,56]];
const arr = new Array(12,16,14,85,45,'orange');
console.log(arr);
console.log(mixed);
console.log(fruits[2]);

console.log(arr.length);
console.log(Array.isArray(12,85));
arr[1] = 'dhoni';
console.log(arr);*/

/*mutating of modifying arrays.
marks.push(59);
marks.unshift(45);
marks.pop();
marks.shift();
marks.splice(0,3);
marks.reverse();
console.log(marks);*/

//video8
//general loops-for,while and do-while.

/*for(let i=0; i<100; i++)
{
    console.log(i);
}*/
/*
let j=0;
while(j<100){
    console.log(j+1);
    j+=1;
}
*/

/*let k=0
do {
  /*  if(k===11){
        break;
    }*/

  /*  if(k===11){
       k+=1;
       continue;
    }
    console.log(k+1);
    k+=1;
} while (k<100);*/

/*let arrays = [21,56,48,54,21];
arrays.forEach(function(element){
    console.log(element);
});*/

/*let obj ={
    name:'raman',
    age:78,
    type:'web developer',
    os: "ubantu",

}

for(let - in obj)
{
    console.log(`The ${key} of object is ${obj[key]}`);
}
console.log('done');*/

// const dig = (obj, target) =>
//   target in obj
//     ? obj[target]
//     : Object.values(obj).reduce((acc, val) => {
//         if (acc !== undefined) return acc;
//         if (typeof val === 'object') return dig(val, target);
//       }, undefined);
// const data = {
//   level1: {
//     level2: {
//       level3: 'some data',
//       ab: {
//           cd: {
//               ef: {
//                   ff: 'lets see'
//               }
//           }
//       }
//     }
//   }
// };
// console.log(dig(data, 'level1')) // 'some data'
// console.log(dig(data, 'level2')) // 'some data'
// console.log(dig(data, 'ff')) // 'some data'

//classes in javascript
//class expression

//unnamed
let Rectangle = class {
  constructor(height,width){
    this.height = height;
    this.width = width;
  }
};

console.log(Rectangle.name);
console.log(Rectangle.height, new Rectangle());








