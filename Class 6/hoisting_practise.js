// let a
// console.log('a: ', a)
// a=4

// let b = 8
// console.log('b:', b)


// lv
// fun (lv, lv2, lv0)
// fun2(lv2)
// gv

// lv
// gv
// fun
// lv
// lv2
// lv0

// variables 
// functions
// classes

// var a = 10
// function a_func() {
//   let a = 90;
//   console.log(a)
// }
// a_func()
// console.log(a)

// function fun1() {
//   function func2() {
//     return 2;
//   }
//   return 3;
//   function func3() {
//     return 10;
//   }
// }
// console.log(func1())

// function fun1() {
//   function func2() {
//     return func3();
//   }
//   return func2();
//   function func3() {
//     return 10;
//   }
// }
// console.log(func2())


var obj = {
  "a": 1, 
  "b": 2
}
var obj2 = {
  "a": 1, 
  "b": 2
}
// console.log(obj)
// obj["b"] = 8
// console.log(obj)

var obj1 = obj

// console.log("obj"+JSON.stringify(obj))
// console.log("obj1"+JSON.stringify(obj1))

// obj1["b"] = 2

// console.log("obj"+JSON.stringify(obj))
// console.log("obj1"+JSON.stringify(obj1))
delete obj.b
delete obj1.a
console.log("obj"+JSON.stringify(obj))
console.log("obj1"+JSON.stringify(obj1))



