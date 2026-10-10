// Eden's Intimate Events menu and pricing guide. Prices are in rand, per platter.
export type MenuItem = { name: string; detail?: string; price: string; serves?: string };
export type MenuSection = { title: string; portion: string; items: MenuItem[] };

export const menuSections: MenuSection[] = [
  {
    title: "Cold Platters",
    portion: "",
    items: [
      { name: "Muesli Cups", detail: "muesli, yoghurt, fruit", price: "R150", serves: "serves 6" },
      { name: "Fruit Salad", price: "R120", serves: "serves 6" },
      { name: "Dip Platter", detail: "carrots, cucumber, crackers, cherry tomatoes, celery", price: "R180", serves: "serves 10" },
      { name: "Cheese Platter", detail: "4 cheeses, 3 meats, veggie sticks, 2 crackers, olives", price: "R250", serves: "serves 10" },
    ],
  },
  {
    title: "Hot Breakfast Platters",
    portion: "Each serves 10",
    items: [
      { name: "Bacon / Turkey Bacon", price: "R120" },
      { name: "Sausages", detail: "beef, pork or chicken", price: "R150" },
      { name: "Devilled Eggs", price: "R120" },
      { name: "Quiche", price: "R180" },
    ],
  },
  {
    title: "Sweet Platters",
    portion: "Each serves 10",
    items: [
      { name: "Pancakes", price: "R150" },
      { name: "Muffins", price: "R120" },
      { name: "Cookies", price: "R100" },
      { name: "Koeksisters", price: "R130" },
      { name: "Doughnuts", price: "R140" },
      { name: "Cupcakes", price: "R150" },
      { name: "Scones", price: "R120" },
    ],
  },
  {
    title: "Meat Platters",
    portion: "Each serves 10",
    items: [
      { name: "Chicken Pieces", detail: "drums, thighs, wings", price: "R220" },
      { name: "Sausages", detail: "chicken, pork, beef", price: "R180" },
      { name: "Meatballs", price: "R160" },
      { name: "Chicken Nuggets / Pops", price: "R150" },
      { name: "Fatcakes and Mince", price: "R150" },
    ],
  },
  {
    title: "Mini Eatables",
    portion: "25 pieces each",
    items: [
      { name: "Samoosas", price: "R120" },
      { name: "Sausage Pies", price: "R140" },
      { name: "Spring Rolls", price: "R130" },
    ],
  },
  {
    title: "Sandwiches",
    portion: "10 pieces each",
    items: [
      { name: "Chicken Mayo", price: "R150" },
      { name: "Cheese and Tomato", price: "R120" },
      { name: "Egg Mayo", price: "R120" },
      { name: "Tuna", price: "R140" },
      { name: "Stuffed Croissants", detail: "cheese, cold meats, tuna, egg mayo", price: "R180" },
      { name: "Mini Wraps", detail: "chicken, cold meats, veggies, beef", price: "R160" },
      { name: "Bruschetta", detail: "tomato, onion salsa, cold meats", price: "R160" },
      { name: "Mini Burgers", price: "R180" },
      { name: "Mini Hotdogs", price: "R150" },
    ],
  },
];

export const packages = [
  {
    name: "The Sweet Moment",
    price: "R650",
    serves: "Serves 10",
    includes: ["2 × Sweet Platters (e.g. cupcakes & scones)", "1 × Fruit Salad", "1 × Sandwich Platter"],
  },
  {
    name: "The Classic Gathering",
    price: "R850",
    serves: "Serves 10",
    includes: ["1 × Meat Platter", "1 × Sandwich Platter", "1 × Cold Platter"],
  },
  {
    name: "The Celebration",
    price: "R950",
    serves: "Serves 10",
    includes: ["1 × Meat Platter", "1 × Hot Breakfast Platter", "1 × Sweet Platter"],
  },
  {
    name: "The Luxe Experience",
    price: "R1,250",
    serves: "Serves 15",
    includes: ["1 × Meat Platter", "1 × Sandwich Platter", "1 × Cold Platter", "1 × Sweet Platter"],
  },
];

export const occasions = [
  "Bridal Showers",
  "Baby Showers",
  "Milestones",
  "Family Gatherings",
  "Engagements",
  "Community Events",
];
