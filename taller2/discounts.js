/*
es una inplementacion diferente pero da el mismo resultado
const otherApplyDiscount = (p, d) => (p * (100 - d)) / 100;
*/
const applyDiscount = (p, d) => {
  const discountApplied = p - (p / 100) * d;
  console.log(discountApplied);
};

const buttonApply = document.getElementById("buttonApply");
console.log(buttonApply);

buttonApply.addEventListener("click", () => {
  const p = document.getElementById("price").value;
  const d = document.getElementById("discount").value;
  console.log(p);
  console.log(d);
  applyDiscount(p, d);
});
