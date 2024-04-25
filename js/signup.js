const agreeInfo = document.querySelector(".agreement__info");
const term = document.querySelector(".term");
const agreeChkbox = document.querySelector(".agreement__checkbox");
const form = document.querySelector(".form");
const termChkbox = document.querySelector(".term__checkbox");
const acceptButton = document.querySelector(".button__accept");
const cancelButton = document.querySelector(".button__cancel");

cancelButton.addEventListener("click", () => {
  term.classList.remove("display");
  form.classList.remove("display");
  agreeChkbox.checked = false;
});

agreeInfo.addEventListener("click", () => {
  term.classList.add("display");
  form.classList.add("display");
  acceptButton.disabled = false;
});

termChkbox.addEventListener("change", () => {
  acceptButton.addEventListener("click", () => {
    if (termChkbox.checked === true) {
      acceptButton.disabled = false;
      term.classList.remove("display");
      form.classList.remove("display");
      agreeChkbox.checked = true;
      agreeChkbox.disabled = false;
    }
  });
});
