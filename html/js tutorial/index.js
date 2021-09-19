// //video 1
// console.time('code took time');
// console.log('video 1 started');
// console.log('hello world');
// console.log(34+4);
// console.log(38);
// console.log(true);
// console.log([24,25,58,65]);
// console.log({harry:'this',
//  marks:34});
// console.table({harry:'this',
//  marks:34});
// console.warn('This is a warning');
// // console.clear();
// console.timeEnd('code took time');

// //video2
// console.log('video2 started');
// //rules fo creating js variable
// /*
// 1.cannot start with number
// 2.can start with letter,number,_or $
// 3. case are sensitive
// */

// const ownername='tej singh';
// console.log(ownername);

// const city='west bengal';
// console.log(city);

// {
//     let city='lucknow';
//     city='dehradun'
//     console.log(city);
// }
//  console.log(city);

//  const arrl=[1,2,3,4,5]
// arrl.push=[20,25,26]
//  console.log(arrl);

//  /*

//  most common programming case types;
//  1.camel case
//  2.kebab-case
//  3.snake_case
//  4.pascalcase

//  */


//  //video3
//  console.log('video3 started');
//  /*
//  there are 2types of data types
//  1.primative data type
//  2.refrence data type
//  */

//  //primative data type

//  // string
//  let name='sunil'
//  console.log('my name is ' + (name));
//  console.log('data type base ' + (typeof name));

//  //number
//  let marks=86;
//  console.log('Data type base ' + (typeof marks));

//  //boolein
//  let isdriver = false;
//  console.log('data type base ' + (typeof isdriver));

//  //null
//  let varnull = null
//  console.log('data type base ' +(typeof varnull));

//  //undefined
//  let undef = undefined
//  console.log('data type base ' +(typeof undef));

//  //refrence data type
//  //array
//  let arrl1=[1,2,3,1,45,6];
//  console.log('data type base ' + (typeof arrl1));

// //obejct literal
// let run = {
//     rahul: 78,
//     kunal: 85,
//     aman: 86
// }
// console.log('data type base ' + (typeof run));

// //function
// function findname() {
    
// }
// console.log( typeof findname); 

// //date
// let finddate= new Date();
// console.log( typeof finddate);

// //video 4
// console.log('video4 started');
// //type conversion and coercion
// //1 type conversion//
// let myvar;
// myvar =String (34);
// console.log(myvar, (typeof myvar));

// let booleinvar =String (true);
// console.log(booleinvar,(typeof booleinvar))

// let date =String (new Date());
// console.log(date, (typeof date));

// let number = 52.6384;
// console.log(number.toFixed(2), (typeof number));

// //type coercion//
// let mystr = Number('852');
// let mynum = 532;

// console.log(mystr + mynum);

// //video5
// console.log('video5 started');

// const fname = 'anuj';
// const greeting = 'good morning';

// //console.log( greeting + ' ' + fname);

// let html;
// html = "<h1>this is my HEading</h1>"+
//         "<p> this is my para </p>";

// html = html.concat('this' , 'str2')
// console.log(html);
// /*console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());*/

// console.log(html.indexOf('>'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt('40'));
// console.log(html.endsWith('str2'));
// console.log(html.includes('para'));
// console.log(html.substring('1,5'));
// console.log(html.slice('-1'));
// console.log(html.split(''));

// //templateslet
// let fruit1 = `orangle`;
// let fruit2 = `apple`;
// let myhtml = `hello ${name}
//               <h6>this is my heading</h6>
//               <p> l like to eat ${fruit1} and ${fruit2}`;


// document.body.innerHTML = myhtml;

let a = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < a.length; i++) {
//     if (a[i]%2 == 0) {
//         continue
//     }
//     else {
//         add(a[i])
//     }
// }

// function add(m) {
//     return m
// }

// a.forEach(element => {
//     console.log(2* element)
// });
// a.map(x => console.log(2*x))