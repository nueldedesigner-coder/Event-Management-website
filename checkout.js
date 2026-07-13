// ===========================
// Checkout form submission
// ---------------------------
// Placeholder until payment gateway + backend order endpoint exist.
// Real flow: POST /orders -> redirect to payment provider or confirm ->
// on success, redirect to order-confirmation.html with order details.
// ===========================
const checkoutForm = document.getElementById('checkoutForm');

if (checkoutForm) {
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Checkout submitted — connect to POST /orders + payment gateway here.');
    window.location.href = 'order-confirmation.html';
  });
}
