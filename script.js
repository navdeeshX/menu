// Menu data from Inaara Restaurant with premium presentation
const menuData = {
  "beverages": [
    {
      "name": "Soft Drinks (250ml)",
      "description": "Refreshing carbonated beverage served chilled.",
      "price": "₹49",
      "image": "https://images.unsplash.com/photo-1582719478191-5b1e7a03e2f8?w=400&q=80",
      "origin": "",
      "dietary": ["veg"],
      "category": "soft_drinks"
    },
    {
      "name": "Fresh Lime Soda",
      "description": "Refreshing soda with fresh lime juice.",
      "price": "₹79",
      "image": "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "soft_drinks"
    },
    {
      "name": "Fresh Lime Water",
      "description": "Fresh lime juice with water and sugar/salt.",
      "price": "₹99",
      "image": "https://images.unsplash.com/photo-1590080876395-0c84a7c8d2a8?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "soft_drinks"
    },
    {
      "name": "Soda (750ml)",
      "description": "Large soda bottle.",
      "price": "₹149",
      "image": "https://images.unsplash.com/photo-1617196035297-d5e8a02c193f?w=400&q=80",
      "origin": "",
      "dietary": ["veg"],
      "category": "soft_drinks"
    },
    {
      "name": "Mojito Mint",
      "description": "Classic mojito with fresh mint and soda.",
      "price": "₹199",
      "image": "https://images.unsplash.com/photo-1582458607941-4b3f97c3a6f2?w=400&q=80",
      "origin": "Global",
      "dietary": ["veg"],
      "category": "soft_drinks"
    },
    {
      "name": "Canned Juice (Large)",
      "description": "Packaged canned fruit juice.",
      "price": "₹149",
      "image": "https://images.unsplash.com/photo-1551022374-54f5f9d4a3d8?w=400&q=80",
      "origin": "",
      "dietary": ["veg"],
      "category": "soft_drinks"
    },
    {
      "name": "Blue Lagoon",
      "description": "Refreshing mocktail with lemonade and blue curacao syrup.",
      "price": "₹49",
      "image": "https://images.unsplash.com/photo-1627662057417-334c06c14a2f?w=400&q=80",
      "origin": "Global",
      "dietary": ["veg"],
      "category": "soft_drinks"
    },
    {
      "name": "Tea",
      "description": "Hot Indian chai with milk and spices.",
      "price": "₹39",
      "image": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "beverages"
    },
    {
      "name": "Coffee",
      "description": "Hot brewed coffee.",
      "price": "₹79",
      "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80",
      "origin": "Global",
      "dietary": ["veg"],
      "category": "beverages"
    },
    {
      "name": "Milk (Hot & Cold)",
      "description": "Fresh milk served hot or cold.",
      "price": "₹49",
      "image": "https://images.unsplash.com/photo-1582719201807-2e82f8910b6d?w=400&q=80",
      "origin": "",
      "dietary": ["veg"],
      "category": "beverages"
    },
    {
      "name": "Soft Drinks (400ml)",
      "description": "Carbonated beverage served in 400ml glass.",
      "price": "₹49",
      "image": "https://images.unsplash.com/photo-1606788075761-5d59a95cdbf1?w=400&q=80",
      "origin": "",
      "dietary": ["veg"],
      "category": "soft_drinks"
    },
    {
      "name": "Cold Coffee (Plain)",
      "description": "Iced cold coffee served plain.",
      "price": "₹129",
      "image": "https://images.unsplash.com/photo-1627662057417-334c06c14a2f?w=400&q=80",
      "origin": "Global",
      "dietary": ["veg"],
      "category": "beverages"
    },
    {
      "name": "Cold Coffee (With Ice Cream)",
      "description": "Cold coffee topped with ice cream.",
      "price": "₹199",
      "image": "https://images.unsplash.com/photo-1606787645459-87b29a64f234?w=400&q=80",
      "origin": "Global",
      "dietary": ["veg"],
      "category": "beverages"
    },
    {
      "name": "Milkshake",
      "description": "Rich and creamy flavored milkshake.",
      "price": "₹119",
      "image": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&q=80",
      "origin": "Global",
      "dietary": ["veg"],
      "category": "beverages"
    },
    {
      "name": "Mineral Water",
      "description": "Packaged drinking water.",
      "price": "₹29",
      "image": "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=400&q=80",
      "origin": "",
      "dietary": ["veg"],
      "category": "beverages"
    }
  ],
  "breakfast": [
    {
      "name": "Poha / Upma",
      "description": "Traditional Indian breakfast made with flattened rice or semolina.",
      "price": "₹175",
      "image": "https://images.unsplash.com/photo-1632823474499-3e8f1f0b20e4?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Idli Sambhar (4pc.)",
      "description": "Steamed rice cakes served with sambhar and chutney.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1604908177412-3a1c7f2f660a?w=400&q=80",
      "origin": "South Indian",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Veg Sandwich",
      "description": "Fresh vegetable sandwich served with condiments.",
      "price": "₹275",
      "image": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&q=80",
      "origin": "Global",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Plain Cheese Sandwich",
      "description": "Grilled sandwich with cheese filling.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1585238341986-765bdf2c1a38?w=400&q=80",
      "origin": "Global",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Club Sandwich",
      "description": "Layered sandwich with vegetables and cheese.",
      "price": "₹119",
      "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
      "origin": "Global",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Veg Grilled Sandwich",
      "description": "Grilled sandwich stuffed with vegetables.",
      "price": "₹99",
      "image": "https://images.unsplash.com/photo-1505253216365-51242b3a2aa7?w=400&q=80",
      "origin": "Global",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Cheese Grilled Sandwich",
      "description": "Grilled sandwich stuffed with cheese.",
      "price": "₹99",
      "image": "https://images.unsplash.com/photo-1627308595400-7c943d7e8c01?w=400&q=80",
      "origin": "Global",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Corn Flakes Milk (Hot & Cold)",
      "description": "Corn flakes served with hot or cold milk.",
      "price": "₹149",
      "image": "https://images.unsplash.com/photo-1589883661928-1e5bb6f9c9a5?w=400&q=80",
      "origin": "Global",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Puri Bhaji (4pc.)",
      "description": "Deep-fried puris served with potato curry.",
      "price": "₹199",
      "image": "https://images.unsplash.com/photo-1654514894799-50e54f9b89e6?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Aloo Paratha with Curd (2pc.)",
      "description": "Stuffed potato paratha served with curd.",
      "price": "₹199",
      "image": "https://images.unsplash.com/photo-1641555647894-6b98ae035a5c?w=400&q=80",
      "origin": "North Indian",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Aloo Bada (3pc.)",
      "description": "Deep-fried potato fritters.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1617196035297-d5e8a02c193f?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Chole Bhature (2pc.)",
      "description": "Spiced chickpeas served with fried bhature.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1626082926319-3774f39c8f39?w=400&q=80",
      "origin": "North Indian",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Toast with Butter & Jam",
      "description": "Toasted bread served with butter and jam.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1587248720322-b239d40eadd6?w=400&q=80",
      "origin": "Global",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Bread Butter",
      "description": "Simple bread with butter spread.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1626082926399-b7d2972d57db?w=400&q=80",
      "origin": "Global",
      "dietary": ["veg"],
      "category": "breakfast"
    },
    {
      "name": "Pav Bhaji (4pc.)",
      "description": "Spiced vegetable curry served with buttered pav bread.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1632928360164-37936cbe2062?w=400&q=80",
      "origin": "Mumbai",
      "dietary": ["veg"],
      "category": "breakfast"
    }
  ],
  "eggs": [
    {
      "name": "Boiled Egg",
      "description": "Simple boiled egg served with salt and pepper.",
      "price": "₹129",
      "image": "https://images.unsplash.com/photo-1606851091891-72f5d3c7ad5a?w=400&q=80",
      "origin": "Global",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Bhurji",
      "description": "Spicy Indian-style scrambled eggs.",
      "price": "₹149",
      "image": "https://images.unsplash.com/photo-1632823474334-36d2a9a8c2a6?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Egg Pakora",
      "description": "Deep-fried fritters made with eggs and spices.",
      "price": "₹175",
      "image": "https://images.unsplash.com/photo-1625941360676-18d96d9d0f64?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Boiled Egg (3pc.)",
      "description": "Three pieces of boiled eggs served plain.",
      "price": "₹199",
      "image": "https://images.unsplash.com/photo-1627662057466-5a77cb4b3c87?w=400&q=80",
      "origin": "Global",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Boiled Egg Fry (3pc.)",
      "description": "Fried boiled eggs with Indian spices.",
      "price": "₹129",
      "image": "https://images.unsplash.com/photo-1617196035297-d5e8a02c193f?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Masala Omlette",
      "description": "Omelette cooked with onions, chilies, and spices.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1617196035297-d5e8a02c193f?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Egg Bhurji",
      "description": "Scrambled eggs cooked with onions, tomatoes, and spices.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1632823474334-36d2a9a8c2a6?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Cheese Omlette",
      "description": "Fluffy omelette stuffed with cheese.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1606851091891-72f5d3c7ad5a?w=400&q=80",
      "origin": "Global",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Poached Egg",
      "description": "Soft poached eggs served warm.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1606851091973-c5b7461f4e6a?w=400&q=80",
      "origin": "Global",
      "dietary": ["non-veg"],
      "category": "eggs"
    },
    {
      "name": "Egg Chilly",
      "description": "Indo-Chinese style spicy egg stir-fry.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1606851092111-b50a1c06e20b?w=400&q=80",
      "origin": "Indo-Chinese",
      "dietary": ["non-veg"],
      "category": "eggs"
    }
  ],
  "salad_papad": [
    {
      "name": "Masala Papad Fry/Roasted",
      "description": "Crispy papad topped with onions, tomatoes, and spices.",
      "price": "₹119",
      "image": "https://images.unsplash.com/photo-1632823474334-36d2a9a8c2a6?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Makki Papadi",
      "description": "Crispy corn flour-based papadi snack.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1627662057466-5a77cb4b3c87?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Green Salad",
      "description": "Freshly cut seasonal vegetables served raw.",
      "price": "₹249",
      "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80",
      "origin": "Global",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Russian Salad",
      "description": "Creamy salad with vegetables and mayonnaise.",
      "price": "₹99",
      "image": "https://images.unsplash.com/photo-1585238341986-765bdf2c1a38?w=400&q=80",
      "origin": "Russian",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Makhana Salad",
      "description": "Roasted foxnuts mixed with vegetables and spices.",
      "price": "₹49",
      "image": "https://images.unsplash.com/photo-1606787645459-87b29a64f234?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Fried Papad",
      "description": "Deep-fried papad, crispy and crunchy.",
      "price": "₹49",
      "image": "https://images.unsplash.com/photo-1617196035297-d5e8a02c193f?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Kachumber Salad",
      "description": "Chopped onion, cucumber, and tomato salad.",
      "price": "₹49",
      "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Onion Salad",
      "description": "Sliced onion salad served with lemon and salt.",
      "price": "₹79",
      "image": "https://images.unsplash.com/photo-1632823474499-3e8f1f0b20e4?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Roasted Papad",
      "description": "Roasted papad served plain.",
      "price": "₹59",
      "image": "https://images.unsplash.com/photo-1627662057417-334c06c14a2f?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Kaju Makhana Salad",
      "description": "Healthy salad with cashews and roasted foxnuts.",
      "price": "₹299",
      "image": "https://images.unsplash.com/photo-1585238341965-bc0d6e53b82a?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "salad_papad"
    },
    {
      "name": "Sprout Salad",
      "description": "Protein-rich salad made with sprouted legumes.",
      "price": "₹199",
      "image": "https://images.unsplash.com/photo-1606788075761-5d59a95cdbf1?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "salad_papad"
    }
  ],
  "soups": [
    {
      "name": "Sweet Corn Chicken Soup",
      "description": "Chicken and sweet corn in a light, savory broth.",
      "price": "249/-",
      "image": "https://images.unsplash.com/photo-1603079650118-8ad3ec90d66f?w=400&q=80",
      "origin": "Indo-Chinese",
      "dietary": ["non-veg"],
      "category": "soups"
    },
    {
      "name": "Hot & Sour Chicken Soup",
      "description": "Spicy and tangy chicken soup with vegetables and vinegar.",
      "price": "199/-",
      "image": "https://images.unsplash.com/photo-1613145993371-dfa7e4e1a50e?w=400&q=80",
      "origin": "Indo-Chinese",
      "dietary": ["non-veg"],
      "category": "soups"
    },
    {
      "name": "Chicken Manchow Soup",
      "description": "Hearty chicken Manchow topped with fried noodles.",
      "price": "249/-",
      "image": "https://images.unsplash.com/photo-1617196035317-3e8f1f0b20e4?w=400&q=80",
      "origin": "Indo-Chinese",
      "dietary": ["non-veg"],
      "category": "soups"
    },
    {
      "name": "Cream of Chicken Soup",
      "description": "Rich and creamy chicken soup, smooth texture.",
      "price": "249/-",
      "image": "https://images.unsplash.com/photo-1590080876395-0c84a7c8d2a8?w=400&q=80",
      "origin": "Continental",
      "dietary": ["non-veg"],
      "category": "soups"
    },
    {
      "name": "Cream of Tomato Soup",
      "description": "Silky tomato soup finished with cream.",
      "price": "249/-",
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
      "origin": "Continental",
      "dietary": ["veg"],
      "category": "soups"
    },
    {
      "name": "Lemon Coriander Soup",
      "description": "Zesty soup with lemon and fresh coriander.",
      "price": "199/-",
      "image": "https://images.unsplash.com/photo-1613145993481-1d37946d3f56?w=400&q=80",
      "origin": "Indo-Chinese",
      "dietary": ["veg"],
      "category": "soups"
    },
    {
      "name": "Cream of Veg Soup",
      "description": "Creamy blended vegetables, smooth and comforting.",
      "price": "199/-",
      "image": "https://images.unsplash.com/photo-1613145993401-efc3b0d41d0a?w=400&q=80",
      "origin": "Continental",
      "dietary": ["veg"],
      "category": "soups"
    },
    {
      "name": "Palak Shorba",
      "description": "Spinach-based shorba, mildly spiced and warming.",
      "price": "275/-",
      "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "soups"
    },
    {
      "name": "Veg Manchow Soup",
      "description": "Spicy veg Manchow with mixed vegetables and crisp topping.",
      "price": "275/-",
      "image": "https://images.unsplash.com/photo-1627662057436-734c06c14a2f?w=400&q=80",
      "origin": "Indo-Chinese",
      "dietary": ["veg"],
      "category": "soups"
    },
    {
      "name": "Sweet Corn Veg Soup",
      "description": "Sweet corn and vegetables simmered in a light broth.",
      "price": "275/-",
      "image": "https://images.unsplash.com/photo-1613145993551-2d37946d3f56?w=400&q=80",
      "origin": "Indo-Chinese",
      "dietary": ["veg"],
      "category": "soups"
    },
    {
      "name": "Dal Shorba",
      "description": "Lentil shorba, spiced and comforting.",
      "price": "275/-",
      "image": "https://images.unsplash.com/photo-1617196035297-d5e8a02c193f?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "soups"
    },
    {
      "name": "Hot & Sour Veg Soup",
      "description": "Tangy and spicy vegetable soup with vinegar and chili.",
      "price": "249/-",
      "image": "https://images.unsplash.com/photo-1627662057419-6b77cb4b3c87?w=400&q=80",
      "origin": "Indo-Chinese",
      "dietary": ["veg"],
      "category": "soups"
    }
  ],
  "veg_starters": [
    {
      "name": "Tandoori Platter (Assorted)",
      "description": "Assorted tandoori vegetables and paneer.",
      "price": "375/-",
      "image": "https://images.unsplash.com/photo-1604908177412-3a1c7f2f660a?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Aloo Cheese Kabab",
      "description": "Potato and cheese patties, shallow fried.",
      "price": "379/-",
      "image": "https://images.unsplash.com/photo-1601050690597-9b06f25a551c?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Veg Lolly Pop",
      "description": "Crispy vegetable pop with spicy coating.",
      "price": "379/-",
      "image": "https://images.unsplash.com/photo-1617196035252-3e8f1f0b20e4?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Corn Roll",
      "description": "Roll stuffed with sweet corn and spices.",
      "price": "299/-",
      "image": "https://images.unsplash.com/photo-1627662057436-734c06c14a2f?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Peas Roll",
      "description": "Crispy roll filled with spiced peas.",
      "price": "349/-",
      "image": "https://images.unsplash.com/photo-1632823474391-1d37946d3f56?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Peanut Plain",
      "description": "Roasted/seasoned peanuts.",
      "price": "299/-",
      "image": "https://images.unsplash.com/photo-1606787645459-87b29a64f234?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Peanut Masala",
      "description": "Spiced masala peanuts.",
      "price": "399/-",
      "image": "https://images.unsplash.com/photo-1585238341965-bc0d6e53b82a?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Paneer Chilly",
      "description": "Paneer cubes tossed with chilli sauce and peppers.",
      "price": "299/-",
      "image": "https://images.unsplash.com/photo-1606788075731-5d59a95cdbf1?w=400&q=80",
      "origin": "Indo-Chinese",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Paneer Tikka",
      "description": "Marinated paneer grilled in tandoor.",
      "price": "249/-",
      "image": "https://images.unsplash.com/photo-1632823474475-efc3b0d41d0a?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Paneer Malai Tikka",
      "description": "Creamy marinated paneer grilled.",
      "price": "275/-",
      "image": "https://images.unsplash.com/photo-1613145993427-3e8f1f0b20e4?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Paneer Sticks",
      "description": "Skewered paneer sticks, lightly spiced.",
      "price": "249/-",
      "image": "https://images.unsplash.com/photo-1627662057419-6b77cb4b3c87?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Baby Corn Tikka",
      "description": "Marinated baby corn, grilled.",
      "price": "99/-",
      "image": "https://images.unsplash.com/photo-1585238341992-bc0d6e53b82a?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Mushroom Tikka",
      "description": "Mushroom pieces marinated and grilled.",
      "price": "149/-",
      "image": "https://images.unsplash.com/photo-1606787645488-87b29a64f234?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Veg Pakora",
      "description": "Mixed vegetable fritters, deep fried.",
      "price": "249/-",
      "image": "https://images.unsplash.com/photo-1601050690598-9b06f25a551c?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Paneer Pakora",
      "description": "Batter-fried paneer cubes.",
      "price": "299/-",
      "image": "https://images.unsplash.com/photo-1585238341993-bc0d6e53b82a?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Potato Cheese Roll",
      "description": "Roll stuffed with spiced potato and cheese.",
      "price": "199/-",
      "image": "https://images.unsplash.com/photo-1627662057432-6b77cb4b3c87?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Crispy Cheese Paneer",
      "description": "Crispy fried paneer with cheese coating.",
      "price": "199/-",
      "image": "https://images.unsplash.com/photo-1603899122233-0c79f4e44f1f?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Cheese Chilly Toast",
      "description": "Toasted bread topped with cheese and chilly.",
      "price": "249/-",
      "image": "https://images.unsplash.com/photo-1632823474427-1d37946d3f56?w=400&q=80",
      "origin": "Continental/Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Aloo Chana Chaat",
      "description": "Spiced potato and chickpea chaat.",
      "price": "379/-",
      "image": "https://images.unsplash.com/photo-1627662057417-334c06c14a2f?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Hara Bhara Kabab",
      "description": "Spinach & green-pea kebab, shallow fried.",
      "price": "275/-",
      "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Veg Spring Roll",
      "description": "Crispy rolls stuffed with mixed vegetables.",
      "price": "199/-",
      "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
      "origin": "Chinese",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "French Fry",
      "description": "Classic deep-fried potato fries.",
      "price": "249/-",
      "image": "https://images.unsplash.com/photo-1542444459-db3c6f7b7a0b?w=400&q=80",
      "origin": "Global",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Veg Cutlet",
      "description": "Pan-fried vegetable cutlets.",
      "price": "199/-",
      "image": "https://images.unsplash.com/photo-1607303679229-3a3b9ecb0aa6?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Tandoori Aloo",
      "description": "Spiced baby potatoes roasted in tandoor.",
      "price": "249/-",
      "image": "https://images.unsplash.com/photo-1626082926319-3774f39c8f39?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Veg Triangle",
      "description": "Triangular pastry stuffed with vegetables.",
      "price": "299/-",
      "image": "https://images.unsplash.com/photo-1585238341986-765bdf2c1a38?w=400&q=80",
      "origin": "Indian/Continental",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Achaari Paneer Tikka",
      "description": "Paneer tikka marinated in pickling spices.",
      "price": "399/-",
      "image": "https://images.unsplash.com/photo-1606851091891-72f5d3c7ad5a?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Veg Seekh Kabab",
      "description": "Minced vegetable kebab skewered and grilled.",
      "price": "275/-",
      "image": "https://images.unsplash.com/photo-1632823474499-3e8f1f0b20e4?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Makki Malai Tikki",
      "description": "Corn and cream tikkis, lightly spiced.",
      "price": "299/-",
      "image": "https://images.unsplash.com/photo-1625941360676-18d96d9d0f64?w=400&q=80",
      "origin": "Indian",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Mushroom Chilly",
      "description": "Mushrooms tossed in chilly sauce with peppers.",
      "price": "299/-",
      "image": "https://images.unsplash.com/photo-1627662057436-734c06c14a2f?w=400&q=80",
      "origin": "Indo-Chinese",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Crispy corn",
      "description": "Crispy battered sweet corn tossed with spices.",
      "price": "299/-",
      "image": "https://images.unsplash.com/photo-1613145993401-efc3b0d41d0a?w=400&q=80",
      "origin": "Indo-Chinese",
      "dietary": ["veg"],
      "category": "veg_starters"
    },
    {
      "name": "Mushroom Merry",
      "description": "Chef's special mushroom preparation.",
      "price": "349/-",
      "image": "https://images.unsplash.com/photo-1613145993551-2d37946d3f56?w=400&q=80",
      "origin": "Indian/Continental",
      "dietary": ["veg"],
      "category": "veg_starters"
    }
  ],
  "non_veg_starters": [
    {
      "name": "Tawa Fish",
      "price": "₹449",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Fish Finger",
      "price": "₹599",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Chicken Bhujma",
      "price": "₹299",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Chicken Lolly Pop",
      "price": "₹399",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Toasted Chicken Sandwich",
      "price": "₹449",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Chicken Sandwich",
      "price": "₹449",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Chicken Tikka",
      "price": "₹449",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Murg Tandoori (Full)",
      "price": "₹449",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Murg Tandoori (Half)",
      "price": "₹399",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Chicken Seekh Kabab",
      "price": "₹299",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Fish Tikka",
      "price": "₹275",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Bhujma Mutton",
      "price": "₹475",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Murg Tikka Afghani",
      "price": "₹475",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Murg Tikka Adraki",
      "price": "₹475",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Juicy Chicken Tikka",
      "price": "₹475",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Murg Lehsuni Tikka",
      "price": "₹475",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Chilly Chicken",
      "price": "₹399",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Shreded Chicken Hot (Garlic Sauce)",
      "price": "₹399",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Chicken Chowmein",
      "price": "₹399",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Schezwan Chicken",
      "price": "₹399",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Lemon chicken",
      "price": "₹399",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Chicken Shanghai",
      "price": "₹399",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Chicken Spring Roll",
      "price": "₹349",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Chicken Manchurian",
      "price": "₹349",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Chicken Hong Kong Style",
      "price": "₹399",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    },
    {
      "name": "Chicken Dana",
      "price": "₹349",
      "category": "non_veg_starters",
      "dietary": ["non-veg"]
    }
  ],
  "indian_main_course_veg": [
    {
      "name": "Paneer Chulbuli",
      "price": "₹499",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Palak Paneer",
      "price": "₹299",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Veg Jalfrezi",
      "price": "₹299",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Kaju Curry",
      "price": "₹299",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Mix Veg.",
      "price": "₹299",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Kadai Paneer",
      "price": "₹299",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Veg Kolhapuri",
      "price": "₹349",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Veg Jaipuri",
      "price": "₹299",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Matar Paneer",
      "price": "₹299",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Paneer Butter Masala",
      "price": "₹399",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Paneer Tikka Masala",
      "price": "₹429",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Paneer Laziz",
      "price": "₹399",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Malai Kofta",
      "price": "₹399",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Navratan Korma",
      "price": "₹399",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Angoori Curry",
      "price": "₹299",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Dum Aloo Punjabi",
      "price": "₹299",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Bhindi Masala",
      "price": "₹249",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Creamy Onion Masala Paneer",
      "price": "₹275",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Mushroom Butter Masala",
      "price": "₹349",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Mushroom Masala",
      "price": "₹299",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Aloo Jeera",
      "price": "₹249",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Capsicum",
      "price": "₹249",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Dal Tadka",
      "price": "₹299",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Sev Tomato",
      "price": "₹299",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Dal Makhani",
      "price": "₹399",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Rajma Curry",
      "price": "₹299",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Aloo Gobhi Matar",
      "price": "₹249",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Veg Kofta Curry",
      "price": "₹299",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Chana Masala",
      "price": "₹249",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Matar Mashroom",
      "price": "₹299",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    },
    {
      "name": "Aloo Gobhi Adraki",
      "price": "₹275",
      "category": "indian_main_course_veg",
      "dietary": ["veg"]
    }
  ],
  "indian_main_course_nonveg": [
    {
      "name": "Chicken Masala ( Half)",
      "description": "Spiced chicken masala served half-portion.",
      "price": "649/-",
      "image": "https://images.unsplash.com/photo-1604908177412-3a1c7f2f660a?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Chicken Jalfrezi",
      "description": "Tangy and spicy chicken cooked with peppers and onions.",
      "price": "399/-",
      "image": "https://images.unsplash.com/photo-1603079650118-8ad3ec90d66f?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Handi Murg Navratan",
      "description": "Rich handi-style chicken with mixed vegetables (Navratan).",
      "price": "399/-",
      "image": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Keema",
      "description": "Minced meat cooked with spices (keema).",
      "price": "449/-",
      "image": "https://images.unsplash.com/photo-1603899122233-0c79f4e44f1f?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Hyderabadi Mutton",
      "description": "Slow-cooked Hyderabadi-style mutton with rich spices.",
      "price": "399/-",
      "image": "https://images.unsplash.com/photo-1601050690598-9b06f25a551c?w=400&q=80",
      "origin": "Hyderabadi",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Lal Maas",
      "description": "Traditional spicy Rajasthani mutton curry (Lal Maas).",
      "price": "649/-",
      "image": "https://images.unsplash.com/photo-1613145993427-3e8f1f0b20e4?w=400&q=80",
      "origin": "Rajasthani",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Dhuva Ghosh",
      "description": "Chef's special mutton preparation (as listed).",
      "price": "429/-",
      "image": "https://images.unsplash.com/photo-1627662057436-734c06c14a2f?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Mutton Rogan Josh",
      "description": "Aromatic Kashmiri-style mutton Rogan Josh.",
      "price": "399/-",
      "image": "https://images.unsplash.com/photo-1606787645488-87b29a64f234?w=400&q=80",
      "origin": "Kashmiri",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Butter Chicken (Full)",
      "description": "Creamy tomato-based butter chicken (full portion).",
      "price": "449/-",
      "image": "https://images.unsplash.com/photo-1606788075731-5d59a95cdbf1?w=400&q=80",
      "origin": "North Indian",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Butter Chicken (Half)",
      "description": "Creamy tomato-based butter chicken (half portion).",
      "price": "549/-",
      "image": "https://images.unsplash.com/photo-1585238341993-bc0d6e53b82a?w=400&q=80",
      "origin": "North Indian",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Chicken Masala (Full)",
      "description": "Full-portion spicy chicken masala.",
      "price": "499/-",
      "image": "https://images.unsplash.com/photo-1632823474391-1d37946d3f56?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Murg Nawabi",
      "description": "Royal-style chicken preparation with rich gravy.",
      "price": "499/-",
      "image": "https://images.unsplash.com/photo-1627662057419-6b77cb4b3c87?w=400&q=80",
      "origin": "Mughlai",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Chicken Kadai",
      "description": "Spicy and tangy chicken cooked in a kadai with peppers.",
      "price": "449/-",
      "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80",
      "origin": "North Indian",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Safed Chicken",
      "description": "Creamy, mild 'white' chicken curry (Safed).",
      "price": "499/-",
      "image": "https://images.unsplash.com/photo-1617196035317-3e8f1f0b20e4?w=400&q=80",
      "origin": "Mughlai",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Fish Curry",
      "description": "Tangy and spicy fish curry made to chef's style.",
      "price": "399/-",
      "image": "https://images.unsplash.com/photo-1601050690599-9b06f25a551c?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Chicken Tikka Masala",
      "description": "Grilled chicken tikka cooked in creamy masala gravy.",
      "price": "449/-",
      "image": "https://images.unsplash.com/photo-1606851091891-72f5d3c7ad5a?w=400&q=80",
      "origin": "Indian/UK",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Egg Curry",
      "description": "Boiled eggs simmered in spiced curry gravy.",
      "price": "299/-",
      "image": "https://images.unsplash.com/photo-1606851091973-c5b7461f4e6a?w=400&q=80",
      "origin": "Indian",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    },
    {
      "name": "Murg Patiala",
      "description": "Murg Patiala — rich Punjabi-style chicken preparation.",
      "price": "399/-",
      "image": "https://images.unsplash.com/photo-1626082926319-3774f39c8f39?w=400&q=80",
      "origin": "Punjabi",
      "dietary": ["non-veg"],
      "category": "indian_main_course_nonveg"
    }
  ],
  "rice_biryani": [
    {
      "name": "Veg Pulao",
      "price": "₹299",
      "category": "rice_biryani",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1604908177071-64139b3a7d8a?w=400&q=80"
    },
    {
      "name": "Veg Biryani",
      "price": "₹349",
      "category": "rice_biryani",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1605478903253-8f5a8032d4f0?w=400&q=80"
    },
    {
      "name": "Hyderabadi Veg Biryani",
      "price": "₹379",
      "category": "rice_biryani",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1626076030409-8a52c57d2057?w=400&q=80"
    },
    {
      "name": "Paneer Biryani",
      "price": "₹399",
      "category": "rice_biryani",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1626440108327-7c37f1318cfc?w=400&q=80"
    },
    {
      "name": "Veg Fried Rice",
      "price": "₹279",
      "category": "rice_biryani",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1604908553729-29da9a1e3a6e?w=400&q=80"
    },
    {
      "name": "Jeera Rice",
      "price": "₹249",
      "category": "rice_biryani",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1625246333195-72c1e7b3cd60?w=400&q=80"
    },
    {
      "name": "Steamed Rice",
      "price": "₹199",
      "category": "rice_biryani",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1621996346565-3b6e25a6b8f8?w=400&q=80"
    },
    {
      "name": "Egg Biryani",
      "price": "₹349",
      "category": "rice_biryani",
      "dietary": ["egg"],
      "image": "https://images.unsplash.com/photo-1609493651126-9a91f96455ce?w=400&q=80"
    },
    {
      "name": "Chicken Biryani",
      "price": "₹399",
      "category": "rice_biryani",
      "dietary": ["non-veg"],
      "image": "https://images.unsplash.com/photo-1598515213692-c8b0f0c15f83?w=400&q=80"
    },
    {
      "name": "Hyderabadi Chicken Biryani",
      "price": "₹449",
      "category": "rice_biryani",
      "dietary": ["non-veg"],
      "image": "https://images.unsplash.com/photo-1601050690597-e1f23a5e3bcb?w=400&q=80"
    },
    {
      "name": "Mutton Biryani",
      "price": "₹499",
      "category": "rice_biryani",
      "dietary": ["non-veg"],
      "image": "https://images.unsplash.com/photo-1605478204383-8466f131b94d?w=400&q=80"
    },
    {
      "name": "Hyderabadi Mutton Biryani",
      "price": "₹549",
      "category": "rice_biryani",
      "dietary": ["non-veg"],
      "image": "https://images.unsplash.com/photo-1606387073905-ec8285347ea1?w=400&q=80"
    },
    {
      "name": "Prawns Biryani",
      "price": "₹479",
      "category": "rice_biryani",
      "dietary": ["non-veg"],
      "image": "https://images.unsplash.com/photo-1625246190309-01f345962f8f?w=400&q=80"
    },
    {
      "name": "Fish Biryani",
      "price": "₹459",
      "category": "rice_biryani",
      "dietary": ["non-veg"],
      "image": "https://images.unsplash.com/photo-1605478816425-0d8f94fbcb10?w=400&q=80"
    },
    {
      "name": "Chicken Fried Rice",
      "price": "₹349",
      "category": "rice_biryani",
      "dietary": ["non-veg"],
      "image": "https://images.unsplash.com/photo-1603190287605-5a4a4c8a3c79?w=400&q=80"
    },
    {
      "name": "Egg Fried Rice",
      "price": "₹299",
      "category": "rice_biryani",
      "dietary": ["egg"],
      "image": "https://images.unsplash.com/photo-1604908813512-3f75ad6054b4?w=400&q=80"
    },
    {
      "name": "Steam Rice",
      "price": "₹199",
      "category": "rice_biryani",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1604909052743-b13a1a5827d7?w=400&q=80"
    },
    {
      "name": "Jeera Rice",
      "price": "₹249",
      "category": "rice_biryani",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1606791405792-1004ecbc74b2?w=400&q=80"
    },
    {
      "name": "Curd Rice",
      "price": "₹299",
      "category": "rice_biryani",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1603133872878-684f3b9fcb55?w=400&q=80"
    },
    {
      "name": "Veg Pulao",
      "price": "₹299",
      "category": "rice_biryani",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1632823470161-64b3eebbc49b?w=400&q=80"
    },
    {
      "name": "Peas Pulao",
      "price": "₹275",
      "category": "rice_biryani",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1627308595190-bf62c0c5c1b1?w=400&q=80"
    },
    {
      "name": "Kashmiri Pulao",
      "price": "₹349",
      "category": "rice_biryani",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1627308595229-7831e5aa2d07?w=400&q=80"
    },
    {
      "name": "Veg Biryani with Curd",
      "price": "₹399",
      "category": "rice_biryani",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1621996346561-1666b5ff8e56?w=400&q=80"
    },
    {
      "name": "Gatta Biryani with Curd",
      "price": "₹349",
      "category": "rice_biryani",
      "dietary": ["veg", "rajasthani"],
      "image": "https://images.unsplash.com/photo-1645111727589-6aebadc177a2?w=400&q=80"
    },
    {
      "name": "Khichdi",
      "price": "₹299",
      "category": "rice_biryani",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1601050690597-dfcb0c8bc07f?w=400&q=80"
    },
    {
      "name": "Chicken Biryani with Curd",
      "price": "₹475",
      "category": "rice_biryani",
      "dietary": ["non-veg"],
      "image": "https://images.unsplash.com/photo-1598620617137-44de9b74d17e?w=400&q=80"
    },
    {
      "name": "Mutton Biryani with Curd",
      "price": "₹499",
      "category": "rice_biryani",
      "dietary": ["non-veg"],
      "image": "https://images.unsplash.com/photo-1633945274405-5a4a48a18b1d?w=400&q=80"
    },
    {
      "name": "Chicken Fried Rice",
      "price": "₹349",
      "category": "rice_biryani",
      "dietary": ["non-veg"],
      "image": "https://images.unsplash.com/photo-1600752376193-d6addf8c06c0?w=400&q=80"
    },
    {
      "name": "Egg Biryani",
      "price": "₹299",
      "category": "rice_biryani",
      "dietary": ["non-veg", "egg"],
      "image": "https://images.unsplash.com/photo-1608744882200-fbb2d79f05af?w=400&q=80"
    },
    {
      "name": "Egg Fried Rice",
      "price": "₹299",
      "category": "rice_biryani",
      "dietary": ["non-veg", "egg"],
      "image": "https://images.unsplash.com/photo-1608497750924-9d546f5a6e02?w=400&q=80"
    }
  ],
  "raita_lassi": [
    {
      "name": "Curd / Dahi",
      "price": "₹99",
      "category": "raita_lassi",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1627308594864-1f7b0bbdfe9a?w=400&q=80"
    },
    {
      "name": "Veg Raita",
      "price": "₹149",
      "category": "raita_lassi",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1601050690597-dfcb0c8bc07f?w=400&q=80"
    },
    {
      "name": "Boondi Raita",
      "price": "₹149",
      "category": "raita_lassi",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1617196039897-3b2a644d5f2d?w=400&q=80"
    },
    {
      "name": "Pineapple Raita",
      "price": "₹199",
      "category": "raita_lassi",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1589307004173-3c9528f8a5a0?w=400&q=80"
    },
    {
      "name": "Fruit Raita",
      "price": "₹199",
      "category": "raita_lassi",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1600093463592-9d3dbbca1140?w=400&q=80"
    },
    {
      "name": "Butter Milk",
      "price": "₹49",
      "category": "raita_lassi",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1625246140809-f8f1c2b991b0?w=400&q=80"
    },
    {
      "name": "Lassi (Sweet & Salted)",
      "price": "₹99",
      "category": "raita_lassi",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1666000976027-0c814a94fc5d?w=400&q=80"
    }
  ],
  "breads": [
    {
      "name": "Tandoori Roti",
      "price": "₹49",
      "category": "breads",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1617196039897-3b2a644d5f2d?w=400&q=80"
    },
    {
      "name": "Butter Roti",
      "price": "₹59",
      "category": "breads",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1631460277785-85c7d62a17ad?w=400&q=80"
    },
    {
      "name": "Plain Naan",
      "price": "₹79",
      "category": "breads",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1625246140809-f8f1c2b991b0?w=400&q=80"
    },
    {
      "name": "Butter Naan",
      "price": "₹99",
      "category": "breads",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1625246100540-62a3a1b5a4e7?w=400&q=80"
    },
    {
      "name": "Garlic Naan",
      "price": "₹129",
      "category": "breads",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1666001098229-19c12c90e5a8?w=400&q=80"
    },
    {
      "name": "Stuffed Kulcha",
      "price": "₹149",
      "category": "breads",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1683709081713-8086e2550a6f?w=400&q=80"
    },
    {
      "name": "Paneer Kulcha",
      "price": "₹179",
      "category": "breads",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1683709092708-b4374d0d5202?w=400&q=80"
    },
    {
      "name": "Onion Kulcha",
      "price": "₹149",
      "category": "breads",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1666000976027-0c814a94fc5d?w=400&q=80"
    },
    {
      "name": "Aloo Paratha",
      "price": "₹159",
      "category": "breads",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1683709081056-18237a5df6f7?w=400&q=80"
    },
    {
      "name": "Paneer Paratha",
      "price": "₹179",
      "category": "breads",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1683709084301-2e9a3f6c4f56?w=400&q=80"
    },
    {
      "name": "Lachha Paratha",
      "price": "₹99",
      "category": "breads",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1683709083010-4c215fdab9f6?w=400&q=80"
    },
    {
      "name": "Missi Roti",
      "price": "₹79",
      "category": "breads",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1683709082167-aba8709db9fc?w=400&q=80"
    },
    {
      "name": "Phulka",
      "price": "₹59",
      "category": "breads",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1617196039897-3b2a644d5f2d?w=400&q=80"
    }
  ],
  "desserts": [
    {
      "name": "Vanilla Ice Cream (2 Scoops)",
      "price": "₹99",
      "category": "desserts",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1625203564603-d3884a6f6c41?w=400&q=80"
    },
    {
      "name": "Strawberry Ice Cream (2 Scoops)",
      "price": "₹99",
      "category": "desserts",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80"
    },
    {
      "name": "American Nuts Ice Cream (2 Scoops)",
      "price": "₹149",
      "category": "desserts",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1621939514649-280f31d8fd34?w=400&q=80"
    },
    {
      "name": "Butterscotch Ice Cream (2 Scoops)",
      "price": "₹149",
      "category": "desserts",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d?w=400&q=80"
    },
    {
      "name": "Gulab Jamun (4pc.)",
      "price": "₹129",
      "category": "desserts",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1631452180519-0700122972a1?w=400&q=80"
    },
    {
      "name": "Rasgulla (4pc.)",
      "price": "₹149",
      "category": "desserts",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c3e2a6?w=400&q=80"
    },
    {
      "name": "Fruit Custard",
      "price": "₹149",
      "category": "desserts",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1602253057119-44fe34a427ff?w=400&q=80"
    },
    {
      "name": "Brownie With Ice Cream",
      "price": "₹199",
      "category": "desserts",
      "dietary": ["veg"],
      "image": "https://images.unsplash.com/photo-1613145993483-e06d6f2aebc7?w=400&q=80"
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
    if (!text) return "";
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
