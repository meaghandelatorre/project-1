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
function arrMax(arr) {
  let maxSoFar = arr[0];
  arr.forEach(elem => {
    if(elem > maxSoFar) {
      maxSoFar = elem;
    }
  });
  return maxSoFar;
}

//REQ 3d
function sumEvens(arr) {
  let sum = 0;
  for(i of arr) {
    if(i%2==0) {
      sum = sum + i;
    }
  }
  return sum;
}

//XC 3e
function alphaPosition(ch) {

}
