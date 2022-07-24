const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsElem = document.querySelector("#ingredients");
const elements = [];

for (let item of ingredients) {
  const elem = document.createElement("li");
  elem.textContent = item;
  elem.className = "item";
  elements.push(elem);
}

ingredientsElem.append(...elements);
