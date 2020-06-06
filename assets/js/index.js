import * as CrComLib from "@crestron/ch5-crcomlib";

// Basic Example of a single button

// const button = document.querySelector(".demo");
// button.addEventListener("click", function () {
//   console.log("Button Pressed");
//   CrComLib.publishEvent("b", "1", true);
//   setTimeout(() => CrComLib.publishEvent("b", "1", false), 200);
// });

// Example of a container of buttons
function handleSourcePress(e) {
  // Sends value from the button to analog join 1 in simpl
  CrComLib.publishEvent("n", "1", e.target.value);

  // interlock logic
  // get any source buttons with active css
  var els = document.getElementsByClassName("demoActive");
  // set the elemeent back to demo
    Array.from(els).forEach((el) => {
      document.getElementById(el.id).className = "demo";
    });
  document.getElementById(`src${e.target.value}`).className = "demoActive";
}

document.querySelector(".sources").addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    handleSourcePress(event);
  }
  event.stopPropagation();
});
