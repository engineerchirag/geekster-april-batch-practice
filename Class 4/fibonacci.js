// // (0,1..nth)

// // WAP to accept the value of n, store fibonacci numvers till that nth position and return that array. 
// // Print the whole array where that function is called.

// // console.log(isNaN(11))
// // console.log(Number.isNaN('hello world'))

// let arr = [0,1]

// function fact(n){
//     if(n < 2){
//         return n;
//     } else { 
//       // arr.push(fact(n-1) + fact(n-2))
//       // console.log(arr)
//       return fact(n-1) + fact(n-2)
//     }
//     // arr.push(a+b);
//     // return arr;
// }
// // console.log(fact(5));
// console.log(fact(5))

// // console.log(arr);

// // 0 1 1 2 3 5


// // function fact(n) {
// //   if (n == 1)
// // }

// function fact(n){
//   if(n < 2){
//   return n;
//   }
//   else{
//       return fact(n-1)+fact(n-2);
//   }
// }
// let arr = [];
// const num = 10;
// for(let i=0; i<num; i++){
//   arr[i] = fact(i);
// }
// console.log(arr);

let arr = [1,2,1,2,5,'hi','haa']
arr.sort();
console.log(arr);
var set = new Set(arr);
console.log(set);