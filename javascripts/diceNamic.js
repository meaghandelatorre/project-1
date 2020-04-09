// jshint esversion: 7

//define helper functions here
let rollDie = () => {
  return Math.floor(Math.random() *6) +1;
}

//Define a controller to handle the button click
let controller = function() {

  let target, d1, d2, rollCount = 0, d1URL, d2URL, imgElem1, imgElem2, cheeryMsg, outputStr;

  target = document.querySelector("input").value;
  console.log(target);

  do{
    d1 = rollDie();
    d2 = rollDie();
    ++rollCount;
    console.log(`${d1} ${d2} ${rollCount}`);
  } while (d1 + d2 != target);
  //Input: prompt the user for cost and diameter

  d1URL = `images/die${d1}.gif`;
  console.log(d1URL);
  imgElem1 = document.querySelector("#imgElem1");
  imgElem1.setAttribute("src", d1URL);

  d2URL = `images/die${d2}.gif`;
  console.log(d2URL);
  imgElem2 = document.querySelectorAll("img")[1];
  imgElem2.setAttribute("src", d2URL);

  cheeryMsg = `You hit your number in ${rollCount} roll${(rollCount == 1)?"":"s"}!`;
  document.querySelector("div").innerHTML = cheeryMsg;

};

//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");


  //register the click handler for the button
  button.addEventListener("click", controller);
});
