// --- Автоматическая подгрузка компонентов ---
const components = [
    { id: 'header-placeholder', url: '/components/header.html' },
    { id: 'footer-placeholder', url: '/components/footer.html' }
];

components.forEach(component => {
    fetch(component.url)
        .then(r => r.text())
        .then(html => document.getElementById(component.id).innerHTML = html);
});

// --- Корзина - обновление бейджа ---
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const badge = document.getElementById('cart-badge');
    if (badge) badge.textContent = count;
}

// Вызываем при загрузке страницы
document.addEventListener('DOMContentLoaded', updateCartBadge);

// --- Можно добавить сюда и другие скрипты сайта ---

function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const badge = document.getElementById('cart-badge');
    if (!badge) return;
    
    badge.textContent = count;

    // Триггер анимации
    badge.classList.remove('bounce');
    void badge.offsetWidth; // Хитрый способ "перезагрузить" анимацию
    badge.classList.add('bounce');
}
