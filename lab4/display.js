// Функция для отображения блюд
function displayDishes() {
    // Сортируем блюда по алфавиту по имени
    const sortedDishes = [...dishes].sort((a, b) => a.name.localeCompare(b, 'ru'));
    
    // Разделяем по категориям
    const soups = sortedDishes.filter(dish => dish.category === 'soup');
    const mains = sortedDishes.filter(dish => dish.category === 'main');
    const drinks = sortedDishes.filter(dish => dish.category === 'drink');
    
    // Отображаем каждую категорию
    renderCategory(soups, 'soups-grid');
    renderCategory(mains, 'mains-grid');
    renderCategory(drinks, 'drinks-grid');
}

// Функция для отрисовки блюд в категории
function renderCategory(dishes, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    // Очищаем контейнер
    grid.innerHTML = '';
    
    dishes.forEach(dish => {
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

// Вызываем отображение при загрузке страницы
document.addEventListener('DOMContentLoaded', displayDishes);
