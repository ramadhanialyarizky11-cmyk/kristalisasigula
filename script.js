// Language Switching Functionality
document.getElementById('language-select').addEventListener('change', function() {
    const selectedLang = this.value;
    
    // Hide all language elements
    document.querySelectorAll('.language-id, .language-en, .language-nl').forEach(el => {
        el.classList.remove('active');
    });
    
    // Show selected language elements
    document.querySelectorAll(`.language-${selectedLang}`).forEach(el => {
        el.classList.add('active');
    });
    
    // Update navigation links based on selected language
    document.querySelectorAll('.nav-link').forEach(link => {
        const text = link.getAttribute(`data-${selectedLang}`);
        link.textContent = text;
    });
    
    // Update cart display for selected language
    updateCartDisplay();
});

// Shopping Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const productNameId = this.getAttribute('data-name-id');
        const productNameEn = this.getAttribute('data-name-en');
        const productNameNl = this.getAttribute('data-name-nl');
        const productPrice = parseInt(this.getAttribute('data-price'));
        
        // Check if product already in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: productId,
                nameId: productNameId,
                nameEn: productNameEn,
                nameNl: productNameNl,
                price: productPrice,
                quantity: 1
            });
        }
        
        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update cart display
        updateCartDisplay();
        
        // Show confirmation message
        const currentLang = document.getElementById('language-select').value;
        let message = '';
        
        if (currentLang === 'id') {
            message = `${productNameId} telah ditambahkan ke keranjang!`;
        } else if (currentLang === 'en') {
            message = `${productNameEn} has been added to cart!`;
        } else {
            message = `${productNameNl} is toegevoegd aan winkelwagen!`;
        }
        
        alert(message);
    });
});

// Update cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartElement = document.getElementById('empty-cart');
    const currentLang = document.getElementById('language-select').value;
    
    // Clear current cart items
    cartItemsContainer.innerHTML = '';
    
    // If cart is empty, show empty message
    if (cart.length === 0) {
        cartItemsContainer.appendChild(emptyCartElement);
        document.getElementById('cart-total').textContent = '0';
        document.getElementById('cart-total-en').textContent = '0';
        document.getElementById('cart-total-nl').textContent = '0';
        return;
    }
    
    // Calculate total
    let total = 0;
    
    // Add each cart item
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        
        let itemName = '';
        if (currentLang === 'id') {
            itemName = item.nameId;
        } else if (currentLang === 'en') {
            itemName = item.nameEn;
        } else {
            itemName = item.nameNl;
        }
        
        itemElement.innerHTML = `
            <div class="cart-item-info">
                <h4>${itemName}</h4>
                <p class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')} x ${item.quantity}</p>
            </div>
            <div>
                <p class="cart-item-price">Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</p>
                <button class="remove-item" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        cartItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });
    
    // Add remove item functionality
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            cart = cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        });
    });
    
    // Update totals in different currencies
    document.getElementById('cart-total').textContent = total.toLocaleString('id-ID');
    document.getElementById('cart-total-en').textContent = Math.floor(total / 14000).toLocaleString('en-US');
    document.getElementById('cart-total-nl').textContent = Math.floor(total / 16000).toLocaleString('nl-NL');
}

// Checkout button
document.getElementById('checkout-button').addEventListener('click', function() {
    if (cart.length === 0) {
        const currentLang = document.getElementById('language-select').value;
        if (currentLang === 'id') {
            alert('Keranjang Anda kosong. Tambahkan produk terlebih dahulu.');
        } else if (currentLang === 'en') {
            alert('Your cart is empty. Add products first.');
        } else {
            alert('Uw winkelwagen is leeg. Voeg eerst producten toe.');
        }
        return;
    }
    
    // Scroll to order form
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
});

// Order form submission
document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const deliveryDate = document.getElementById('delivery-date').value;
    const notes = document.getElementById('notes').value;
    
    // Validate required fields
    if (!name || !email || !phone || !address || !deliveryDate) {
        const currentLang = document.getElementById('language-select').value;
        if (currentLang === 'id') {
            alert('Harap isi semua bidang yang diperlukan.');
        } else if (currentLang === 'en') {
            alert('Please fill in all required fields.');
        } else {
            alert('Vul alstublieft alle verplichte velden in.');
        }
        return;
    }
    
    // Get current language
    const currentLang = document.getElementById('language-select').value;
    
    // Show success message
    let message = '';
    if (currentLang === 'id') {
        message = `Terima kasih ${name}! Pesanan Anda telah diterima. Kami akan menghubungi Anda di ${phone} untuk konfirmasi.`;
    } else if (currentLang === 'en') {
        message = `Thank you ${name}! Your order has been received. We will contact you at ${phone} for confirmation.`;
    } else {
        message = `Bedankt ${name}! Uw bestelling is ontvangen. We nemen contact met u op via ${phone} voor bevestiging.`;
    }
    
    alert(message);
    
    // Clear cart after order
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    
    // Reset form
    this.reset();
    
    // Set minimum date for delivery date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('delivery-date').setAttribute('min', today);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Set minimum date for delivery date to today
window.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    const deliveryDateInput = document.getElementById('delivery-date');
    
    if (deliveryDateInput) {
        deliveryDateInput.setAttribute('min', today);
        
        // Set default delivery date to tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowFormatted = tomorrow.toISOString().split('T')[0];
        deliveryDateInput.value = tomorrowFormatted;
    }
    
    // Initialize cart display
    updateCartDisplay();
});