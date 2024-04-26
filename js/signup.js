const term = document.querySelector(".term");
const form = document.querySelector(".form");
const agreementChkbox = document.querySelector(".agreement__checkbox");
const agreementInfo = document.querySelector(".agreement__info");
const termChkbox = document.querySelector(".term__checkbox");
const acceptButton = document.querySelector(".button__accept");
const cancelButton = document.querySelector(".button__cancel");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close-btn");

agreementInfo.addEventListener("click", () => {
  showDisplay();
  enableAcceptButton();
});

termChkbox.addEventListener("change", () => {
  accept();
});

cancelButton.addEventListener("click", () => {
  removeDisplay();
  uncheckAgreement();
});

agreementChkbox.addEventListener("click", () => {
  modal.classList.add("active");
  uncheckAgreement();
  if (modal.classList.contains("active")) {
    modalClose.addEventListener("click", () => {
      modal.classList.remove("active");
      showDisplay();
      enableAcceptButton();
      if (termChkbox.checked === false) {
        uncheckAgreement();
      }
    });
  }
});

const accept = () => {
  acceptButton.addEventListener("click", () => {
    if (termChkbox.checked === true) {
      agreementChkbox.checked = true;
      removeDisplay();
      enableAcceptButton();
    }
  });
};

// display:block and none //
const showDisplay = () => {
  term.classList.add("display");
  form.classList.add("display");
};

const removeDisplay = () => {
  term.classList.remove("display");
  form.classList.remove("display");
};

const uncheckAgreement = () => {
  agreementChkbox.checked = false;
};

const enableAcceptButton = () => {
  acceptButton.disabled = false;
};
