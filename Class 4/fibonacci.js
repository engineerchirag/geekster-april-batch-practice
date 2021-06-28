// (0,1..nth)

// WAP to accept the value of n, store fibonacci numvers till that nth position and return that array. 
// Print the whole array where that function is called.

// console.log(isNaN(11))
// console.log(Number.isNaN('hello world'))

let arr = [0,1]

function fact(n){
    if(n < 2){
        return n;
    } else { 
      // arr.push(fact(n-1) + fact(n-2))
      // console.log(arr)
      return fact(n-1) + fact(n-2)
    }
    // arr.push(a+b);
    // return arr;
}
// console.log(fact(5));
console.log(fact(5))

// console.log(arr);

// 0 1 1 2 3 5


// function fact(n) {
//   if (n == 1)
// }