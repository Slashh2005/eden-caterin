// Eden's Intimate Events menu and pricing guide. Prices are in rand, per platter.
export type MenuItem = { name: string; detail?: string; price: string; serves?: string };
export type MenuSection = { title: string; portion: string; items: MenuItem[] };

export const menuSections: MenuSection[] = [
  {
    title: "Cold Platters",
    portion: "",
    items: [
      { name: "Muesli Cups", detail: "muesli, yoghurt, fruit", price: "R180", serves: "serves 6" },
      { name: "Fruit Salad", price: "R160", serves: "serves 6" },
      { name: "Dip Platter", detail: "carrots, cucumber, crackers, cherry tomatoes, celery", price: "R210", serves: "serves 10" },
      { name: "Cheese Platter", detail: "4 cheeses, 3 meats, veggie sticks, 2 crackers, olives", price: "R320", serves: "serves 10" },
    ],
  },
  {
    title: "Hot Breakfast Platters",
    portion: "Each serves 10",
    items: [
      { name: "Bacon", price: "R230" },
      { name: "Sausages", detail: "beef, pork or chicken", price: "R200" },
      { name: "Devilled Eggs", price: "R180" },
      { name: "Quiche", price: "R200" },
      { name: "Pancakes", price: "R180" },
    ],
  },
  {
    title: "Meat Platters",
    portion: "Each serves 10",
    items: [
      { name: "Chicken Pieces", detail: "drums, thighs, wings", price: "R240" },
      { name: "Wors", detail: "chicken, pork, beef", price: "R210" },
      { name: "Meatballs", price: "R210" },
      { name: "Chicken Nuggets", price: "R190" },
      { name: "Fatcakes and Mince", price: "R170" },
    ],
  },
  {
    title: "Mini Eatables",
    portion: "25 pieces each",
    items: [
      { name: "Samoosas", price: "R190" },
      { name: "Sausage Pies", price: "R200" },
      { name: "Spring Rolls", price: "R200" },
    ],
  },
  {
    title: "Sandwiches",
    portion: "10 pieces each",
    items: [
      { name: "Chicken Mayo", price: "R200" },
      { name: "Cheese and Tomato", price: "R170" },
      { name: "Egg Mayo", price: "R170" },
      { name: "Tuna", price: "R200" },
      { name: "Stuffed Croissants", detail: "cheese, cold meats, tuna, egg mayo", price: "from R220" },
      { name: "Wraps", detail: "chicken, cold meats, veggies, beef", price: "from R220" },
      { name: "Bruschetta", detail: "tomato, onion salsa, cold meats", price: "from R200" },
      { name: "Burgers", price: "R220" },
      { name: "Hotdogs", price: "R200" },
    ],
  },
];

export const packages = [
  {
    name: "Eden Essential",
    price: "R1,700",
    platters: "4 platters",
    serves: "Serves approx. 8–12",
    description: "A balanced selection of 4 platters.",
  },
  {
    name: "Eden Signature",
    price: "R2,400",
    platters: "6 platters",
    serves: "Serves approx. 15–20",
    description: "A fuller spread with 6 premium platters.",
  },
  {
    name: "Eden Executive",
    price: "R3,000",
    platters: "8 platters",
    serves: "Serves approx. 20–30",
    description:
      "A generous premium spread of 8 platters, designed for milestone celebrations. Choose 2 options from each platter category.",
  },
];

// Sweet platters are supplied by Eden's partner brand, Sophisti-Cake.
export const sweetPartner = {
  name: "Sophisti-Cake",
  instagramHandle: "@max_sophisticake",
  instagramHref: "https://www.instagram.com/max_sophisticake/",
  phoneDisplay: "084 379 6764",
  phoneHref: "tel:+27843796764",
};

export const occasions = [
  "Bridal Showers",
  "Baby Showers",
  "Milestones",
  "Family Gatherings",
  "Engagements",
  "Community Events",
  "Private Functions",
];
