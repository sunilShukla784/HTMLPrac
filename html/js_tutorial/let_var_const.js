// let vs const vs var

// function hoistingEg() {
//     console.log(name)
//     console.log(kname)
//     var name ="vikas"
//     var kname ="chipkali"
//     console.log(name)
//     console.log(kname)
// }

// hoistingEg()

// console.log(name)

    // console.log(name)
    // var name ="vikas"
    // console.log(name)

    // let and const

    // function noHoistLet() {
    //     let a =10
    //     var obj = {
    //         kv: 10
    //     }
    //     {

    //         {

    //             let v =23
    //         }
    //         var m =22
    //         console.log(v, m) //23,22
    //     }
    //     console.log(a, obj, m)//10,kv:10
    // }

    // noHoistLet()


    // const
    // const aaa = 100
    // aaa = 10
    // console.log(aaa)

    const obj = {
        jiya: 'chipkali'
    }
    obj.jiya = 'bandariya'
    obj.jiya2 = 'pagal'
    // obj = {jiya: 'pagal'}
    console.log(obj)