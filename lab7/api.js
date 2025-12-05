// URL API для GitHub Pages
const DISHES_API_URL = 'https://edu.std-900.ist.mospolytech.ru/labs/api/dishes';

/**
 * Загружает данные о блюдах с сервера и инициализирует интерфейс.
 * Данные приходят в формате:
 * {
 *   "category": "soup" | "main-course" | "salad" | "drink" | "dessert",
 *   "count": "350 г",
 *   "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/...",
 *   "keyword": "gaspacho",
 *   "kind": "...",
 *   "name": "Гаспачо",
 *   "price": 195,
 *   ...
 * }
 */
async function loadDishes() {
    try {
        const response = await fetch(DISHES_API_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error('Некорректный формат данных: ожидается массив');
        }

        dishes = data.map(dish => {
            return {
                ...dish,
                category: dish.category === 'main-course' ? 'main' : dish.category
            };
        });

        if (typeof displayDishes === 'function') {
            displayDishes();
        }

        if (typeof updateOrderDisplay === 'function') {
            updateOrderDisplay();
        }
    } catch (error) {
        console.error('Не удалось загрузить блюда:', error);

        const grids = document.querySelectorAll('.menu-grid');
        grids.forEach(grid => {
            grid.innerHTML = '<p>Ошибка загрузки меню. Попробуйте обновить страницу позже.</p>';
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadDishes();
});
