const dishImages = import.meta.glob('./assets/dishes/*.jpg', { eager: true, query: '?url', import: 'default' });

export const extra_food_items = [
  {
    "id": 26,
    "food_name": "Antiguan Breakfast (Chop Up and ‘Saltfish’)",
    "food_category": "breakfast",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 199,
    "image": "./assets/dishes/meal-53430.jpg"
  },
  {
    "id": 27,
    "food_name": "Breakfast Potatoes",
    "food_category": "breakfast",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 296,
    "image": "./assets/dishes/meal-52965.jpg"
  },
  {
    "id": 28,
    "food_name": "Dutch poffertjes (mini pancakes)",
    "food_category": "breakfast",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 393,
    "image": "./assets/dishes/meal-53379.jpg"
  },
  {
    "id": 29,
    "food_name": "Flija Layered Pancake / Crepe",
    "food_category": "breakfast",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 490,
    "image": "./assets/dishes/meal-53413.jpg"
  },
  {
    "id": 30,
    "food_name": "Fruit and Cream Cheese Breakfast Pastries",
    "food_category": "breakfast",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 587,
    "image": "./assets/dishes/meal-52957.jpg"
  },
  {
    "id": 31,
    "food_name": "Grits",
    "food_category": "breakfast",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 684,
    "image": "./assets/dishes/meal-53450.jpg"
  },
  {
    "id": 32,
    "food_name": "Home-made Mandazi",
    "food_category": "breakfast",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 781,
    "image": "./assets/dishes/meal-52967.jpg"
  },
  {
    "id": 33,
    "food_name": "Jamaican Cornmeal Porridge",
    "food_category": "breakfast",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 878,
    "image": "./assets/dishes/meal-53363.jpg"
  },
  {
    "id": 34,
    "food_name": "Rømmegrøt – Norwegian Sour Cream Porridge",
    "food_category": "breakfast",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 975,
    "image": "./assets/dishes/meal-53118.jpg"
  },
  {
    "id": 35,
    "food_name": "Salmon Eggs Eggs Benedict",
    "food_category": "breakfast",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 1072,
    "image": "./assets/dishes/meal-52962.jpg"
  },
  {
    "id": 36,
    "food_name": "Smoked Haddock Kedgeree",
    "food_category": "breakfast",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 1169,
    "image": "./assets/dishes/meal-52964.jpg"
  },
  {
    "id": 37,
    "food_name": "Torrijas",
    "food_category": "breakfast",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 265,
    "image": "./assets/dishes/meal-53415.jpg"
  },
  {
    "id": 38,
    "food_name": "Yemeni Lahsa (Elite Shakshuka)",
    "food_category": "breakfast",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 362,
    "image": "./assets/dishes/meal-53225.jpg"
  },
  {
    "id": 39,
    "food_name": "Chilli prawn linguine",
    "food_category": "pasta",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 459,
    "image": "./assets/dishes/meal-52839.jpg"
  },
  {
    "id": 40,
    "food_name": "Lasagne",
    "food_category": "pasta",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 556,
    "image": "./assets/dishes/meal-52844.jpg"
  },
  {
    "id": 41,
    "food_name": "Macaroni Pie",
    "food_category": "pasta",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 653,
    "image": "./assets/dishes/meal-53461.jpg"
  },
  {
    "id": 42,
    "food_name": "Macaroni Pudding",
    "food_category": "pasta",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 750,
    "image": "./assets/dishes/meal-53504.jpg"
  },
  {
    "id": 43,
    "food_name": "Pilchard puttanesca",
    "food_category": "pasta",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 847,
    "image": "./assets/dishes/meal-52837.jpg"
  },
  {
    "id": 44,
    "food_name": "Syrian Spaghetti",
    "food_category": "pasta",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 944,
    "image": "./assets/dishes/meal-53093.jpg"
  },
  {
    "id": 45,
    "food_name": "Venetian Duck Ragu",
    "food_category": "pasta",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 1041,
    "image": "./assets/dishes/meal-52838.jpg"
  },
  {
    "id": 46,
    "food_name": "Beetroot Soup (Borscht)",
    "food_category": "soups",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 1138,
    "image": "./assets/dishes/meal-53078.jpg"
  },
  {
    "id": 47,
    "food_name": "Black Bean soup",
    "food_category": "soups",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 234,
    "image": "./assets/dishes/meal-53546.jpg"
  },
  {
    "id": 48,
    "food_name": "Broccoli & Stilton soup",
    "food_category": "soups",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 331,
    "image": "./assets/dishes/meal-52842.jpg"
  },
  {
    "id": 49,
    "food_name": "Cabbage Soup (Shchi)",
    "food_category": "soups",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 428,
    "image": "./assets/dishes/meal-53077.jpg"
  },
  {
    "id": 50,
    "food_name": "Chorba Hamra bel Frik (Algerian Lamb, Tomato, and Freekeh Soup)",
    "food_category": "soups",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 525,
    "image": "./assets/dishes/meal-53289.jpg"
  },
  {
    "id": 51,
    "food_name": "Clam chowder",
    "food_category": "soups",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 622,
    "image": "./assets/dishes/meal-52840.jpg"
  },
  {
    "id": 52,
    "food_name": "Creamy Corn Soup Recipe",
    "food_category": "soups",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 719,
    "image": "./assets/dishes/meal-53532.jpg"
  },
  {
    "id": 53,
    "food_name": "Creamy Tomato Soup",
    "food_category": "soups",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 816,
    "image": "./assets/dishes/meal-52841.jpg"
  },
  {
    "id": 54,
    "food_name": "Easy White Bean Soup",
    "food_category": "soups",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 913,
    "image": "./assets/dishes/meal-53486.jpg"
  },
  {
    "id": 55,
    "food_name": "Egg Drop Soup",
    "food_category": "soups",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 1010,
    "image": "./assets/dishes/meal-52955.jpg"
  },
  {
    "id": 56,
    "food_name": "Fish Soup (Ukha)",
    "food_category": "soups",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 1107,
    "image": "./assets/dishes/meal-53079.jpg"
  },
  {
    "id": 57,
    "food_name": "Fiskesuppe (Creamy Norwegian Fish Soup)",
    "food_category": "soups",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 203,
    "image": "./assets/dishes/meal-53122.jpg"
  },
  {
    "id": 58,
    "food_name": "Cassava pizza",
    "food_category": "pizza",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 300,
    "image": "./assets/dishes/meal-53330.jpg"
  },
  {
    "id": 59,
    "food_name": "Matambre a la Pizza",
    "food_category": "pizza",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 397,
    "image": "./assets/dishes/meal-53140.jpg"
  },
  {
    "id": 60,
    "food_name": "Aussie Burgers",
    "food_category": "burger",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 494,
    "image": "./assets/dishes/meal-53099.jpg"
  },
  {
    "id": 61,
    "food_name": "kofta burgers",
    "food_category": "burger",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 591,
    "image": "./assets/dishes/meal-53257.jpg"
  },
  {
    "id": 62,
    "food_name": "Lamb Tzatziki Burgers",
    "food_category": "burger",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 688,
    "image": "./assets/dishes/meal-53010.jpg"
  },
  {
    "id": 63,
    "food_name": "Tandoori chicken",
    "food_category": "indian",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 785,
    "image": "./assets/dishes/meal-52806.jpg"
  },
  {
    "id": 64,
    "food_name": "Lamb Rogan josh",
    "food_category": "indian",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 882,
    "image": "./assets/dishes/meal-52808.jpg"
  },
  {
    "id": 65,
    "food_name": "Chicken Handi",
    "food_category": "indian",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 979,
    "image": "./assets/dishes/meal-52795.jpg"
  },
  {
    "id": 66,
    "food_name": "Baingan Bharta",
    "food_category": "indian",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 1076,
    "image": "./assets/dishes/meal-52807.jpg"
  },
  {
    "id": 67,
    "food_name": "Dal fry",
    "food_category": "indian",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 1173,
    "image": "./assets/dishes/meal-52785.jpg"
  },
  {
    "id": 68,
    "food_name": "Lamb Biryani",
    "food_category": "indian",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 269,
    "image": "./assets/dishes/meal-52805.jpg"
  },
  {
    "id": 69,
    "food_name": "Matar Paneer",
    "food_category": "indian",
    "food_type": "veg",
    "food_quantity": 1,
    "price": 366,
    "image": "./assets/dishes/meal-52865.jpg"
  },
  {
    "id": 70,
    "food_name": "Recheado Masala Fish",
    "food_category": "indian",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 463,
    "image": "./assets/dishes/meal-52809.jpg"
  },
  {
    "id": 71,
    "food_name": "Adana kebab",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 560,
    "image": "./assets/dishes/meal-53262.jpg"
  },
  {
    "id": 72,
    "food_name": "Algerian Kefta (Meatballs)",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 657,
    "image": "./assets/dishes/meal-53281.jpg"
  },
  {
    "id": 73,
    "food_name": "Amok Trey – Cambodian Fish Curry",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 754,
    "image": "./assets/dishes/meal-53495.jpg"
  },
  {
    "id": 74,
    "food_name": "Arepa Pabellón",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 851,
    "image": "./assets/dishes/meal-53334.jpg"
  },
  {
    "id": 75,
    "food_name": "Arroz con gambas y calamar",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 948,
    "image": "./assets/dishes/meal-53147.jpg"
  },
  {
    "id": 76,
    "food_name": "Asado",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 1045,
    "image": "./assets/dishes/meal-53133.jpg"
  },
  {
    "id": 77,
    "food_name": "Ayam Percik",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 1142,
    "image": "./assets/dishes/meal-53050.jpg"
  },
  {
    "id": 78,
    "food_name": "Bahia-style Moqueca prawn stew",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 238,
    "image": "./assets/dishes/meal-53481.jpg"
  },
  {
    "id": 79,
    "food_name": "Baked salmon with fennel & tomatoes",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 335,
    "image": "./assets/dishes/meal-52959.jpg"
  },
  {
    "id": 80,
    "food_name": "Beef and Broccoli Stir-Fry",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 432,
    "image": "./assets/dishes/meal-53366.jpg"
  },
  {
    "id": 81,
    "food_name": "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 529,
    "image": "./assets/dishes/meal-52997.jpg"
  },
  {
    "id": 82,
    "food_name": "Beef Bourguignon",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 626,
    "image": "./assets/dishes/meal-52904.jpg"
  },
  {
    "id": 83,
    "food_name": "Beef Brisket Pot Roast",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 723,
    "image": "./assets/dishes/meal-52812.jpg"
  },
  {
    "id": 84,
    "food_name": "Beef Caldereta",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 820,
    "image": "./assets/dishes/meal-53070.jpg"
  },
  {
    "id": 85,
    "food_name": "Beef Lo Mein",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 917,
    "image": "./assets/dishes/meal-52952.jpg"
  },
  {
    "id": 86,
    "food_name": "Beef Rendang",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 1014,
    "image": "./assets/dishes/meal-53053.jpg"
  },
  {
    "id": 87,
    "food_name": "Beef stroganoff",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 1111,
    "image": "./assets/dishes/meal-52834.jpg"
  },
  {
    "id": 88,
    "food_name": "Beef Wellington",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 207,
    "image": "./assets/dishes/meal-52803.jpg"
  },
  {
    "id": 89,
    "food_name": "Brown Stew Chicken",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 304,
    "image": "./assets/dishes/meal-52940.jpg"
  },
  {
    "id": 90,
    "food_name": "Cajun spiced fish tacos",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 401,
    "image": "./assets/dishes/meal-52819.jpg"
  },
  {
    "id": 91,
    "food_name": "Chicken & chorizo rice pot",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 498,
    "image": "./assets/dishes/meal-53161.jpg"
  },
  {
    "id": 92,
    "food_name": "Chicken & mushroom Hotpot",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 595,
    "image": "./assets/dishes/meal-52846.jpg"
  },
  {
    "id": 93,
    "food_name": "Chicken Basquaise",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 692,
    "image": "./assets/dishes/meal-52934.jpg"
  },
  {
    "id": 94,
    "food_name": "Chicken Couscous",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 789,
    "image": "./assets/dishes/meal-52850.jpg"
  },
  {
    "id": 95,
    "food_name": "Chicken Enchilada Casserole",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 886,
    "image": "./assets/dishes/meal-52765.jpg"
  },
  {
    "id": 96,
    "food_name": "Chicken Fried Rice",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 983,
    "image": "./assets/dishes/meal-53367.jpg"
  },
  {
    "id": 97,
    "food_name": "Chicken Karaage",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 1080,
    "image": "./assets/dishes/meal-52831.jpg"
  },
  {
    "id": 98,
    "food_name": "Chicken Mandi",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 1177,
    "image": "./assets/dishes/meal-53358.jpg"
  },
  {
    "id": 99,
    "food_name": "Chicken Marengo",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 273,
    "image": "./assets/dishes/meal-52920.jpg"
  },
  {
    "id": 100,
    "food_name": "Chicken Shawarma with homemade garlic herb yoghurt sauce",
    "food_category": "main_course",
    "food_type": "non_veg",
    "food_quantity": 1,
    "price": 370,
    "image": "./assets/dishes/meal-53218.jpg"
  }
].map((dish) => ({
  id: dish.id, food_name: dish.food_name, food_category: dish.food_category,
  food_type: dish.food_type, food_quantity: dish.food_quantity, price: dish.price,
  food_image: dishImages[dish.image],
}));
