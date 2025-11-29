const dishes = [
    // ========== СУПЫ (6 блюд: 2 рыбных, 2 мясных, 2 вегетарианских) ==========
    {
        keyword: 'gaspacho',
        name: 'Гаспачо',
        price: 195,
        category: 'soup',
        count: '350 г',
        image: 'gaspacho.jpg',
        kind: 'veg'
    },
    {
        keyword: 'borshec',
        name: 'Борщец',
        price: 185,
        category: 'soup',
        count: '330 г',
        image: 'borsch.jpg',
        kind: 'meat'
    },
    {
        keyword: 'norwegian_soup',
        name: 'Норвежский суп',
        price: 270,
        category: 'soup',
        count: '330 г',
        image: 'norwegian_soup.jpg',
        kind: 'fish'
    },
    {
        keyword: 'mushroom_soup',
        name: 'Грибной суп-пюре',
        price: 185,
        category: 'soup',
        count: '330 г',
        image: 'mushroom_soup.jpg',
        kind: 'veg'
    },
    {
        keyword: 'ramen',
        name: 'Рамен',
        price: 375,
        category: 'soup',
        count: '425 г',
        image: 'ramen.jpg',
        kind: 'meat'
    },
    {
        keyword: 'tom_yum',
        name: 'Том ям с креветками',
        price: 650,
        category: 'soup',
        count: '500 г',
        image: 'tom_yum.jpg',
        kind: 'fish'
    },
    
    // ========== ГЛАВНЫЕ БЛЮДА (6 блюд: 2 рыбных, 2 мясных, 2 вегетарианских) ==========
    {
        keyword: 'potato_mushrooms',
        name: 'Жареная картошка с грибами',
        price: 150,
        category: 'main',
        count: '250 г',
        image: 'potato_mushrooms.jpg',
        kind: 'veg'
    },
    {
        keyword: 'pasta_shrimps',
        name: 'Паста с креветками',
        price: 385,
        category: 'main',
        count: '310 г',
        image: 'pasta.jpg',
        kind: 'fish'
    },
    {
        keyword: 'macaroni_sausages',
        name: 'Макароны с сосисками',
        price: 225,
        category: 'main',
        count: '280 г',
        image: 'macaroni.jpg',
        kind: 'meat'
    },
    {
        keyword: 'fish_rice',
        name: 'Рыбная котлета с рисом и спаржей',
        price: 320,
        category: 'main',
        count: '270 г',
        image: 'fish_rice.jpg',
        kind: 'fish'
    },
    {
        keyword: 'lasagna',
        name: 'Лазанья',
        price: 385,
        category: 'main',
        count: '310 г',
        image: 'lasagna.jpg',
        kind: 'meat'
    },
    {
        keyword: 'pizza',
        name: 'Пицца Маргарита',
        price: 450,
        category: 'main',
        count: '470 г',
        image: 'pizza.jpg',
        kind: 'veg'
    },
    
    // ========== САЛАТЫ/СТАРТЕРЫ (6 блюд: 1 рыбный, 1 мясной, 4 вегетарианских) ==========
    {
        keyword: 'korean_salad',
        name: 'Корейский салат с овощами и яйцом',
        price: 330,
        category: 'salad',
        count: '250 г',
        image: 'korean_salad.jpg',
        kind: 'veg'
    },
    {
        keyword: 'caesar',
        name: 'Цезарь с цыпленком',
        price: 370,
        category: 'salad',
        count: '220 г',
        image: 'caesar.jpg',
        kind: 'meat'
    },
    {
        keyword: 'caprese',
        name: 'Капрезе с моцареллой',
        price: 350,
        category: 'salad',
        count: '235 г',
        image: 'caprese.jpg',
        kind: 'veg'
    },
    {
        keyword: 'tuna_salad',
        name: 'Салат с тунцом',
        price: 480,
        category: 'salad',
        count: '250 г',
        image: 'tuna_salad.jpg',
        kind: 'fish'
    },
    {
        keyword: 'french_fries_caesar',
        name: 'Картофель фри с соусом Цезарь',
        price: 280,
        category: 'salad',
        count: '235 г',
        image: 'french_fries_caesar.jpg',
        kind: 'veg'
    },
    {
        keyword: 'french_fries_ketchup',
        name: 'Картофель фри с кетчупом',
        price: 260,
        category: 'salad',
        count: '235 г',
        image: 'french_fries_ketchup.jpg',
        kind: 'veg'
    },
    
    // ========== НАПИТКИ (6 блюд: 3 холодных, 3 горячих) ==========
    {
        keyword: 'orange_juice',
        name: 'Апельсиновый фреш',
        price: 120,
        category: 'drink',
        count: '300 мл',
        image: 'orange_juice.jpg',
        kind: 'cold'
    },
    {
        keyword: 'apple_juice',
        name: 'Яблочный фреш',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'apple_juice.jpg',
        kind: 'cold'
    },
    {
        keyword: 'carrot_juice',
        name: 'Морковный фреш',
        price: 110,
        category: 'drink',
        count: '300 мл',
        image: 'carrot_juice.jpg',
        kind: 'cold'
    },
    {
        keyword: 'cappuccino',
        name: 'Капучино',
        price: 180,
        category: 'drink',
        count: '300 мл',
        image: 'cappuccino.jpg',
        kind: 'hot'
    },
    {
        keyword: 'green_tea',
        name: 'Зеленый чай',
        price: 100,
        category: 'drink',
        count: '300 мл',
        image: 'green_tea.jpg',
        kind: 'hot'
    },
    {
        keyword: 'black_tea',
        name: 'Черный чай',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'black_tea.jpg',
        kind: 'hot'
    },
    
    // ========== ДЕСЕРТЫ (6 блюд: 3 маленькие, 2 средние, 1 большая) ==========
    {
        keyword: 'baklava',
        name: 'Пахлава',
        price: 220,
        category: 'dessert',
        count: '300 гр',
        image: 'baklava.jpg',
        kind: 'small'
    },
    {
        keyword: 'cheesecake',
        name: 'Чизкейк',
        price: 240,
        category: 'dessert',
        count: '125 гр',
        image: 'cheesecake.jpg',
        kind: 'small'
    },
    {
        keyword: 'chocolate_cheesecake',
        name: 'Шоколадный чизкейк',
        price: 260,
        category: 'dessert',
        count: '125 гр',
        image: 'chocolate_cheesecake.jpg',
        kind: 'small'
    },
    {
        keyword: 'chocolate_cake',
        name: 'Шоколадный торт',
        price: 270,
        category: 'dessert',
        count: '140 гр',
        image: 'chocolate_cake.jpg',
        kind: 'medium'
    },
    {
        keyword: 'donuts_3',
        name: 'Пончики (3 штуки)',
        price: 410,
        category: 'dessert',
        count: '350 гр',
        image: 'donuts_3.jpg',
        kind: 'medium'
    },
    {
        keyword: 'donuts_6',
        name: 'Пончики (6 штук)',
        price: 650,
        category: 'dessert',
        count: '700 гр',
        image: 'donuts_6.jpg',
        kind: 'large'
    }
];
