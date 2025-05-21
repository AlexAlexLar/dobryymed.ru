export function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const merged = [];

  cart.forEach(item => {
    const found = merged.find(i => i.name === item.name && i.volume === item.volume);
    if (found) found.quantity += item.quantity;
    else merged.push({ ...item });
  });

  const totalQty = merged.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalQty;
}
