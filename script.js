// Menu data from Inaara Restaurant with premium presentation
const menuData = {
  "chefs_special": [
    {
      "name": "Dal Bati Churma",
      "description": "Traditional Rajasthani dish of dal, bati and sweet churma.",
      "price": "₹399",
      "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
      "origin": "Rajasthani",
      "dietary": ["veg"],
      "category": "chefs_special"
    },
    {
      "name": "Paneer Lababdar",
      "description": "Rich and creamy paneer curry with aromatic spices.",
      "price": "₹349",
      "image": "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80",
      "origin": "North Indian",
      "dietary": ["veg"],
      "category": "chefs_special"
    },
    {
      "name": "Rajma Chawal Combo",
      "description": "Delicious rajma curry served with steamed rice.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&q=80",
      "origin": "North Indian",
      "dietary": ["veg"],
      "category": "chefs_special"
    },
    {
      "name": "Butter Chicken",
      "description": "Classic butter chicken in creamy tomato gravy.",
      "price": "₹449",
      "image": "https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&q=80",
      "origin": "North Indian",
      "dietary": ["non-veg"],
      "category": "chefs_special"
    },
    {
      "name": "Laal Maas",
      "description": "Spicy Rajasthani lamb curry rich in flavors.",
      "price": "₹499",
      "image": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80",
      "origin": "Rajasthani",
      "dietary": ["non-veg"],
      "category": "chefs_special"
    }
  ],
  "beverages": [
    {
      "name": "Fresh Lime Soda",
      "description": "Refreshing fizzy soda with a splash of fresh lime.",
      "price": "₹79",
      "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80",
      "origin": "House Special",
      "dietary": ["veg","vegan"],
      "category": "beverages"
    },
    {
      "name": "Fresh lime water",
      "description": "Cool and hydrating water infused with fresh lime.",
      "price": "₹49",
      "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80",
      "origin": "House Special",
      "dietary": ["veg","vegan"],
      "category": "beverages"
    },
    {
      "name": "Soda (750ml)",
      "description": "Classic soda served chilled for a fizzy refreshment.",
      "price": "₹39",
      "image": "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&q=80",
      "origin": "House Special",
      "dietary": ["veg","vegan"],
      "category": "beverages"
    },
    {
      "name": "Mojito Mint",
      "description": "Zesty mint mojito with a tang of lime and soda.",
      "price": "₹149",
      "image": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80",
      "origin": "Signature Drink",
      "dietary": ["veg","vegan"],
      "category": "beverages"
    },
    {
      "name": "Canned juice large",
      "description": "Delicious canned juice in your favorite flavor.",
      "price": "₹199",
      "image": "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&q=80",
      "origin": "Imported",
      "dietary": ["veg","vegan"],
      "category": "beverages"
    },
    {
      "name": "Blue lagoon",
      "description": "Vibrant blue drink with a citrusy punch.",
      "price": "₹149",
      "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80",
      "origin": "House Special",
      "dietary": ["veg","vegan"],
      "category": "beverages"
    },
    {
      "name": "Tea",
      "description": "Aromatic hot tea brewed to perfection.",
      "price": "₹49",
      "image": "https://images.unsplash.com/photo-1597318181409-cf64e0b94c83?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg","vegan"],
      "category": "beverages"
    },
    {
      "name": "Coffee",
      "description": "Strong and energizing coffee for a perfect start.",
      "price": "₹49",
      "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
      "origin": "House Blend",
      "dietary": ["veg","vegan"],
      "category": "beverages"
    },
    {
      "name": "Milk (hot & cold)",
      "description": "Fresh milk served hot or cold as per your preference.",
      "price": "₹79",
      "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
      "origin": "Farm Fresh",
      "dietary": ["veg"],
      "category": "beverages"
    },
    {
      "name": "Cold coffee plain",
      "description": "Chilled coffee with a rich and creamy texture.",
      "price": "₹129",
      "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
      "origin": "House Blend",
      "dietary": ["veg"],
      "category": "beverages"
    },
    {
      "name": "Cold coffee (With icecream)",
      "description": "Icy cold coffee blended with creamy ice cream.",
      "price": "₹199",
      "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
      "origin": "House Blend",
      "dietary": ["veg"],
      "category": "beverages"
    },
    {
      "name": "Milkshake",
      "description": "Thick and creamy milkshake in classic flavors.",
      "price": "₹119",
      "image": "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=400&q=80",
      "origin": "House Special",
      "dietary": ["veg"],
      "category": "beverages"
    },
    {
      "name": "Mineral water",
      "description": "Pure and refreshing mineral water bottle.",
      "price": "₹29",
      "image": "https://images.unsplash.com/photo-1520638023360-6def43369781?w=400&q=80",
      "origin": "Packaged",
      "dietary": ["veg","vegan"],
      "category": "beverages"
    }
  ],
  
  "breakfast": [
    {
      "name": "Poha / Upma",
      "description": "Light and healthy Indian breakfast made from flattened rice or semolina.",
      "price": "₹175",
      "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Idli Sambhar (4pc.)",
      "description": "Soft steamed idlis served with spicy sambhar and chutney.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80",
      "origin": "South Indian",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Veg Sandwich Plain",
      "description": "Simple and tasty vegetable sandwich with fresh ingredients.",
      "price": "₹275",
      "image": "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&q=80",
      "origin": "Continental",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Cheese Sandwich",
      "description": "Classic cheese sandwich grilled to perfection.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&q=80",
      "origin": "Continental",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Club Sandwich",
      "description": "Multi-layered sandwich filled with veggies and sauces.",
      "price": "₹119",
      "image": "https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=400&q=80",
      "origin": "Continental",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Veg Grilled Sandwich",
      "description": "Grilled sandwich packed with fresh vegetables and spices.",
      "price": "₹99",
      "image": "https://images.unsplash.com/photo-1550317138-10000687ac61?w=400&q=80",
      "origin": "Continental",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Cheese Grilled Sandwich",
      "description": "Melted cheese inside perfectly grilled bread slices.",
      "price": "₹99",
      "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&q=80",
      "origin": "Continental",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Corn Flakes Milk (Hot & Cold)",
      "description": "Healthy cornflakes served with hot or cold milk.",
      "price": "₹149",
      "image": "https://images.unsplash.com/photo-1581798459219-318e76aecc40?w=400&q=80",
      "origin": "Healthy Choice",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Puri Bhaji (4pc.)",
      "description": "Fried puris served with spicy potato curry.",
      "price": "₹199",
      "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
      "origin": "North Indian",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Aloo Paratha with Curd (2pc.)",
      "description": "Stuffed potato parathas served with curd.",
      "price": "₹199",
      "image": "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=400&q=80",
      "origin": "North Indian",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Aloo Bada (3pc.)",
      "description": "Crispy potato fritters served hot.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1601050690532-da0c6f074e36?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Chole Bhature (2pc.)",
      "description": "Fluffy bhature served with spicy chole.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&q=80",
      "origin": "North Indian",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Toast with Butter & Jam",
      "description": "Crisp toast served with butter and jam.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&q=80",
      "origin": "Continental",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Bread Butter",
      "description": "Fresh bread slices served with butter.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",
      "origin": "Continental",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Pav Bhaji (4pc.)",
      "description": "Pav served with spicy mashed vegetable curry.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
      "origin": "Indian Street Food",
      "dietary": ["veg"],
      "category": "breakfast"
    }
  ],

  "eggs": [
    {
      "name": "Boiled Egg Bhurji",
      "description": "Protein-rich boiled eggs scrambled with spices.",
      "price": "₹129",
      "image": "https://images.unsplash.com/photo-1582169296194-866fb86a2e65?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Egg Pakora",
      "description": "Crispy golden egg fritters served hot.",
      "price": "₹149",
      "image": "https://images.unsplash.com/photo-1606787842771-1ddd9daaef0d?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Boiled Egg (3pc.)",
      "description": "Perfectly boiled eggs served plain.",
      "price": "₹175",
      "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Boiled Egg Fry (3pc.)",
      "description": "Pan-fried boiled eggs with spices.",
      "price": "₹199",
      "image": "https://images.unsplash.com/photo-1606049341095-bcfafe6e30f4?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Masala Omlette",
      "description": "Fluffy omelette loaded with Indian spices.",
      "price": "₹129",
      "image": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Egg Bhurji",
      "description": "Classic scrambled eggs with masala twist.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1582169296194-866fb86a2e65?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Cheese Omlette",
      "description": "Omelette stuffed with rich melted cheese.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Poached Egg",
      "description": "Soft and perfectly poached eggs.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&q=80",
      "origin": "Continental",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Egg Chilly",
      "description": "Spicy Indo-Chinese style egg preparation.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1606787766498-97cdd4aba80b?w=400&q=80",
      "origin": "Fusion",
      "dietary": ["non-veg"],
      "category": "eggs"
    }
  ],

  "salad_papad": [
    {
      "name": "Masala Papad Fry/Roasted",
      "description": "Crispy papad topped with tangy masala mix.",
      "price": "₹119",
      "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Makki Papadi",
      "description": "Crisp maize papadi served with spices.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Green Salad",
      "description": "Fresh green vegetables served as a healthy salad.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
      "origin": "Healthy Choice",
      "dietary": ["veg","vegan"],
      "category": "salad_papad"
    },
    {
      "name": "Russian Salad",
      "description": "Creamy salad made with veggies and mayo dressing.",
      "price": "₹99",
      "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80",
      "origin": "Russian",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Makhana Salad",
      "description": "Light and crunchy lotus seed salad with spices.",
      "price": "₹49",
      "image": "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Fried Papad",
      "description": "Crispy fried papad served hot.",
      "price": "₹49",
      "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Roasted Papad",
      "description": "Healthy roasted papad served as an appetizer.",
      "price": "₹79",
      "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Kachumber Salad",
      "description": "Finely chopped onions, tomatoes and cucumbers.",
      "price": "₹59",
      "image": "https://images.unsplash.com/photo-1543339318-c4703d6dc4b0?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg","vegan"],
      "category": "salad_papad"
    },
    {
      "name": "Onion Salad",
      "description": "Sliced onions served with tangy spices.",
      "price": "₹49",
      "image": "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg","vegan"],
      "category": "salad_papad"
    },
    {
      "name": "Kaju Makhana Salad",
      "description": "Premium salad made with cashews and lotus seeds.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1595475207225-428b7973e3d1?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Sprout Salad",
      "description": "Nutritious sprouted beans salad.",
      "price": "₹199",
      "image": "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=400&q=80",
      "origin": "Healthy Choice",
      "dietary": ["veg","vegan"],
      "category": "salad_papad"
    }
  ],

  "soups": [
    {
      "name": "Sweet Corn Chicken Soup",
      "description": "Delicious chicken soup with sweet corn flavor.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
      "origin": "Indo-Chinese",
      "dietary": ["non-veg"],
      "category": "soups"
    },
    {
      "name": "Hot & Sour Chicken Soup",
      "description": "Spicy and tangy chicken soup full of flavors.",
      "price": "₹199",
      "image": "https://images.unsplash.com/photo-1581385250900-9c9300e3bdff?w=400&q=80",
      "origin": "Chinese",
      "dietary": ["non-veg"],
      "category": "soups"
    },
    {
      "name": "Chicken Manchow Soup",
      "description": "Spicy chicken soup garnished with crispy noodles.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80",
      "origin": "Chinese",
      "dietary": ["non-veg"],
      "category": "soups"
    },
    {
      "name": "Cream of Chicken Soup",
      "description": "Rich and creamy chicken soup.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1612059133205-fe583c8aa95e?w=400&q=80",
      "origin": "Continental",
      "dietary": ["non-veg"],
      "category": "soups"
    },
    {
      "name": "Cream of Tomato Soup",
      "description": "Classic creamy tomato soup with herbs.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1576867757603-05b134dbc71a?w=400&q=80",
      "origin": "Continental",
      "dietary": ["veg"],
      "category": "soups"
    },
    {
      "name": "Lemon Coriander Soup",
      "description": "Light and refreshing soup with lemon and coriander.",
      "price": "₹199",
      "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
      "origin": "Healthy",
      "dietary": ["veg"],
      "category": "soups"
    },
    {
      "name": "Cream of Veg Soup",
      "description": "Smooth and creamy vegetable soup.",
      "price": "₹199",
      "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80",
      "origin": "Continental",
      "dietary": ["veg"],
      "category": "soups"
    },
    {
      "name": "Palak Shorba",
      "description": "Spinach-based Indian soup rich in nutrients.",
      "price": "₹275",
      "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "soups"
    },
    {
      "name": "Veg Manchow Soup",
      "description": "Spicy vegetable soup topped with crispy noodles.",
      "price": "₹275",
      "image": "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80",
      "origin": "Chinese",
      "dietary": ["veg"],
      "category": "soups"
    },
    {
      "name": "Sweet Corn Veg Soup",
      "description": "Classic sweet corn soup with vegetables.",
      "price": "₹275",
      "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
      "origin": "Chinese",
      "dietary": ["veg"],
      "category": "soups"
    },
    {
      "name": "Dal Shorba",
      "description": "Traditional Indian lentil-based soup.",
      "price": "₹275",
      "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "soups"
    },
    {
      "name": "Hot & Sour Veg Soup",
      "description": "Vegetarian version of hot and sour soup.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1581385250900-9c9300e3bdff?w=400&q=80",
      "origin": "Chinese",
      "dietary": ["veg"],
      "category": "soups"
    }
  ],

  "indian_starters": [
    {
      "name": "Paneer Tikka",
      "description": "Cubes of paneer marinated in spices and grilled to perfection.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
      "origin": "North Indian",
      "dietary": ["veg"],
      "category": "indian_starters"
    },
    {
      "name": "Hara Bhara Kabab",
      "description": "Healthy kababs made with spinach and green peas.",
      "price": "₹275",
      "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "indian_starters"
    },
    {
      "name": "Veg Seekh Kabab",
      "description": "Spiced vegetable mixture grilled on skewers.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "indian_starters"
    },
    {
      "name": "Paneer Malai Tikka",
      "description": "Creamy paneer cubes marinated in rich malai mix.",
      "price": "₹349",
     "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
     "origin": "North Indian",
     "dietary": ["veg"],
     "category": "indian_starters"
   },
   {
     "name": "Soya Chaap",
     "description": "Tender soya chaap marinated and grilled with spices.",
     "price": "₹249",
     "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
     "origin": "Indian",
     "dietary": ["veg"],
     "category": "indian_starters"
   },
   {
     "name": "Paneer Achari Tikka",
     "description": "Paneer cubes spiced with tangy achari masala.",
     "price": "₹299",
     "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
     "origin": "North Indian",
     "dietary": ["veg"],
     "category": "indian_starters"
   },
   {
     "name": "Veg Crispy",
     "description": "Crispy fried vegetables tossed in spices.",
     "price": "₹199",
     "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80",
     "origin": "Indo-Chinese",
     "dietary": ["veg"],
     "category": "indian_starters"
   },
   {
     "name": "Paneer Chilly",
     "description": "Spicy Indo-Chinese style paneer in tangy sauce.",
     "price": "₹249",
     "image": "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80",
     "origin": "Indo-Chinese",
     "dietary": ["veg"],
     "category": "indian_starters"
   }
 ],

 "indian_main_course": [
   {
     "name": "Paneer Butter Masala",
     "description": "Cottage cheese cubes in a rich buttery tomato gravy.",
     "price": "₹349",
     "image": "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80",
     "origin": "North Indian",
     "dietary": ["veg"],
     "category": "indian_main_course"
   },
   {
     "name": "Shahi Paneer",
     "description": "Paneer cooked in a creamy, royal cashew-based gravy.",
     "price": "₹379",
     "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
     "origin": "North Indian",
     "dietary": ["veg"],
     "category": "indian_main_course"
   },
   {
     "name": "Kadai Paneer",
     "description": "Paneer cubes cooked with bell peppers and spices.",
     "price": "₹329",
     "image": "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80",
     "origin": "North Indian",
     "dietary": ["veg"],
     "category": "indian_main_course"
   },
   {
     "name": "Mix Veg Curry",
     "description": "Seasonal vegetables cooked in flavorful gravy.",
     "price": "₹299",
     "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
     "origin": "North Indian",
     "dietary": ["veg"],
     "category": "indian_main_course"
   },
   {
     "name": "Chole Masala",
     "description": "Tangy and spicy chickpea curry cooked with spices.",
     "price": "₹279",
     "image": "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&q=80",
     "origin": "North Indian",
     "dietary": ["veg"],
     "category": "indian_main_course"
   },
   {
     "name": "Dal Makhani",
     "description": "Creamy black lentil curry slow-cooked to perfection.",
     "price": "₹299",
     "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&q=80",
     "origin": "Punjabi",
     "dietary": ["veg"],
     "category": "indian_main_course"
   },
   {
     "name": "Rajma Masala",
     "description": "Red kidney beans cooked in a spiced tomato gravy.",
     "price": "₹299",
     "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&q=80",
     "origin": "North Indian",
     "dietary": ["veg"],
     "category": "indian_main_course"
   },
   {
     "name": "Jeera Aloo",
     "description": "Cumin-flavored potatoes tossed in spices.",
     "price": "₹249",
     "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
     "origin": "North Indian",
     "dietary": ["veg","vegan"],
     "category": "indian_main_course"
   },
   {
     "name": "Bhindi Masala",
     "description": "Okra cooked with onions and Indian spices.",
     "price": "₹259",
     "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
     "origin": "Indian",
     "dietary": ["veg"],
     "category": "indian_main_course"
   },
   {
     "name": "Butter Chicken",
     "description": "Chicken in buttery tomato-based gravy.",
     "price": "₹449",
     "image": "https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&q=80",
     "origin": "North Indian",
     "dietary": ["non-veg"],
     "category": "indian_main_course"
   },
   {
     "name": "Chicken Curry",
     "description": "Classic chicken curry with aromatic spices.",
     "price": "₹399",
     "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
     "origin": "North Indian",
     "dietary": ["non-veg"],
     "category": "indian_main_course"
   },
   {
     "name": "Mutton Curry",
     "description": "Tender mutton pieces in a rich spiced gravy.",
     "price": "₹499",
     "image": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80",
     "origin": "North Indian",
     "dietary": ["non-veg"],
     "category": "indian_main_course"
   }
 ],

 "rajasthani_main_course": [
   {
     "name": "Ker Sangri",
     "description": "Traditional Rajasthani delicacy of dried berries and beans.",
     "price": "₹299",
     "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
     "origin": "Rajasthani",
     "dietary": ["veg"],
     "category": "rajasthani_main_course"
   },
   {
     "name": "Gatte Ki Sabzi",
     "description": "Gram flour dumplings in a spiced yogurt gravy.",
     "price": "₹299",
     "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&q=80",
     "origin": "Rajasthani",
     "dietary": ["veg"],
     "category": "rajasthani_main_course"
   },
   {
     "name": "Panchmel Dal",
     "description": "Mix of five lentils cooked with spices.",
     "price": "₹279",
     "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&q=80",
     "origin": "Rajasthani",
     "dietary": ["veg"],
     "category": "rajasthani_main_course"
   },
   {
     "name": "Laal Maas",
     "description": "Fiery red mutton curry prepared Rajasthani style.",
     "price": "₹499",
     "image": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80",
     "origin": "Rajasthani",
     "dietary": ["non-veg"],
     "category": "rajasthani_main_course"
   }
 ],

 "raita": [
   {
     "name": "Boondi Raita",
     "description": "Crispy boondi in chilled spiced yogurt.",
     "price": "₹99",
     "image": "https://images.unsplash.com/photo-1589621316382-008455b857cd?w=400&q=80",
     "origin": "Indian",
     "dietary": ["veg"],
     "category": "raita"
   },
   {
     "name": "Mix Veg Raita",
     "description": "Mixed vegetables blended with seasoned yogurt.",
     "price": "₹129",
     "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
     "origin": "Indian",
     "dietary": ["veg"],
     "category": "raita"
   },
   {
     "name": "Onion Raita",
     "description": "Finely chopped onions mixed with yogurt and spices.",
     "price": "₹89",
     "image": "https://images.unsplash.com/photo-1589621316382-008455b857cd?w=400&q=80",
     "origin": "Indian",
     "dietary": ["veg"],
     "category": "raita"
   },
   {
     "name": "Pineapple Raita",
     "description": "Sweet and tangy pineapple mixed with yogurt.",
     "price": "₹149",
     "image": "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80",
     "origin": "Indian",
     "dietary": ["veg"],
     "category": "raita"
   }
 ],

 "indian_breads": [
   {
     "name": "Tandoori Roti",
     "description": "Whole wheat roti baked in tandoor.",
     "price": "₹25",
     "image": "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=400&q=80",
     "origin": "Indian",
     "dietary": ["veg","vegan"],
     "category": "indian_breads"
   },
   {
     "name": "Butter Naan",
     "description": "Soft naan brushed with butter.",
     "price": "₹49",
     "image": "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=400&q=80",
     "origin": "North Indian",
     "dietary": ["veg"],
     "category": "indian_breads"
   },
   {
     "name": "Garlic Naan",
     "description": "Naan infused with garlic and herbs.",
     "price": "₹59",
     "image": "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=400&q=80",
     "origin": "North Indian",
     "dietary": ["veg"],
     "category": "indian_breads"
   },
   {
     "name": "Lachha Paratha",
     "description": "Flaky layered paratha cooked in tandoor.",
     "price": "₹69",
     "image": "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=400&q=80",
     "origin": "North Indian",
     "dietary": ["veg"],
     "category": "indian_breads"
   },
   {
     "name": "Stuffed Kulcha",
     "description": "Soft kulcha stuffed with spiced filling.",
     "price": "₹79",
     "image": "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=400&q=80",
     "origin": "North Indian",
     "dietary": ["veg"],
     "category": "indian_breads"
   }
 ],

 "rice": [
   {
     "name": "Steamed Rice",
     "description": "Fluffy white steamed rice.",
     "price": "₹149",
     "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
     "origin": "Indian",
     "dietary": ["veg","vegan"],
     "category": "rice"
   },
   {
     "name": "Jeera Rice",
     "description": "Aromatic rice flavored with cumin seeds.",
     "price": "₹199",
     "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
     "origin": "Indian",
     "dietary": ["veg","vegan"],
     "category": "rice"
   },
   {
     "name": "Veg Pulao",
     "description": "Fragrant rice cooked with vegetables and spices.",
     "price": "₹249",
     "image": "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&q=80",
     "origin": "Indian",
     "dietary": ["veg"],
     "category": "rice"
   },
   {
     "name": "Veg Biryani",
     "description": "Flavorful layered rice cooked with vegetables and spices.",
     "price": "₹299",
     "image": "https://images.unsplash.com/photo-1563379091339-03246963d49a?w=400&q=80",
     "origin": "Indian",
     "dietary": ["veg"],
     "category": "rice"
   },
   {
     "name": "Chicken Biryani",
     "description": "Spiced chicken layered with fragrant basmati rice.",
     "price": "₹399",
     "image": "https://images.unsplash.com/photo-1563379091339-03246963d49a?w=400&q=80",
     "origin": "Indian",
     "dietary": ["non-veg"],
     "category": "rice"
   },
   {
     "name": "Mutton Biryani",
     "description": "Tender mutton pieces layered with spiced rice.",
     "price": "₹499",
     "image": "https://images.unsplash.com/photo-1563379091339-03246963d49a?w=400&q=80",
     "origin": "Indian",
     "dietary": ["non-veg"],
     "category": "rice"
   }
 ],

 "desserts": [
   {
     "name": "Gulab Jamun",
     "description": "Soft khoya balls soaked in sugar syrup.",
     "price": "₹99",
     "image": "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&q=80",
     "origin": "Indian",
     "dietary": ["veg"],
     "category": "desserts"
   },
   {
     "name": "Rasgulla",
     "description": "Spongy cheese balls soaked in sweet syrup.",
     "price": "₹99",
     "image": "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&q=80",
     "origin": "Indian",
     "dietary": ["veg"],
     "category": "desserts"
   },
   {
     "name": "Ice Cream (2 Scoops)",
     "description": "Creamy ice cream in assorted flavors.",
     "price": "₹149",
     "image": "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&q=80",
     "origin": "Continental",
     "dietary": ["veg"],
     "category": "desserts"
   },
   {
     "name": "Kesari Halwa",
     "description": "Traditional Indian sweet made with semolina and saffron.",
     "price": "₹129",
     "image": "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&q=80",
     "origin": "Indian",
     "dietary": ["veg"],
     "category": "desserts"
   }
 ]
}

// DOM elements
const menuContainer = document.getElementById('menuItems');
const searchInput = document.getElementById('searchInput');
const vegToggle = document.getElementById('vegToggle');
const imageToggle = document.getElementById('imageToggle');
const searchInfo = document.getElementById('searchInfo');
const searchResults = document.getElementById('searchResults');
const clearSearchBtn = document.getElementById('clearSearch');
const noResults = document.getElementById('noResults');

// Current state
let currentCategory = 'all';
let isVegOnly = false;
let showImages = false;
let searchQuery = '';

// Initialize the menu
function initializeMenu() {
    updateCategoryButtons();
    renderMenu();
    setupEventListeners();
}
function capitalizeFirstLetter(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return str; 
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// Update category buttons to match our data
function updateCategoryButtons() {
    let cat_data = `
        <button class="category-btn active" data-category="all">All</button>
    `
     Object.keys(menuData).forEach(category => {
        cat_data += `
            <button class="category-btn" data-category="${category}">${capitalizeFirstLetter(category.replaceAll('_', ' '))}</button>
        `
    });
    const categoryNav = document.querySelector('.category-nav');
    categoryNav.innerHTML = cat_data
    
    // Re-select category buttons after updating
    const newCategoryButtons = document.querySelectorAll('.category-btn');
    newCategoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            currentCategory = e.target.dataset.category;
            updateActiveCategory(e.target);
            renderMenu();
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderMenu();
    });

    // Clear search
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        renderMenu();
    });

    // Vegetarian toggle
    vegToggle.addEventListener('change', (e) => {
        isVegOnly = e.target.checked;
        renderMenu();
    });

    // Image toggle
    imageToggle.addEventListener('change', (e) => {
        showImages = e.target.checked;
        toggleImages();
    });
}

// Toggle image visibility
function toggleImages() {
    const menuGrid = document.getElementById('menuItems');
    if (imageToggle.checked) {
        menuGrid.classList.remove('hide-images');
    } else {
        menuGrid.classList.add('hide-images');
    }
}

// Update active category button
function updateActiveCategory(activeButton) {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');
}

// Filter menu items based on current filters
function getFilteredItems() {
    let items = [];
    
    // Collect items from selected categories
    if (currentCategory === 'all') {
        Object.values(menuData).forEach(category => {
            items = items.concat(category);
        });
    } else {
        items = menuData[currentCategory] || [];
    }
    
    // Filter for vegetarian if toggle is on
    if (isVegOnly) {
        items = items.filter(item => 
            item.dietary.includes('veg') || item.dietary.includes('vegan')
        );
    }

    // Filter by search query
    if (searchQuery) {
        items = items.filter(item => 
            item.name.toLowerCase().includes(searchQuery) ||
            item.description.toLowerCase().includes(searchQuery) ||
            item.origin.toLowerCase().includes(searchQuery)
        );
    }
    
    return items;
}

// Highlight search terms in text
function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

// Update search info
function updateSearchInfo(filteredItems, totalItems) {
    if (searchQuery) {
        searchInfo.style.display = 'flex';
        const resultText = filteredItems.length === 1 
            ? `Found 1 dish matching "${searchQuery}"` 
            : `Found ${filteredItems.length} dishes matching "${searchQuery}"`;
        searchResults.textContent = resultText;
    } else {
        searchInfo.style.display = 'none';
    }
}

// Create dietary indicator HTML
function createDietaryIndicators(dietary) {
    return dietary.map(tag => {
        const symbol = tag === 'veg' ? 'V' : tag === 'vegan' ? 'VG' : 'N';
        return `<span class="dietary-tag ${tag}" title="${tag.toUpperCase()}">${symbol}</span>`;
    }).join('');
}

// Create menu item HTML
function createMenuItemHTML(item) {
    const highlightedName = highlightSearchTerm(item.name, searchQuery);
    const highlightedDescription = highlightSearchTerm(item.description, searchQuery);
    const highlightedOrigin = highlightSearchTerm(item.origin, searchQuery);
    
    return `
        <div class="menu-item ${searchQuery ? 'search-match' : ''}" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}" class="item-image" loading="lazy">
            <div class="item-content">
                <div class="item-header">
                    <h3 class="item-name">${highlightedName}</h3>
                    <span class="item-price">${item.price}</span>
                </div>
                <p class="item-description">${highlightedDescription}</p>
                <div class="item-details">
                    <span class="item-origin">${highlightedOrigin}</span>
                    <div class="dietary-indicators">
                        ${createDietaryIndicators(item.dietary)}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render menu with smooth transitions
function renderMenu() {
    const items = getFilteredItems();
    
    // Update search info
    updateSearchInfo(items, Object.values(menuData).flat().length);
    
    // Show/hide no results message
    if (items.length === 0) {
        noResults.style.display = 'block';
        menuContainer.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        menuContainer.style.display = 'grid';
    }
    
    // Add filtering class for transition
    const existingItems = document.querySelectorAll('.menu-item');
    existingItems.forEach(item => item.classList.add('filtering'));
    
    // Render new items after a short delay
    setTimeout(() => {
        menuContainer.innerHTML = items.map(createMenuItemHTML).join('');
        
        // Apply image toggle state
        toggleImages();
        
        // Trigger reflow and remove filtering class
        setTimeout(() => {
            const newItems = document.querySelectorAll('.menu-item');
            newItems.forEach(item => item.classList.remove('filtering'));
        }, 50);
    }, 150);
}

// Initialize when page loads
// document.addEventListener('DOMContentLoaded', initializeMenu);
document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    optimizeForMobile();
});

// Add smooth scroll behavior for better UX
// Add smooth scroll behavior for better UX
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.transform = 'translateY(-10px)';
        header.style.opacity = '0.95';
    } else {
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
    }
 });
 
 // Keyboard shortcuts for better UX
 document.addEventListener('keydown', (e) => {
    // Focus search on Ctrl/Cmd + F
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Clear search on Escape
    if (e.key === 'Escape' && searchInput === document.activeElement) {
        searchInput.value = '';
        searchQuery = '';
        renderMenu();
        searchInput.blur();
    }
 });
 
 // Add loading animation for search
 let searchTimeout;
 searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    
    // Add loading state
    searchInput.style.opacity = '0.7';
    
    searchTimeout = setTimeout(() => {
        searchQuery = e.target.value.toLowerCase();
        renderMenu();
        searchInput.style.opacity = '1';
    }, 300); // Debounce search for better performance
 });
 
 // Add click-to-copy functionality for dish names (useful for ordering)
//  document.addEventListener('click', (e) => {
//     if (e.target.classList.contains('item-name')) {
//         const dishName = e.target.textContent;
        
//         // Remove highlight spans for clean copy
//         const cleanName = dishName.replace(/<[^>]*>/g, '');
        
//         navigator.clipboard.writeText(cleanName).then(() => {
//             // Show brief feedback
//             const originalText = e.target.innerHTML;
//             e.target.innerHTML = '✓ Copied!';
//             e.target.style.color = 'var(--primary-gold)';
            
//             setTimeout(() => {
//                 e.target.innerHTML = originalText;
//                 e.target.style.color = '';
//             }, 1000);
//         }).catch(() => {
//             // Fallback for browsers that don't support clipboard API
//             console.log('Copy not supported');
//         });
//     }
//  });
 
 // Add price range filter functionality
 function addPriceFilter() {
    const priceRanges = [
        { label: 'Under ₹200', min: 0, max: 200 },
        { label: '₹200 - ₹400', min: 200, max: 400 },
        { label: '₹400 - ₹600', min: 400, max: 600 },
        { label: 'Above ₹600', min: 600, max: Infinity }
    ];
    
    // This can be added to the filter controls if needed
    return priceRanges;
 }
 
 // Analytics tracking for popular searches (if needed)
 function trackSearch(query) {
    if (query.length > 2) {
        // Track popular search terms
        const searches = JSON.parse(localStorage.getItem('popularSearches') || '{}');
        searches[query] = (searches[query] || 0) + 1;
        localStorage.setItem('popularSearches', JSON.stringify(searches));
    }
 }
 
 // Add this to the search input handler
 searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    
    searchInput.style.opacity = '0.7';
    
    searchTimeout = setTimeout(() => {
        searchQuery = e.target.value.toLowerCase();
        
        // Track search analytics
        if (searchQuery) {
            trackSearch(searchQuery);
        }
        
        renderMenu();
        searchInput.style.opacity = '1';
    }, 300);
 });
 
 // Add export menu functionality (useful for staff)
 function exportMenuData() {
    const allItems = Object.values(menuData).flat();
    const exportData = allItems.map(item => ({
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category,
        dietary: item.dietary.join(', '),
        origin: item.origin
    }));
    
    const csv = convertToCSV(exportData);
    downloadCSV(csv, 'inaara_menu.csv');
 }
 
 function convertToCSV(data) {
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(row => 
        Object.values(row).map(value => 
            `"${value.toString().replace(/"/g, '""')}"`
        ).join(',')
    );
    return [headers, ...rows].join('\n');
 }
 
 function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
 }
 
 // Add favorites functionality (using localStorage)
 let favorites = JSON.parse(localStorage.getItem('menuFavorites') || '[]');
 
 function toggleFavorite(itemName) {
    const index = favorites.indexOf(itemName);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(itemName);
    }
    localStorage.setItem('menuFavorites', JSON.stringify(favorites));
    renderMenu(); // Re-render to update favorite indicators
 }
 
 // Add favorite button to menu items (optional enhancement)
 function createMenuItemHTMLWithFavorites(item) {
    const isFavorite = favorites.includes(item.name);
    const highlightedName = highlightSearchTerm(item.name, searchQuery);
    const highlightedDescription = highlightSearchTerm(item.description, searchQuery);
    const highlightedOrigin = highlightSearchTerm(item.origin, searchQuery);
    
    return `
        <div class="menu-item ${searchQuery ? 'search-match' : ''}" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}" class="item-image" loading="lazy">
            <div class="item-content">
                <div class="item-header">
                    <h3 class="item-name">${highlightedName}</h3>
                    <div class="item-actions">
                        <button class="favorite-btn ${isFavorite ? 'active' : ''}" 
                                onclick="toggleFavorite('${item.name.replace(/'/g, "\\'")}')">
                            ${isFavorite ? '❤️' : '🤍'}
                        </button>
                        <span class="item-price">${item.price}</span>
                    </div>
                </div>
                <p class="item-description">${highlightedDescription}</p>
                <div class="item-details">
                    <span class="item-origin">${highlightedOrigin}</span>
                    <div class="dietary-indicators">
                        ${createDietaryIndicators(item.dietary)}
                    </div>
                </div>
            </div>
        </div>
    `;
 }
 
 // Performance optimization: Virtual scrolling for large menus
 class VirtualScroll {
    constructor(container, items, itemHeight = 300) {
        this.container = container;
        this.items = items;
        this.itemHeight = itemHeight;
        this.viewportHeight = window.innerHeight;
        this.visibleCount = Math.ceil(this.viewportHeight / itemHeight) + 2;
        this.scrollTop = 0;
        
        this.init();
    }
    
    init() {
        this.container.style.height = `${this.items.length * this.itemHeight}px`;
        this.container.style.position = 'relative';
        this.render();
        
        window.addEventListener('scroll', () => {
            this.scrollTop = window.pageYOffset;
            this.render();
        });
    }
    
    render() {
        const startIndex = Math.floor(this.scrollTop / this.itemHeight);
        const endIndex = Math.min(startIndex + this.visibleCount, this.items.length);
        
        const visibleItems = this.items.slice(startIndex, endIndex);
        
        this.container.innerHTML = visibleItems.map((item, index) => {
            const actualIndex = startIndex + index;
            const top = actualIndex * this.itemHeight;
            return `
                <div style="position: absolute; top: ${top}px; width: 100%;">
                    ${createMenuItemHTML(item)}
                </div>
            `;
        }).join('');
    }
 }
 
 // Initialize virtual scrolling for better performance with large menus
 function initVirtualScroll() {
    const allItems = Object.values(menuData).flat();
    if (allItems.length > 50) { // Only use virtual scrolling for large menus
        new VirtualScroll(menuContainer, allItems);
    }
 }
 
 // Add print-friendly styles
 function addPrintStyles() {
    const printStyles = `
        <style media="print">
            .menu-controls, .category-nav, .search-info { display: none !important; }
            .menu-item { break-inside: avoid; page-break-inside: avoid; }
            .item-image { max-height: 100px !important; }
            body { font-size: 12px; }
            .container { max-width: none; padding: 1rem; }
        </style>
    `;
    document.head.insertAdjacentHTML('beforeend', printStyles);
 }
 
 // Initialize print styles
 addPrintStyles();
 
 // Add service worker for offline functionality (optional)
//  if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js')
//             .then(registration => {
//                 console.log('SW registered: ', registration);
//             })
//             .catch(registrationError => {
//                 console.log('SW registration failed: ', registrationError);
//             });
//     });
//  }

 function optimizeForMobile() {
    const isMobile = window.innerWidth <= 480;
    const menuItems = document.querySelectorAll('.menu-item');
    
    if (isMobile) {
        menuItems.forEach(item => {
            const description = item.querySelector('.item-description');
            if (description && description.textContent.length > 80) {
                // Truncate long descriptions on mobile
                const truncated = description.textContent.substring(0, 80) + '...';
                description.textContent = truncated;
            }
        });
    }
}

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        optimizeForMobile();
    }, 250);
});
