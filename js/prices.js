const table = document.querySelector(".table");
const payment = document.querySelector(".payment");
const description = document.querySelectorAll(".description");
const tabTarget = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-price]");
const back = document.querySelector(".payment__back-btn");

description.forEach((descriptions) => {
  const descButton = descriptions.querySelector(".description__button");

  descButton.addEventListener("click", () => {
    table.classList.add("availed");
    payment.classList.add("availed");
  });

  back.addEventListener("click", () => {
    table.classList.remove("availed");
    payment.classList.remove("availed");
  });

  tabTarget.forEach((tabTargets) => {
    const target = tabTargets.getAttribute("data-tab-target");
    const plan = document.querySelector(".payment__chosenplan");

    tabTargets.addEventListener("click", () => {
      plan.textContent = `Your chosen plan is ${target}! `;
    });
  });
});

const paypalRadio = document.querySelector(".paypal__radio");
const creditRadio = document.querySelector(".credit__radio");
const paypal = document.querySelector(".paypal");
const credit = document.querySelector(".credit");
const paypalBtn = document.querySelector(".paypal__checkout");
const creditBtn = document.querySelector(".credit__checkout");

paypal.addEventListener("click", () => {
  paypalRadio.checked = true;
  if (paypalRadio.checked) {
    paypal.classList.add("chosen");
    credit.classList.remove("chosen");
    paypalBtn.classList.add("chosen");
    creditBtn.classList.remove("chosen");
  }
});

credit.addEventListener("click", () => {
  creditRadio.checked = true;
  if (creditRadio.checked) {
    paypal.classList.remove("chosen");
    credit.classList.add("chosen");
    creditBtn.classList.add("chosen");
    paypalBtn.classList.remove("chosen");
  }
});
