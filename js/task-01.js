const title = document.querySelectorAll("#categories > li");
console.log(`Number of categories: ${title.length}`);

for (let elem of title) {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
}
