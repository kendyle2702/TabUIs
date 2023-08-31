// Không Jquery

let tabElements = document.querySelectorAll(".tab-item");

let paneElements = document.querySelectorAll(".tab-pane");

let line = document.querySelector(".line");

// Defalut value at 0
let currentIndex = 0;
// Default line
line.style.width = tabElements[0].offsetWidth + "px";
line.style.left = tabElements[0].offsetLeft + "px";

tabElements.forEach((element, index) => {
  element.addEventListener("click", () => {
    // Update current index of tab-item
    currentIndex = index;
    // Remove old element
    document.querySelector(".tab-item.active").classList.remove("active");
    document.querySelector(".tab-pane.active").classList.remove("active");
    // show new element
    element.classList.add("active");
    paneElements[index].classList.add("active");
    // Show line
    line.style.width = element.offsetWidth + "px";
    line.style.left = element.offsetLeft + "px";
  });
});

// Auto chuyển đổi tabs
setInterval(() => {
  currentIndex++;
  if (currentIndex >= tabElements.length) {
    currentIndex = 0;
  }
  // Remove old element
  document.querySelector(".tab-item.active").classList.remove("active");
  document.querySelector(".tab-pane.active").classList.remove("active");
  // show new element
  tabElements[currentIndex].classList.add("active");
  paneElements[currentIndex].classList.add("active");
  // Show line
  line.style.width = tabElements[currentIndex].offsetWidth + "px";
  line.style.left = tabElements[currentIndex].offsetLeft + "px";
}, 3000);
