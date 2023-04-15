// set initial count

count = 0;

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

btns.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

/*
// Solutie Silviu

// set initial count

let count = 0;

const value = document.getElementById("value");

// decrease
const decrease = document.querySelector(".decrease");
decrease.addEventListener("click", function () {
  count--;
  value.textContent = count;
});

// increase
const increase = document.querySelector(".increase");
increase.addEventListener("click", function () {
  count++;
  value.textContent = count;
});

// reset
const reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
  count = 0;
  value.textContent = count;
});

*/
