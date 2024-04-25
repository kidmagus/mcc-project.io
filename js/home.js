const testBtn = document.querySelector(".content__create-btn");

testBtn.addEventListener("click", () => {
  document.body.scrollTop = 99999;
  document.documentElement.scrollTop = 9999;
});
