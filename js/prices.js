const prices = document.querySelectorAll(".price-table__head");
const pricesTitle = document.querySelector(".prices");
const pricesTable = document.querySelector(".price-table");
const payment = document.querySelector(".payment");
const back = document.querySelector(".payment__back-btn");

prices.forEach((price) => {
  const priceHead = price.querySelector(".price");

  priceHead.addEventListener("click", () => {
    pricesTitle.classList.add("availed");
    pricesTable.classList.add("availed");
    payment.classList.add("availed");
  });

  back.addEventListener("click", () => {
    pricesTitle.classList.remove("availed");
    pricesTable.classList.remove("availed");
    payment.classList.remove("availed");
  });
});

const tabTarget = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-price]");

tabTarget.forEach((tabTargets) => {
  const target = tabTargets.getAttribute("data-tab-target");
  const plan = document.querySelector(".payment__chosenplan");

  tabTargets.addEventListener("click", () => {
    plan.textContent = `Your chosen plan is ${target}! `;
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
    creditRadio.checked = false;
    credit.classList.remove("chosen");
    paypalBtn.classList.add("chosen");
    creditBtn.classList.remove("chosen");
  }
});

credit.addEventListener("click", () => {
  creditRadio.checked = true;
  if (creditRadio.checked) {
    paypalRadio.checked = false;
    paypal.classList.remove("chosen");
    credit.classList.add("chosen");
    creditBtn.classList.add("chosen");
    paypalBtn.classList.remove("chosen");
  }
});
