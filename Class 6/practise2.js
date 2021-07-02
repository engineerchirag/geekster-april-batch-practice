// input arr sorted[1,3,5,7,9], x=4, output = > proposed index -?

// Arrays.binarySearch(arr, element) = > +ve, -ve (n-1 - -ve + 1)

// var arr = [0,1,2,3,4,5]

// console.log(arr.indexOf(1))



// var a = 2;
// var f = function func() {
//   console.log(a)
//   var a = 20;
// }

// f();


// console.log((0.1 + 0.2))
// console.log(0.1 + 0.2 == 0.3)

// var arr = 'hello'.split('')  //arr
// var rev = arr.reverse()
// var arr1 = 'hey'.split('')  //arr
// // arr1.push(arr)
// // console.log(arr+ "length" + arr.length)  //5
// // console.log(arr1+ "length" + arr1.length)  //4

// var res = arr.concat(arr1)
// console.log(res)




// console.log(1 + "2" + "2")
// console.log(1 + +"2" + "2")
// console.log(1+ -"1" + 2 + "2")
// console.log("A" + "B")
// console.log("A" + "B" + 4 + +"2")
// console.log("A" - "B" + 2)
// console.log("B" - "A")
// console.log(3.5+1.2)

// console.log(0 || 1)
// console.log(0 && 1)
// console.log("0 || 1 = " + (0 || 1))
// console.log("1 || 2 = " + (1 || 2))
// console.log("2 && 1 && 3 = " + (2 && 1 && 3))
// console.log("1 && 2 && 3 = " + (1 && 2 && 3))

var obj = {}, obj1 = {"a":1}, obj2={"c":2}

obj["a"] = 1
obj[obj1] = 3; //obj['Object Object'] = 3
obj[obj2] = 4; //obj['Object Object'] = 4
// obj = {
//   a: 1,
//   {"a":1} : 3,
//   {"c":2}: 4
// }

// [Object [Object]] - > JSON.stringify
console.log(obj)
for (let key in obj) {
  console.log(key)
}
// console.log(obj[obj1])  //3

