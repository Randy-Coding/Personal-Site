let background_box = document.querySelector(".background_box");
let toggle_box = document.querySelector(".toggle_box");
let circle = document.querySelector(".circle");
let checkbox = document.getElementById("checkbox");
let images = document.querySelectorAll("img");

toggle_box.onclick = function () {
  if (checkbox.checked) {
    circle.style.transform = "translateX(50px)";
    circle.style.backgroundColor = "#1e0b1e";
    toggle_box.style.backgroundColor = "#C3B1E1";
    document.body.classList.add("dark-theme");
    swapImages("dark");
  } else {
    circle.style.transform = "translateX(0px)";
    circle.style.backgroundColor = "#C3B1E1";
    toggle_box.style.backgroundColor = "#1b102b";
    document.body.classList.remove("dark-theme");
    swapImages("light");
  }
};

function swapImages(choice) {
  let images = document.querySelectorAll("img");
  images.forEach((image) => {
    console.log(image.src);
    if (choice == "light") {
      image.src = image.src.replace("dark", "light");
    } else if (choice == "dark") {
      image.src = image.src.replace("light", "dark");
    }
  });
}
