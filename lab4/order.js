// Объект для хранения выбранных блюд
const selectedDishes = {
    soup: null,
    main: null,
    drink: null
};

// Функция выбора блюда
function selectDish(keyword) {
    const dish = dishes.find(d => d.keyword === keyword);
    if (!dish) return;
    
    // Сохраняем блюдо в соответствующую категорию
    selectedDishes[dish.category] = dish;
    
    // Обновляем отображение заказа
    updateOrderDisplay();
}

// Обновление отображения заказа
function updateOrderDisplay() {
    const orderSection = document.getElementById('order-summary');
    if (!orderSection) return;
    
    // Проверяем, выбрано ли хоть что-то
    const hasSelection = Object.values(selectedDishes).some(dish => dish !== null);
    
    if (!hasSelection) {
        orderSection.innerHTML = '<p>Ничего не выбрано</p>';
        return;
    }
    
    // Формируем HTML заказа
    let orderHTML = '<h3>Ваш заказ</h3>';
    
    // Суп
    orderHTML += '<div class="order-category">';
    orderHTML += '<h4>Суп</h4>';
    if (selectedDishes.soup) {
        orderHTML += `<p>${selectedDishes.soup.name} ${selectedDishes.soup.price}₽</p>`;
    } else {
        orderHTML += '<p>Блюдо не выбрано</p>';
    }
    orderHTML += '</div>';
    
    // Главное блюдо
    orderHTML += '<div class="order-category">';
    orderHTML += '<h4>Главное блюдо</h4>';
    if (selectedDishes.main) {
        orderHTML += `<p>${selectedDishes.main.name} ${selectedDishes.main.price}₽</p>`;
    } else {
        orderHTML += '<p>Блюдо не выбрано</p>';
    }
    orderHTML += '</div>';
    
    // Напиток
    orderHTML += '<div class="order-category">';
    orderHTML += '<h4>Напиток</h4>';
    if (selectedDishes.drink) {
        orderHTML += `<p>${selectedDishes.drink.name} ${selectedDishes.drink.price}₽</p>`;
    } else {
        orderHTML += '<p>Напиток не выбран</p>';
    }
    orderHTML += '</div>';
    
    // Считаем итоговую стоимость
    const totalPrice = calculateTotal();
    if (totalPrice > 0) {
        orderHTML += `<div class="order-total"><h4>Стоимость заказа</h4><p>${totalPrice}₽</p></div>`;
    }
    
    orderSection.innerHTML = orderHTML;
}

// Подсчёт итоговой стоимости
function calculateTotal() {
    let total = 0;
    if (selectedDishes.soup) total += selectedDishes.soup.price;
    if (selectedDishes.main) total += selectedDishes.main.price;
    if (selectedDishes.drink) total += selectedDishes.drink.price;
    return total;
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    updateOrderDisplay();
});
