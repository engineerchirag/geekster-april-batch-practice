//  write a function input = (n,arr) output => nth values of array

// input = 3, [1,2,3,46,7,8,2,5,81,2], output = [3,8,81]

let arr = [1,1,1,1,2,3,46,7,8,2,5,81,2] //odd ->1,1,2, even ->1,1,3  (i%2 ==0) = true
let n = 3

// Naive
// function nthValue(n, arr) {
//   let res = []
//   let count = 0
//   let i = 0
//   while(i < arr.length) {
//     count += 1
//     if (count % n == 0) {
//       res.push(arr[i])
//       count = 0
//     }
//     i+=1
//   }
//   return res
// }
// 3, 
// i -> 0, 0%3 -> 0, false,
// -> 1, 1%3 -> 1 false,
// 2, 2%3 - >2, true ->  arr[2]
// JS pro
function nthValue(n, arr) {
  return arr.filter((element, index) => index % n == n - 1)
}
// filter, map, reduce
// console.log(nthValue(n, arr))

// console.log("Even numbers ", arr.filter((a, i) => i % 2 == 1))
// console.log("Odd numbers ", arr.filter((a, i) => i % 2 == 0))
// console.log("Pick 2", arr.filter((a, i) => a == 2))

// console.log(4%2)
// console.log(3%2)

