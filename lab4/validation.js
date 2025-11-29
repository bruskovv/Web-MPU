// Валидация комбо при отправке формы

// Доступные комбинации блюд
const validCombos = [
    { soup: true, main: true, salad: true, drink: true },   // Комбо 1
    { soup: true, main: true, salad: false, drink: true },  // Комбо 2
    { soup: true, main: false, salad: true, drink: true },  // Комбо 3
    { soup: false, main: true, salad: true, drink: true },  // Комбо 4
    { soup: false, main: true, salad: false, drink: true }  // Комбо 5
];

// Функция проверки комбо
function validateCombo() {
    const hasSoup = selectedDishes.soup !== null;
    const hasMain = selectedDishes.main !== null;
    const hasSalad = selectedDishes.salad !== null;
    const hasDrink = selectedDishes.drink !== null;
    
    // Проверяем, соответствует ли выбор хотя бы одному валидному комбо
    const isValid = validCombos.some(combo => 
        combo.soup === hasSoup &&
        combo.main === hasMain &&
        combo.salad === hasSalad &&
        combo.drink === hasDrink
    );
    
    if (isValid) {
        return { valid: true };
    }
    
    // Определяем, какое сообщение показать
    let message = '';
    
    // Ничего не выбрано
    if (!hasSoup && !hasMain && !hasSalad && !hasDrink) {
        message = 'Ничего не выбрано. Выберите блюда для заказа';
    }
    // Выбраны все необходимые блюда, кроме напитка
    else if (!hasDrink && (hasSoup || hasMain || hasSalad)) {
        message = 'Выберите напиток';
    }
    // Выбран суп, но не выбраны главное блюдо/салат/стартер
    else if (hasSoup && !hasMain && !hasSalad) {
        message = 'Выберите главное блюдо/салат/стартер';
    }
    // Выбран салат/стартер, но не выбраны суп/главное блюдо
    else if (hasSalad && !hasSoup && !hasMain) {
        message = 'Выберите суп или главное блюдо';
    }
    // Выбран только напиток или десерт
    else if (hasDrink && !hasSoup && !hasMain && !hasSalad) {
        message = 'Выберите главное блюдо';
    }
    // Другие случаи
    else {
        message = 'Ваш выбор не соответствует ни одному комбо. Проверьте состав заказа';
    }
    
    return { valid: false, message: message };
}

// Функция показа уведомления
function showNotification(message) {
    // Создаём overlay
    const overlay = document.createElement('div');
    overlay.classList.add('notification-overlay');
    
    // Создаём уведомление
    const notification = document.createElement('div');
    notification.classList.add('notification');
    
    notification.innerHTML = `
        <h3>Ничего не выбрано. Выберите блюда для заказа</h3>
        <p>${message}</p>
        <button class="notification-btn">Окей 👌</button>
    `;
    
    overlay.appendChild(notification);
    document.body.appendChild(overlay);
    
    // Обработчик закрытия уведомления
    const closeBtn = notification.querySelector('.notification-btn');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
    
    // Закрытие по клику на overlay
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
}

// Обработчик отправки формы
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.order-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            const validation = validateCombo();
            
            if (!validation.valid) {
                e.preventDefault(); // Останавливаем отправку формы
                showNotification(validation.message);
            }
            // Если валидация прошла — форма отправляется нормально
        });
    }
});
