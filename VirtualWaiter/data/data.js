const data = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    price: 9.99,
    description: "Juicy beef patty with melted cheddar, lettuce, and tomato.",
    rating: 4.5,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/uplifted-matrix-402620.appspot.com/o/Burgers%2FclassicCheeseburger.png?alt=media&token=6308e18c-4939-4d6a-912d-fdb1f5cc81ba&_gl=1*lex94c*_ga*MTYzNDUwMDgwMC4xNjk3ODMyOTcz*_ga_CW55HF8NVT*MTY5NzgzMjk3My4xLjEuMTY5NzgzMzcxOS43LjAuMA..",
    category: "Burgers",
  },
  {
    id: 2,
    name: "Bacon Avocado Burger",
    price: 11.49,
    description:
      "Beef patty topped with crispy bacon, creamy avocado, and mayo.",
    rating: 4.2,
    imageUrl:
      "https://toppng.com/uploads/preview/hamburger-veggie-11645691701h30x1gjd3b.png",
    category: "Burgers",
  },
  {
    id: 3,
    name: "not so classic Cheeseburger",
    price: 9.99,
    description: "Juicy beef patty with melted cheddar, lettuce, and tomato.",
    rating: 4.5,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
    category: "Burgers",
  },
  {
    id: 4,
    name: "big huge Bacon Avocado Burger",
    price: 11.49,
    description:
      "Beef patty topped with crispy bacon, creamy avocado, and mayo.",
    rating: 4.2,
    imageUrl:
      "https://media.istockphoto.com/id/1188412964/photo/hamburger-with-cheese-and-french-fries.jpg?b=1&s=612x612&w=0&k=20&c=_JT2iitrsfuPYOmYHO336VFWeximXvauz6tRG4-7OVI=",
    category: "Burgers",
  },
  {
    id: 5,
    name: " new and newerClassic Cheeseburger",
    price: 9.99,
    description: "Juicy beef patty with melted cheddar, lettuce, and tomato.",
    rating: 4.5,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
    category: "Burgers",
  },
  {
    id: 6,
    name: " tasty as hell Bacon Avocado Burger",
    price: 11.49,
    description:
      "Beef patty topped with crispy bacon, creamy avocado, and mayo.",
    rating: 4.2,
    imageUrl:
      "https://media.istockphoto.com/id/1188412964/photo/hamburger-with-cheese-and-french-fries.jpg?b=1&s=612x612&w=0&k=20&c=_JT2iitrsfuPYOmYHO336VFWeximXvauz6tRG4-7OVI=",
    category: "Burgers",
  },
  // ... Other items
  {
    id: 7,
    name: "coke Soda",
    price: 2.49,
    description: "Choose from a variety of refreshing sodas.",
    rating: 3.8,
    imageUrl:
      "https://images.pexels.com/photos/11659356/pexels-photo-11659356.jpeg?cs=srgb&dl=pexels-vladimir-shipitsin-11659356.jpg&fm=jpg",
    category: "Drinks",
  },
  {
    id: 8,
    name: "Iced Tea",
    price: 1.99,
    description: "Chilled black tea served over ice with a hint of lemon.",
    rating: 4.1,
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/delish-210419-iced-tea-02-landscape-jg-1619020612.jpg?crop=0.670xw:1.00xh;0.176xw,0&resize=1200:*",
    category: "Drinks",
  },
  {
    id: 9,
    name: "Soda Pepsi",
    price: 2.49,
    description: "Choose from a variety of refreshing sodas.",
    rating: 3.8,
    imageUrl:
      "https://images.pexels.com/photos/11659356/pexels-photo-11659356.jpeg?cs=srgb&dl=pexels-vladimir-shipitsin-11659356.jpg&fm=jpg",
    category: "Drinks",
  },
  {
    id: 10,
    name: "Iced Tea sooo goooddd",
    price: 1.99,
    description: "Chilled black tea served over ice with a hint of lemon.",
    rating: 4.1,
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/delish-210419-iced-tea-02-landscape-jg-1619020612.jpg?crop=0.670xw:1.00xh;0.176xw,0&resize=1200:*",
    category: "Drinks",
  },
  {
    id: 11,
    name: "Soda Sprite",
    price: 2.49,
    description: "Choose from a variety of refreshing sodas.",
    rating: 3.8,
    imageUrl:
      "https://images.pexels.com/photos/11659356/pexels-photo-11659356.jpeg?cs=srgb&dl=pexels-vladimir-shipitsin-11659356.jpg&fm=jpg",
    category: "Drinks",
  },
  {
    id: 12,
    name: "not so ice, Iced Tea",
    price: 1.99,
    description: "Chilled black tea served over ice with a hint of lemon.",
    rating: 4.1,
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/delish-210419-iced-tea-02-landscape-jg-1619020612.jpg?crop=0.670xw:1.00xh;0.176xw,0&resize=1200:*",
    category: "Drinks",
  },
  {
    id: 13,
    name: "Soda fanta",
    price: 2.49,
    description: "Choose from a variety of refreshing sodas.",
    rating: 3.8,
    imageUrl:
      "https://images.pexels.com/photos/11659356/pexels-photo-11659356.jpeg?cs=srgb&dl=pexels-vladimir-shipitsin-11659356.jpg&fm=jpg",
    category: "Drinks",
  },
  {
    id: 14,
    name: "hot hot Iced Tea",
    price: 1.99,
    description: "Chilled black tea served over ice with a hint of lemon.",
    rating: 4.1,
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/delish-210419-iced-tea-02-landscape-jg-1619020612.jpg?crop=0.670xw:1.00xh;0.176xw,0&resize=1200:*",
    category: "Drinks",
  },

  // ... Other drink items
];

export default data;
