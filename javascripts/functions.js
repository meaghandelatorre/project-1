//jshint esversion: 7

//REQ 3b
let arrAvg = (arr) => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

//REQ 3c
let arrMax = (arr) { (like a for loop)
  //
};

ex:
let fruits = ["Apple", "Orange", "Plum"];
// let result = "";
let maxSoFar = fruits[0].length;

//iterate over array ay
fruits.forEach((elem) => {
  if(elem.length > maxSoFar) {
    maxSoFar = elem.length;
  }
//  result = `${result} ${elem}`; //if we wanted length,
  //we would put elem.length so youd see 5 6 4
  //if we wanted longest word we declare variable
  // called "maxSoFar"
});
console.log(result);
