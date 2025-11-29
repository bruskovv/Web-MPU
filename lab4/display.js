// Глобальная переменная для хранения активных фильтров
const activeFilters = {
    soup: null,
    main: null,
    salad: null,
    drink: null,
    dessert: null
};

// Функция для отображения блюд
function displayDishes() {
    // Сортируем блюда по алфавиту
    const sortedDishes = [...dishes].sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    
    // Разделяем по категориям
    const soups = sortedDishes.filter(dish => dish.category === 'soup');
    const mains = sortedDishes.filter(dish => dish.category === 'main');
    const salads = sortedDishes.filter(dish => dish.category === 'salad');
    const drinks = sortedDishes.filter(dish => dish.category === 'drink');
    const desserts = sortedDishes.filter(dish => dish.category === 'dessert');
    
    // Отображаем каждую категорию
    renderCategory(soups, 'soups-grid', 'soup');
    renderCategory(mains, 'mains-grid', 'main');
    renderCategory(salads, 'salads-grid', 'salad');
    renderCategory(drinks, 'drinks-grid', 'drink');
    renderCategory(desserts, 'desserts-grid', 'dessert');
}

// Функция для отрисовки блюд в категории с учётом фильтра
function renderCategory(dishes, gridId, category) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    // Очищаем контейнер
    grid.innerHTML = '';
    
    // Фильтруем блюда, если активен фильтр
    let filteredDishes = dishes;
    if (activeFilters[category]) {
        filteredDishes = dishes.filter(dish => dish.kind === activeFilters[category]);
    }
    
    filteredDishes.forEach(dish => {
        const dishCard = createDishCard(dish);
        grid.appendChild(dishCard);
    });
}

// Создание карточки блюда
function createDishCard(dish) {
    const card = document.createElement('div');
    card.classList.add('menu-item');
    card.setAttribute('data-dish', dish.keyword);
    
    card.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}">
        <p class="item-price">${dish.price}₽</p>
        <p class="item-name">${dish.name}</p>
        <p class="item-weight">${dish.count}</p>
        <button type="button">Добавить</button>
    `;
    
    // Добавляем обработчик клика
    card.addEventListener('click', () => selectDish(dish.keyword));
    
    return card;
}

// Функция для обработки фильтров
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const kind = this.getAttribute('data-kind');
            
            // Если фильтр уже активен — снимаем его
            if (activeFilters[category] === kind) {
                activeFilters[category] = null;
                this.classList.remove('active');
            } else {
                // Снимаем active со всех кнопок этой категории
                const categoryButtons = document.querySelectorAll(`.filter-btn[data-category="${category}"]`);
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Устанавливаем новый фильтр
                activeFilters[category] = kind;
                this.classList.add('active');
            }
            
            // Перерисовываем блюда
            displayDishes();
        });
    });
}

// Вызываем отображение при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    displayDishes();
    setupFilters();
});
