const data = [
    {
      name: 'Classic Cheeseburger',
      price: 9.99,
      description: 'Juicy beef patty with melted cheddar, lettuce, and tomato.',
      rating: 4.5,
      imageUrl: 'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png?s=jdN-wM-e-Qc1ELab988RQ1uEJQw6qRiVkWhEBhs2MMI',
      category: 'Burgers'
    },
    {
      name: 'Bacon Avocado Burger',
      price: 11.49,
      description: 'Beef patty topped with crispy bacon, creamy avocado, and mayo.',
      rating: 4.2,
      imageUrl: 'https://toppng.com/uploads/preview/hamburger-veggie-11645691701h30x1gjd3b.png',
      category: 'Burgers'
    },
    {
      name: 'Classic Cheeseburger',
      price: 9.99,
      description: 'Juicy beef patty with melted cheddar, lettuce, and tomato.',
      rating: 4.5,
      imageUrl: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg',
      category: 'Burgers'
    },
    {
      name: 'Bacon Avocado Burger',
      price: 11.49,
      description: 'Beef patty topped with crispy bacon, creamy avocado, and mayo.',
      rating: 4.2,
      imageUrl: 'https://media.istockphoto.com/id/1188412964/photo/hamburger-with-cheese-and-french-fries.jpg?b=1&s=612x612&w=0&k=20&c=_JT2iitrsfuPYOmYHO336VFWeximXvauz6tRG4-7OVI=',
      category: 'Burgers'
    },
    {
      name: 'Classic Cheeseburger',
      price: 9.99,
      description: 'Juicy beef patty with melted cheddar, lettuce, and tomato.',
      rating: 4.5,
      imageUrl: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg',
      category: 'Burgers'
    },
    {
      name: 'Bacon Avocado Burger',
      price: 11.49,
      description: 'Beef patty topped with crispy bacon, creamy avocado, and mayo.',
      rating: 4.2,
      imageUrl: 'https://media.istockphoto.com/id/1188412964/photo/hamburger-with-cheese-and-french-fries.jpg?b=1&s=612x612&w=0&k=20&c=_JT2iitrsfuPYOmYHO336VFWeximXvauz6tRG4-7OVI=',
      category: 'Burgers'
    },
    // ... Other items
    {
      name: 'Soda (Coke, Pepsi, Sprite)',
      price: 2.49,
      description: 'Choose from a variety of refreshing sodas.',
      rating: 3.8,
      imageUrl: 'https://images.pexels.com/photos/11659356/pexels-photo-11659356.jpeg?cs=srgb&dl=pexels-vladimir-shipitsin-11659356.jpg&fm=jpg',
      category: 'Drinks'
    },
    {
      name: 'Iced Tea',
      price: 1.99,
      description: 'Chilled black tea served over ice with a hint of lemon.',
      rating: 4.1,
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/delish-210419-iced-tea-02-landscape-jg-1619020612.jpg?crop=0.670xw:1.00xh;0.176xw,0&resize=1200:*',
      category: 'Drinks'
    },
    {
      name: 'Soda (Coke, Pepsi, Sprite)',
      price: 2.49,
      description: 'Choose from a variety of refreshing sodas.',
      rating: 3.8,
      imageUrl: 'https://images.pexels.com/photos/11659356/pexels-photo-11659356.jpeg?cs=srgb&dl=pexels-vladimir-shipitsin-11659356.jpg&fm=jpg',
      category: 'Drinks'
    },
    {
      name: 'Iced Tea',
      price: 1.99,
      description: 'Chilled black tea served over ice with a hint of lemon.',
      rating: 4.1,
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/delish-210419-iced-tea-02-landscape-jg-1619020612.jpg?crop=0.670xw:1.00xh;0.176xw,0&resize=1200:*',
      category: 'Drinks'
    },
    {
      name: 'Soda (Coke, Pepsi, Sprite)',
      price: 2.49,
      description: 'Choose from a variety of refreshing sodas.',
      rating: 3.8,
      imageUrl: 'https://images.pexels.com/photos/11659356/pexels-photo-11659356.jpeg?cs=srgb&dl=pexels-vladimir-shipitsin-11659356.jpg&fm=jpg',
      category: 'Drinks'
    },
    {
      name: 'Iced Tea',
      price: 1.99,
      description: 'Chilled black tea served over ice with a hint of lemon.',
      rating: 4.1,
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/delish-210419-iced-tea-02-landscape-jg-1619020612.jpg?crop=0.670xw:1.00xh;0.176xw,0&resize=1200:*',
      category: 'Drinks'
    },
    {
      name: 'Soda (Coke, Pepsi, Sprite)',
      price: 2.49,
      description: 'Choose from a variety of refreshing sodas.',
      rating: 3.8,
      imageUrl: 'https://images.pexels.com/photos/11659356/pexels-photo-11659356.jpeg?cs=srgb&dl=pexels-vladimir-shipitsin-11659356.jpg&fm=jpg',
      category: 'Drinks'
    },
    {
      name: 'Iced Tea',
      price: 1.99,
      description: 'Chilled black tea served over ice with a hint of lemon.',
      rating: 4.1,
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/delish-210419-iced-tea-02-landscape-jg-1619020612.jpg?crop=0.670xw:1.00xh;0.176xw,0&resize=1200:*',
      category: 'Drinks'
    },
    
    // ... Other drink items
  ];

  export default data;

  

  