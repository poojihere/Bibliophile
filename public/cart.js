const cartList = document.getElementById('cart-list');

// Get cart items from query parameter
const queryParams = new URLSearchParams(window.location.search);
const cartItems = queryParams.get('items') || '';
const cartItemIds = cartItems.split(',');

// Display cart items on the cart page
cartItemIds.forEach(bookId => {
  const listItem = document.createElement('li');
  listItem.textContent = `Book ID: ${bookId}`;
  cartList.appendChild(listItem);
});
