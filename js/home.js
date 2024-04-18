const btn = document.querySelector(".content__create-btn");

btn.addEventListener("click", () => {
  document.body.scrollTop = 99999;
  document.documentElement.scrollTop = 9999;
});
