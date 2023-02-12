const ingredientsList = document.getElementById('ingredients');

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function createIngredientsItems(ingredients = []) {
  return ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    item.className = 'item';

    return item;
  });
}

ingredientsList.append(...createIngredientsItems(ingredients));
