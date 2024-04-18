const box = document.querySelectorAll(".box");

box.forEach((box) => {
  const boxHead = box.querySelector(".head");

  if (boxHead) {
    boxHead.addEventListener("click", (event) => {
      box.classList.toggle("expanded");
    });
  }
});
