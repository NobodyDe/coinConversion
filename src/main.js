const value = [5.73, 6.16, 7.31];

const [USD, EUR, GBP] = value;

const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result");

amount.addEventListener("input", () => {
  const rejectCharacters = /\D+/g;

  amount.value = amount.value.replace(rejectCharacters, "");
});

form.onsubmit = (event) => {
  event.preventDefault();
  console.log(currency.value);
  console.log(amount.value);

  switch (currency.value) {
    case "USD":
      console.log(conversionCurrency(amount.value, USD, "US$"));
      break;
    case "EUR":
      conversionCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      conversionCurrency(amount.value, GBP, "£");
      break;
  }
};

function conversionCurrency(amount, price, symbol) {
  try {
    footer.classList.add("show-result");
    description.textContent = `${symbol} 1 = ${formatCurrency(price)}`;
    let total = amount * price;
    total = formatCurrency(total).replace("R$", "");
    result.textContent = total;
  } catch (error) {
    alert("Não foi possivel converter. Tente novamente mais tarde");
    footer.classList.remove("show-result");
    console.log(error);
  }
}

function formatCurrency(value) {
  return Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
