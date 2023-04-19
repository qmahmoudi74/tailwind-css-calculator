const buttons = document.getElementById("buttons");
const experssion = document.getElementById("experssion");
const input = document.getElementById("input");

const actions = {
  C: () => {
    experssion.value = "";
    input.value = "";
  },
  DEL: () => {
    input.value = input.value.slice(0, -1);
  },
  "%": () => {
    experssion.value += `${input.value} % `;
    input.value = "";
  },
  "/": () => {
    experssion.value += `${input.value} / `;
    input.value = "";
  },
  "*": () => {
    experssion.value += `${input.value} * `;
    input.value = "";
  },
  "-": () => {
    experssion.value += `${input.value} - `;
    input.value = "";
  },
  "+": () => {
    experssion.value += `${input.value} + `;
    input.value = "";
  },
  "=": () => {
    experssion.value += input.value;
    input.value = eval(experssion.value);
  },
  ".": () => {
    if (input.value.includes(".")) return;
    else if (!input.value) input.value = "0.";
    else input.value += ".";
  },
  0: () => {
    if (!input.value) return;
    else input.value += "0";
  }
};

buttons.addEventListener("click", (event) => {
  const value = event.target.value;

  if (!value) return;
  else if (input.value.length > 12) input.value = input.value.slice(0, -1);

  if (!isNaN(parseInt(value)) && value !== "0") input.value += value;
  else actions[value]();
});
