// WAP to input an list, and remove duplicates and return sorted list

// input = [1,2,1,'hey']
// output = [1,2,'hey']
// console.log("hzz" < "hi")

var input = [1,2,4, 1,1,1,'as', 'hey there', 5,5,1,1,"hi","hey", "@", "LL"]
// input.slice


// 1. pick up unique values/ drop duplicates
// 2. sort the list

// 1 - remove other 1s
// 2 -  remove other 2s

// n^2
// for i from 0 to n-1
// for j from i+1 to n-1
//   if arr[i] == arr[j]
//   drop others

// sort - > arr.sort()

// input.sort() // nlogn
// console.log(input)

// var set = new Set(input)
// input.sort()

// console.log(input)
// console.log(input.length)
// console.log(set)
// console.log(set.size)
// arr = [1,2,3,4,5,1,1,1,1,1,1]
// set = [1,2,3,4,5]


function removeDuplicates(arr) {
  return new Set(arr.sort())
}

console.log(removeDuplicates(input))
