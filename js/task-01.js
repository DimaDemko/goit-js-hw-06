const numofcat = document.querySelectorAll(".item");
console.log(`Number of categories: ${numofcat.length}`);

const item = document.querySelector(".item");
const firstelement = item.firstElementChild;
console.log(`Category: ${firstelement.textContent}`);
console.log(item.lastElementChild.children.length);
// const secondelement = categone.nextElementSibling;
// console.log(`Category: ${secondelement.textContent}`);

const seconditem = item.nextElementSibling;
const secondelement = seconditem.firstElementChild;
console.log(`Category: ${secondelement.textContent}`);
console.log(seconditem.lastElementChild.children.length);

const thirditem = seconditem.nextElementSibling;
const thirdelement = thirditem.firstElementChild;
console.log(`Category: ${thirdelement.textContent}`);
console.log(thirditem.lastElementChild.children.length);
