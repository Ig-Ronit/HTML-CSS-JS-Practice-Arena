// Es6 ECMAScript 6 (2015)

// 1. let const

// 2. Template literals (`my name is ${name}`), '', ""

// 3. arrow functions
// ES5
// function sum(a, b) {
//     console.log(a + b)
// }


//ES6

//const sum = (a, b) => console.log(a + b)

//sum(3, 4)

// 4. Destructuring in js
// array destructuring:

const arr = ['x', 'y', 'z']

const [aa, bb, cc] = arr

console.log(aa, bb, cc)

// Objects destructuring:
const person = {
  name: 'Sachin Tendulkar',
  age: 50
}

const { name, age } = person

console.log(name, age)

// 5. Spread and rest parameter:
// a)Spread:
const arr1 = ['x', 'y', 'z']

const arr2 = [...arr1, 'a', 'b']

console.log(arr2)

// b) rest:
function sum(...values) { // [2,3,1,3,5,6]
  let sumCount = 0 // 0,2,5,6
  for (let i = 0; i <= values.length; i++) {
    let el = values[i]; //2,3
    sumCount = sumCount + el //2+3 = 5+1 = 6
  }

  console.log(sumCount) // finally 20
}


sum(2, 3, 1, 3, 5, 6)

// 6) Default parameter:
function func1(num1 = 0) {
  console.log(num1)
}

func1()

// 7) import/Export:
//index.js
import { add } from './utils.js';


console.log(add(3, 3));

sum(5, 4)

//utils.js
export const add = (a, b) => a + b;




// 7) Promises:

const myPromise = new Promise((resolve, reject) => {
  const success = false;
  if (success) {
    resolve('Done!')
  } else {
    reject('Not Done')
  }

})


////////////////////////////////////////////



myPromise.then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)
})

// 8) Async/await

function fakeApi() {
  const success = false
  return new Promise((resolve, reject) => {
    if (success) {
      setTimeout(() => resolve("Data loaded"), 5000);
    } else {
      setTimeout(() => reject("Failure"), 5000);
    }
  });
}


///////////////////////////////////////////////////////////

async function fetchData() {
  try {
    console.log("Fetching...");
    let result = await fakeApi();
    console.log(result);
  } catch (err) {
    console.log(err)
  } finally {
    console.log('finally block')
  }
}

fetchData();