//
// eternal-tales script.js
// nothing crazy yet, just basic interactions
//

console.log("eternal-tales loaded");

// simple page loaded message
document.addEventListener("DOMContentLoaded", () => {
  console.log("page ready");

  // optional: fade-in effect for body
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.6s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

//
// optional button interaction (if you use a button with id="enterBtn")
//
const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {
  enterBtn.addEventListener("click", () => {
    console.log("enter clicked");

    // simple action for now
    alert("more coming soon.");
  });
}
