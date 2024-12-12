export const navItems = [
  {
    id: 0,
    navTitle: "Home",
    href: "/",
  },
  {
    id: 1,
    navTitle: "Shop",
    href: "/shop",
  },
  {
    id: 2,
    navTitle: "Contact Us",
    href: "/contact-us",
  },
];

export const filters = [
  {
    category: "Category",
    options: ["audio", "gaming", "mobile", "tv"], // Available categories
  },
  {
    category: "Brand",
    options: [
      "sony",
      "apple",
      "samsung",
      "xiaomi",
      "jbl",
      "logitech G",
      "mi",
      "boat",
      "lg",
      "redmi",
      "acer",
      "ant esports",
      "bang & olufsen",
    ], // Available brands
  },
  {
    category: "Price Range",
    options: [
      { label: "Under $50", min: 0, max: 50 },
      { label: "$50 - $200", min: 50, max: 200 },
      { label: "$200 - $500", min: 200, max: 500 },
      { label: "$500 - $1000", min: 500, max: 1000 },
      { label: "Above $1000", min: 1000, max: Infinity },
    ],
  },
  {
    category: "Discounts",
    options: ["Discount Available"], // Products with discounts
  },
  {
    category: "Color",
    options: [
      "black",
      "white",
      "blue",
      "red",
      "gold",
      "silver",
      "green",
      "pink",
      "taupe",
      "lavender",
      "steel blue",
    ], // Available colors
  },
  {
    category: "Popularity",
    options: ["Popular"], // Products marked as popular
  },
  {
    category: "On Sale",
    options: ["On Sale"], // Products marked as on sale
  },
  {
    category: "Model",
    options: [
      "Galaxy",
      "AirPods",
      "WH-1000XM",
      "Xbox",
      "WH-CH520",
      "Redmi Note",
      "Poco",
      "MacBook",
    ], // Common keywords related to model names
  },
  {
    category: "Features",
    options: [
      "Noise Cancellation",
      "Wireless",
      "Bluetooth",
      "Waterproof",
      "Surround Sound",
    ], // Features mentioned in descriptions
  },
  {
    category: "Sort by Price",
    options: ["Low to High", "High to Low"],
  },
  {
    category: "Available Images",
    options: ["With Images"],
  },
];
