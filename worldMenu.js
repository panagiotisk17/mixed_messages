//Generates random number from 0 to the number - 1;
function generateRandomNumber(num) {
  return Math.floor(Math.random() * num)
};

// Object with nested arrays
const menuList = {
  startersMenu:  
  ['Spanakopita (Greek Spinach Pie)', 'Balsamic Bruschetta (Italian)', 
  'Tarte au Camembert (French Cheese Tart)', 'Pork Dumplings (Chinese)',
  'Cucumber and Avocado Sushi (Japanese)', 'Indian Masala Chicken Wings', 
  'Jamaican Saltfish Fritters', 'Chicken Enchilada Nachos (Mexican)', 
  'Fried Rice Cakes (Brazilian-Style)', 'Fried Green Tomatoes (USA)', 
  'Ash-e-jow (Iranian/Persian Barley Soup)', 'African Peanut Soup' ],

  mainsMenu: 
  ['Moussaka (Greek)','Lasagne Alla Bolognese Saporite (Italian)', 
  'Lobster Thermidor (French)', 'Hunan Kung Pao (Chinese)', 
  'Beef Kushiyaki (Japanese)', 'Indian Chicken Curry (Murgh Kari)', 
  'Jamaican Jerked Chicken', 'Beef Enchiladas (Mexican)', 
  'Brazilian Chicken A Mineira', 'Mississippi Pot Roast (USA)', 
  'Flavorful Iranian/Persian Braised Lamb Shanks', 'Lamb Tagine (North African)'],

  dessertsMenu: 
  ['Galaktoboureko (Greek)', 'Tiramisu (Italian)',
  'Creme Brulee (French)', 'Chinese Sticky Rice Cake', 
  'Spongy Japanese Cheesecake', 'Shahi Tukra (Indian Bread Pudding)', 
  'Jamaican Banana Bread', 'Mexican Tres Leches Cake (Pastel de 3 Leches)', 
  'Sweet Cornmeal Cake Brazilian-Style', 'Bread Pudding with Vanilla Sauce (USA)', 
  'Wheat Flour Halva (Iranian/Persian)', 'West African Lime Cake']
};

// Stores the 'menu' in an array
let personalMenu = []
  
// Iterates over the object
for(let food in menuList) {
  let optionIdx = generateRandomNumber(menuList[food].length)

 
  switch(food) {
    case 'startersMenu':
      personalMenu.push(`Your choice of starter today is ${menuList[food][optionIdx]}.`)
      break;
    case 'mainsMenu':
      personalMenu.push(`Your choice of main today is ${menuList[food][optionIdx]}.`)
      break;
    case 'dessertsMenu':
      personalMenu.push(`Your choice of dessert today is ${menuList[food][optionIdx]}.`)
      break;
    default:
      personalMenu.push('Sorry the choice is not available')
  }
}

//Function that displays the random menu
function formatMenu(_menuList) {
  const formatted = personalMenu.join('\n')
  console.log(formatted)
};

formatMenu(personalMenu);


