const restaurantList = [
  {
    id: 1,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "Meghna Foods",
    cuisines: "Birani, North Indian",
    stars: 4.3,
    time: "30 mins",
    // Restructured menu into categories for an accordion layout
    menu: [
      {
        categoryName: "Recommended",
        items: ["Chicken Biryani", "Mutton Biryani"]
      },
      {
        categoryName: "Starters",
        items: ["Paneer Tikka Masala", "Tandoori Chicken"]
      },
      {
        categoryName: "Breads",
        items: ["Garlic Naan"]
      }
    ]
  },
  {
    id: 2,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "Green Salad Hub",
    cuisines: "Healthy Food, Salads",
    stars: 3.5,
    time: "20 mins",
    menu: [
      {
        categoryName: "Recommended",
        items: ["Caesar Salad", "Greek Salad"]
      },
      {
        categoryName: "Healthy Bowls",
        items: ["Avocado Toast", "Quinoa Protein Bowl"]
      },
      {
        categoryName: "Beverages",
        items: ["Fresh Fruit Smoothie"]
      }
    ]
  },
  {
    id: 3,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "Pizza Heaven",
    cuisines: "Pizzas, Fast Food, Italian",
    stars: 4.1,
    time: "35 mins",
    label: 'promoted',
    menu: [
      {
        categoryName: "Trending Pizzas",
        items: ["Margherita Pizza", "Farmhouse Pizza"]
      },
      {
        categoryName: "Sides",
        items: ["Garlic Breadsticks", "White Sauce Pasta"]
      },
      {
        categoryName: "Desserts",
        items: ["Choco Lava Cake"]
      }
    ]
  },
  {
    id: 4,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "The Burger Club",
    cuisines: "Burgers, American",
    stars: 3.2,
    time: "25 mins",
    menu: [
      {
        categoryName: "Premium Burgers",
        items: ["Crispy Veg Burger", "Cheese Maharaja Burger"]
      },
      {
        categoryName: "Sides & Fries",
        items: ["Peri Peri Fries", "Onion Rings"]
      },
      {
        categoryName: "Shakes",
        items: ["Vanilla Shake"]
      }
    ]
  },
  {
    id: 5,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "Sagar Ratna",
    cuisines: "South Indian, Pure Veg",
    stars: 4.4,
    time: "30 mins",
    menu: [
      {
        categoryName: "Recommended",
        items: ["Masala Dosa", "Idli Sambhar"]
      },
      {
        categoryName: "Special Dosas",
        items: ["Rava Onion Onion Dosa"]
      },
      {
        categoryName: "Sides & Drinks",
        items: ["Medu Vada", "Filter Coffee"]
      }
    ]
  },
  {
    id: 6,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "Chai Point",
    cuisines: "Bakery, Beverages, Cafe",
    stars: 2.3,
    time: "15 mins",
    menu: [
      {
        categoryName: "Hot Chai",
        items: ["Ginger Elaichi Chai"]
      },
      {
        categoryName: "Snacks",
        items: ["Samosa", "Bun Maska"]
      },
      {
        categoryName: "Cakes & Shares",
        items: ["Banana Walnut Cake", "Filter Coffee Box"]
      }
    ]
  },
  {
    id: 7,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "Chinese Wok",
    cuisines: "Chinese, Asian, Noodles",
    stars: 3.0,
    time: "28 mins",
    label: 'promoted',
    menu: [
      {
        categoryName: "Rice & Noodles",
        items: ["Hakka Noodles", "Veg Fried Rice"]
      },
      {
        categoryName: "Main Course",
        items: ["Manchurian Gravy", "Chilli Chicken"]
      },
      {
        categoryName: "Starters",
        items: ["Spring Rolls"]
      }
    ]
  },
  {
    id: 8,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "Baskin Robbins",
    cuisines: "Ice Cream, Desserts",
    stars: 3.6,
    time: "15 mins",
    menu: [
      {
        categoryName: "Classic Scoops",
        items: ["Mississippi Mud Ice Cream", "Almond Fudge Scoops"]
      },
      {
        categoryName: "Sundaes & Waffles",
        items: ["Banana Split Waffle"]
      },
      {
        categoryName: "Thick Shakes",
        items: ["Belgian Shake", "Ice Cream Cake"]
      }
    ]
  },
  {
    id: 9,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "Kebab Factory",
    cuisines: "Mughlai, North Indian",
    stars: 2.2,
    time: "40 mins",
    menu: [
      {
        categoryName: "Tandoori Tandoor",
        items: ["Galouti Kebab", "Chicken Seekh Kebab", "Paneer Tikka"]
      },
      {
        categoryName: "Mughlai Mains",
        items: ["Mutton Rogan Josh"]
      },
      {
        categoryName: "Indian Breads",
        items: ["Khamiri Roti"]
      }
    ]
  },
  {
    id: 10,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "The Waffle Co.",
    cuisines: "Waffles, Desserts, Shakes",
    stars: 4.5,
    time: "22 mins",
    label: 'promoted',
    menu: [
      {
        categoryName: "Best Sellers",
        items: ["Triple Chocolate Waffle", "KitKat Waffle Stick"]
      },
      {
        categoryName: "Pancakes",
        items: ["Nutella Pancake"]
      },
      {
        categoryName: "Cold Shakes",
        items: ["Cold Coffee", "Strawberry Waffle"]
      }
    ]
  },
  {
    id: 11,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "La Pino'z Pizza",
    cuisines: "Pizzas, Italian, Pastas",
    stars: 3.9,
    time: "30 mins",
    menu: [
      {
        categoryName: "Veg Pizzas",
        items: ["Spring Feel Pizza", "Cheesy 7 Pizza"]
      },
      {
        categoryName: "Pastas & Appetisers",
        items: ["Mac & Cheese Pasta", "Stuffed Garlic Bread"]
      },
      {
        categoryName: "Sides",
        items: ["Taco Veg"]
      }
    ]
  },
  {
    id: 12,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "Barbeque Nation",
    cuisines: "North Indian, Barbeque",
    stars: 4.4,
    time: "45 mins",
    label: 'promoted',
    menu: [
      {
        categoryName: "Veg Starters",
        items: ["Crispy Corn", "Cajun Spiced Potatoes"]
      },
      {
        categoryName: "Non-Veg Starters",
        items: ["Grilled Prawns", "Mutton Seekh Kebab"]
      },
      {
        categoryName: "Desserts",
        items: ["Angoori Gulab Jamun"]
      }
    ]
  },
  {
    id: 13,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "Subway",
    cuisines: "Healthy Food, Salads, Wraps",
    stars: 4.1,
    time: "20 mins",
    menu: [
      {
        categoryName: "Popular Subs",
        items: ["Paneer Tikka Sub", "Chicken Teriyaki Sub"]
      },
      {
        categoryName: "Wraps & Cookies",
        items: ["Aloo Patty Wrap", "Chunky Choco Chip Cookie"]
      },
      {
        categoryName: "Drinks",
        items: ["Coke Zero"]
      }
    ]
  },
  {
    id: 14,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "Haldiram's",
    cuisines: "Mithai, Street Food",
    stars: 3.3,
    time: "25 mins",
    label: 'promoted',
    menu: [
      {
        categoryName: "Chaats & Starters",
        items: ["Raj Kachori", "Pav Bhaji"]
      },
      {
        categoryName: "Main Meals",
        items: ["Chole Bhature"]
      },
      {
        categoryName: "Sweets Box",
        items: ["Kaju Katli Box", "Gulab Jamun Plate"]
      }
    ]
  },
  {
    id: 15,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "Burger King",
    cuisines: "Burgers, Fast Food",
    stars: 4.2,
    time: "20 mins",
    menu: [
      {
        categoryName: "Flame Grilled Burgers",
        items: ["Whopper Veg", "Chicken Whopper"]
      },
      {
        categoryName: "Sides",
        items: ["Fiery Onion Rings", "Thick Fries"]
      },
      {
        categoryName: "Desserts & Shakes",
        items: ["Chocolate Shake"]
      }
    ]
  },
  {
    id: 16,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "Rolls King",
    cuisines: "Fast Food, Rolls, Wraps",
    stars: 4.0,
    time: "18 mins",
    menu: [
      {
        categoryName: "Best Sellers",
        items: ["Veg Single Roll", "Egg Chicken Roll"]
      },
      {
        categoryName: "Classic Wraps",
        items: ["Paneer Tikka Wrap", "Mutton Seekh Roll"]
      }
    ]
  },
  {
    id: 17,
    imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
    name: "Biryani Blues",
    cuisines: "Biryani, Hyderabadi",
    stars: 4.2,
    time: "32 mins",
    menu: [
      {
        categoryName: "Hyderabadi Dum Biryani",
        items: ["Hyderabadi Chicken Biryani", "Veg Dum Biryani"]
      },
      {
        categoryName: "Starters & Curries",
        items: ["Chicken 65", "Salani Mirchi Ka Salan"]
      },
      {
        categoryName: "Desserts",
        items: ["Double Ka Meetha"]
      }
    ]
    },
    {
      id: 18,
      imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
      name: "Mad Over Donuts",
      cuisines: "Desserts, Bakery",
      stars: 4.4,
      time: "15 mins",
      menu: [
        {
          categoryName: "Donut Boxes",
          items: ["Bites Box Mix"]
        },
        {
          categoryName: "Individual Donuts",
          items: ["Double Trouble Donut", "Choco Bomb", "Cookie Overload"]
        },
        {
          categoryName: "Coffee & Drinks",
          items: ["Hazelnut Latte"]
        }
      ]
    },
    {
      id: 19,
      imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
      name: "MoonMoon - Juicy Crustwiches",
      cuisines: "Sandwiches, Fast Food",
      stars: 4.5,
      time: "25 mins",
      menu: [
        {
          categoryName: "Crustwiches",
          items: ["Cheesy Crustwich", "Spicy Paneer Sandwich"]
        },
        {
          categoryName: "Subs & Sides",
          items: ["BBQ Chicken Sub", "French Fries"]
        },
        {
          categoryName: "Beverages",
          items: ["Ice Tea"]
        }
      ]
    },
    {
      id: 20,
      imgSrc: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/v1664838034/xrduhrvahkafeyik83im.jpg",
      name: "The Punjabi Dhaba",
      cuisines: "North Indian, Thalis",
      stars: 4.1,
      time: "35 mins",
      menu: [
        {
          categoryName: "Dhaba Thalis",
          items: ["Special Punjabi Thali"]
        },
        {
          categoryName: "Mains Curries",
          items: ["Dal Makhani", "Shahi Paneer"]
        },
        {
          categoryName: "Sides & Refreshments",
          items: ["Butter Roti", "Sweet Lassi"]
        }
      ]
    }
  ];
  
  export default restaurantList;
