const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsElement = document.querySelector("#ingredients");
const ingredientsMassive = [];

for (let item of ingredients) {
  const itemFull = document.createElement("li");
  itemFull.textContent = item;
  itemFull.classList.add("item");
  ingredientsMassive.push(itemFull);
}

ingredientsElement.append(...ingredientsMassive);
