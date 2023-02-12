const categoriesItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}\n\n`);

categoriesItems.forEach(item => {
  const categoryTitle = item.firstElementChild.textContent;
  const contatyOfElems = item.lastElementChild.children.length;

  console.log(`Category: ${categoryTitle}\nElements: ${contatyOfElems} \n\n`);
});
