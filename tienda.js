const cartItems = document.getElementById('cart-items');
const quantityInputs = cartItems.querySelectorAll('input[type="number"]');
const totalPrice = document.getElementById('total-price');

// Función para calcular el precio total
function calculateTotal() {
  let total = 0;
  cartItems.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
    const price = parseFloat(checkbox.getAttribute('data-price'));
    const quantity = parseInt(checkbox.parentNode.querySelector('input[type="number"]').value);
    total += price * quantity;
  });
  totalPrice.textContent = '$' + total.toFixed(2);
}

// Agregar event listeners a los inputs de cantidad
quantityInputs.forEach((input) => {
  input.addEventListener('change', calculateTotal);
});

// Agregar event listener a los checkboxes
cartItems.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', calculateTotal);
});