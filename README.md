<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cake Paradise - Toko Kue Multibahasa</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Header & Navigation -->
    <header>
        <div class="container header-container">
            <div class="logo">
                <i class="fas fa-birthday-cake"></i>
                <span class="language-id active">Rasa Bahagia</span>
                <span class="language-en">feeling of happiness</span>
                <span class="language-nl">gevoel van geluk</span>
            </div>
            <nav>
                <ul>
                    <li><a href="#home" class="nav-link" data-id="beranda" data-en="home" data-nl="home">Beranda</a></li>
                    <li><a href="#products" class="nav-link" data-id="produk" data-en="products" data-nl="producten">Produk</a></li>
                    <li><a href="#cart" class="nav-link" data-id="keranjang" data-en="cart" data-nl="winkelwagen">Keranjang</a></li>
                    <li><a href="#reviews" class="nav-link" data-id="ulasan" data-en="reviews" data-nl="beoordelingen">Ulasan</a></li>
                    <li><a href="#order" class="nav-link" data-id="pesan" data-en="order" data-nl="bestellen">Pesan</a></li>
                </ul>
            </nav>
            <div class="language-selector">
                <select id="language-select">
                    <option value="id">🇮🇩 Indonesia</option>
                    <option value="en">🇬🇧 English</option>
                    <option value="nl">🇳🇱 Nederlands</option>
                </select>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <h1 class="language-id active">Kue Lezat untuk Setiap Momen</h1>
            <h1 class="language-en">Delicious Cakes for Every Occasion</h1>
            <h1 class="language-nl">Heerlijke Taarten voor Elke Gelegenheid</h1>
            
            <p class="language-id active">Temukan berbagai macam kue lezat dengan desain kreatif dan rasa yang tak terlupakan. Pesan sekarang dan nikmati kelezatan kami!</p>
            <p class="language-en">Discover a variety of delicious cakes with creative designs and unforgettable flavors. Order now and enjoy our delicacies!</p>
            <p class="language-nl">Ontdek een verscheidenheid aan heerlijke taarten met creatieve ontwerpen en onvergetelijke smaken. Bestel nu en geniet van onze lekkernijen!</p>
            
            <a href="#products" class="cta-button nav-link" data-id="lihat produk" data-en="view products" data-nl="bekijk producten">Lihat Produk</a>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="products">
        <div class="container">
            <h2 class="section-title language-id active">Produk Kami</h2>
            <h2 class="section-title language-en">Our Products</h2>
            <h2 class="section-title language-nl">Onze Producten</h2>
            
            <div class="products-grid">
                <!-- Product 1 -->
                <div class="product-card">
                    <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Strawberry Cake" class="product-image">
                    <div class="product-info">
                        <h3 class="product-name language-id active">Kue Strawberry</h3>
                        <h3 class="product-name language-en">Strawberry Cake</h3>
                        <h3 class="product-name language-nl">Aardbeien Taart</h3>
                        <p class="product-price">Rp 30.000</p>
                        <button class="add-to-cart" data-id="1" data-name-id="Kue Strawberry" data-name-en="Strawberry Cake" data-name-nl="Aardbeien Taart" data-price="30000">
                            <span class="language-id active">Tambah ke Keranjang</span>
                            <span class="language-en">Add to Cart</span>
                            <span class="language-nl">Toevoegen aan Winkelwagen</span>
                        </button>
                    </div>
                </div>
                
                <!-- Product 2 -->
                <div class="product-card">
                    <img src="https://cdn.idntimes.com/content-images/post/20221213/besteverdeathbychocolatecakerecipelowcarbketohorizontal-b5ad3f06af79396ef60d48bd259c32a4.jpg" alt="Chocolate Cake" class="product-image">
                    <div class="product-info">
                        <h3 class="product-name language-id active">Kue Cokelat</h3>
                        <h3 class="product-name language-en">Chocolate Cake</h3>
                        <h3 class="product-name language-nl">Chocolade Taart</h3>
                        <p class="product-price">Rp 150.000</p>
                        <button class="add-to-cart" data-id="2" data-name-id="Kue Cokelat" data-name-en="Chocolate Cake" data-name-nl="Chocolade Taart" data-price="150000">
                            <span class="language-id active">Tambah ke Keranjang</span>
                            <span class="language-en">Add to Cart</span>
                            <span class="language-nl">Toevoegen aan Winkelwagen</span>
                        </button>
                    </div>
                </div>
                
                <!-- Product 3 -->
                <div class="product-card">
                    <img src="https://food-images.files.bbci.co.uk/food/recipes/rainbow_cake_20402_16x9.jpg" alt="Rainbow Cake" class="product-image">
                    <div class="product-info">
                        <h3 class="product-name language-id active">Kue Pelangi</h3>
                        <h3 class="product-name language-en">Rainbow Cake</h3>
                        <h3 class="product-name language-nl">Regenboog Taart</h3>
                        <p class="product-price">Rp 180.000</p>
                        <button class="add-to-cart" data-id="3" data-name-id="Kue Pelangi" data-name-en="Rainbow Cake" data-name-nl="Regenboog Taart" data-price="180000">
                            <span class="language-id active">Tambah ke Keranjang</span>
                            <span class="language-en">Add to Cart</span>
                            <span class="language-nl">Toevoegen aan Winkelwagen</span>
                        </button>
                    </div>
                </div>
                
                <!-- Product 4 -->
                <div class="product-card">
                    <img src="https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Vanilla Cake" class="product-image">
                    <div class="product-info">
                        <h3 class="product-name language-id active">Kue Vanilla</h3>
                        <h3 class="product-name language-en">Vanilla Cake</h3>
                        <h3 class="product-name language-nl">Vanille Taart</h3>
                        <p class="product-price">Rp 45.000</p>
                        <button class="add-to-cart" data-id="4" data-name-id="Kue Vanilla" data-name-en="Vanilla Cake" data-name-nl="Vanille Taart" data-price="45000">
                            <span class="language-id active">Tambah ke Keranjang</span>
                            <span class="language-en">Add to Cart</span>
                            <span class="language-nl">Toevoegen aan Winkelwagen</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Cart Section -->
    <section id="cart" class="cart">
        <div class="container">
            <h2 class="section-title language-id active">Keranjang Belanja</h2>
            <h2 class="section-title language-en">Shopping Cart</h2>
            <h2 class="section-title language-nl">Winkelwagen</h2>
            
            <div class="cart-container">
                <div class="cart-items" id="cart-items">
                    <!-- Cart items will be dynamically added here -->
                    <div class="empty-cart" id="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <h3 class="language-id active">Keranjang Anda Kosong</h3>
                        <h3 class="language-en">Your Cart is Empty</h3>
                        <h3 class="language-nl">Uw Winkelwagen is Leeg</h3>
                        <p class="language-id active">Tambahkan beberapa kue lezat ke keranjang Anda!</p>
                        <p class="language-en">Add some delicious cakes to your cart!</p>
                        <p class="language-nl">Voeg enkele heerlijke taarten toe aan uw winkelwagen!</p>
                    </div>
                </div>
                
                <div class="cart-total language-id active">Total: Rp <span id="cart-total">0</span></div>
                <div class="cart-total language-en">Total: $ <span id="cart-total-en">0</span></div>
                <div class="cart-total language-nl">Totaal: € <span id="cart-total-nl">0</span></div>
                
                <button class="checkout-button" id="checkout-button">
                    <span class="language-id active">Lanjutkan ke Pembayaran</span>
                    <span class="language-en">Proceed to Checkout</span>
                    <span class="language-nl">Doorgaan naar Afrekenen</span>
                </button>
            </div>
        </div>
    </section>

    <!-- Reviews Section -->
    <section id="reviews" class="reviews">
        <div class="container">
            <h2 class="section-title language-id active">Ulasan Pembeli</h2>
            <h2 class="section-title language-en">Customer Reviews</h2>
            <h2 class="section-title language-nl">Klantbeoordelingen</h2>
            
            <div class="reviews-grid">
                <!-- Review 1 -->
                <div class="review-card">
                    <div class="reviewer">
                        <div class="reviewer-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <div>
                            <div class="reviewer-name">Sari Wijaya</div>
                            <div class="review-stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="language-id active">Kuenya lezat sekali! Pelayanan juga cepat. Anak saya sangat suka dengan kue strawberry untuk ulang tahunnya.</p>
                    <p class="language-en">The cake was delicious! The service was also fast. My child really liked the strawberry cake for his birthday.</p>
                    <p class="language-nl">De taart was heerlijk! De service was ook snel. Mijn kind hield echt van de aardbeientaart voor zijn verjaardag.</p>
                </div>
                
                <!-- Review 2 -->
                <div class="review-card">
                    <div class="reviewer">
                        <div class="reviewer-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <div>
                            <div class="reviewer-name">David Johnson</div>
                            <div class="review-stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                    <p class="language-id active">Kue cokelatnya sangat kaya rasa. Teksturnya lembut dan tidak terlalu manis. Akan pesan lagi!</p>
                    <p class="language-en">The chocolate cake was very rich in flavor. The texture was soft and not too sweet. Will order again!</p>
                    <p class="language-nl">De chocoladetaart was zeer rijk van smaak. De textuur was zacht en niet te zoet. Zal opnieuw bestellen!</p>
                </div>
                
                <!-- Review 3 -->
                <div class="review-card">
                    <div class="reviewer">
                        <div class="reviewer-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <div>
                            <div class="reviewer-name">Emma van Dijk</div>
                            <div class="review-stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="language-id active">Kue pelanginya sangat indah dan rasanya luar biasa. Semua tamu di pesta pernikahan saya memujinya.</p>
                    <p class="language-en">The rainbow cake was very beautiful and tasted amazing. All the guests at my wedding praised it.</p>
                    <p class="language-nl">De regenboogtaart was erg mooi en smaakte geweldig. Alle gasten op mijn bruiloft prezen het.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Order Form Section -->
    <section id="order" class="order-form-section">
        <div class="container">
            <h2 class="section-title language-id active">Formulir Pemesanan</h2>
            <h2 class="section-title language-en">Order Form</h2>
            <h2 class="section-title language-nl">Bestelformulier</h2>
            
            <form class="order-form" id="order-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="name" class="language-id active">Nama Lengkap</label>
                        <label for="name" class="language-en">Full Name</label>
                        <label for="name" class="language-nl">Volledige Naam</label>
                        <input type="text" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email" class="language-id active">Email</label>
                        <label for="email" class="language-en">Email</label>
                        <label for="email" class="language-nl">E-mail</label>
                        <input type="email" id="email" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="phone" class="language-id active">Nomor Telepon</label>
                        <label for="phone" class="language-en">Phone Number</label>
                        <label for="phone" class="language-nl">Telefoonnummer</label>
                        <input type="tel" id="phone" required>
                    </div>
                    <div class="form-group">
                        <label for="delivery-date" class="language-id active">Tanggal Pengiriman</label>
                        <label for="delivery-date" class="language-en">Delivery Date</label>
                        <label for="delivery-date" class="language-nl">Bezorgdatum</label>
                        <input type="date" id="delivery-date" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="address" class="language-id active">Alamat Lengkap</label>
                    <label for="address" class="language-en">Full Address</label>
                    <label for="address" class="language-nl">Volledig Adres</label>
                    <textarea id="address" rows="3" required></textarea>
                </div>
                
                <div class="form-group">
                    <label for="notes" class="language-id active">Catatan Tambahan</label>
                    <label for="notes" class="language-en">Additional Notes</label>
                    <label for="notes" class="language-nl">Aanvullende Opmerkingen</label>
                    <textarea id="notes" rows="3" placeholder="Contoh: Tambahkan pesan ucapan di kue"></textarea>
                </div>
                
                <button type="submit" class="submit-button">
                    <span class="language-id active">Kirim Pesanan</span>
                    <span class="language-en">Submit Order</span>
                    <span class="language-nl">Bestelling Verzenden</span>
                </button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3 class="language-id active">Cake Paradise</h3>
                    <h3 class="language-en">Cake Paradise</h3>
                    <h3 class="language-nl">Taart Paradijs</h3>
                    <p class="language-id active">Menyediakan kue lezat untuk setiap momen spesial Anda sejak 2010.</p>
                    <p class="language-en">Providing delicious cakes for your every special moment since 2010.</p>
                    <p class="language-nl">Sinds 2010 heerlijke taarten voor al uw speciale momenten.</p>
                </div>
                
                <div class="footer-column">
                    <h3 class="language-id active">Kontak Kami</h3>
                    <h3 class="language-en">Contact Us</h3>
                    <h3 class="language-nl">Contacteer Ons</h3>
                    <ul>
                        <li><i class="fas fa-map-marker-alt"></i> Jl. Kue Lezat No. 123, Jakarta</li>
                        <li><i class="fas fa-phone"></i> +62 21 1234 5678</li>
                        <li><i class="fas fa-envelope"></i> info@cakeparadise.com</li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h3 class="language-id active">Tautan Cepat</h3>
                    <h3 class="language-en">Quick Links</h3>
                    <h3 class="language-nl">Snelle Links</h3>
                    <ul>
                        <li><a href="#home" class="nav-link" data-id="beranda" data-en="home" data-nl="home">Beranda</a></li>
                        <li><a href="#products" class="nav-link" data-id="produk" data-en="products" data-nl="producten">Produk</a></li>
                        <li><a href="#cart" class="nav-link" data-id="keranjang" data-en="cart" data-nl="winkelwagen">Keranjang</a></li>
                        <li><a href="#order" class="nav-link" data-id="pesan" data-en="order" data-nl="bestellen">Pesan</a></li>
                    </ul>
                </div>
            </div>s
            
            <div class="copyright">
                <p class="language-id active">&copy; 2023 Cake Paradise. Semua hak dilindungi.</p>
                <p class="language-en">&copy; 2023 Cake Paradise. All rights reserved.</p>
                <p class="language-nl">&copy; 2023 Taart Paradijs. Alle rechten voorbehouden.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

:root {
    --primary-pink: #ff7eb9;
    --light-pink: #ffc8dd;
    --secondary-blue: #7ec8ff;
    --dark-blue: #2a6fa5;
    --white: #ffffff;
    --gray: #f5f5f5;
    --dark-gray: #333333;
    --shadow: rgba(0, 0, 0, 0.1);
}

body {
    background-color: var(--gray);
    color: var(--dark-gray);
    line-height: 1.6;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header & Navigation */
header {
    background: linear-gradient(135deg, var(--primary-pink) 0%, var(--secondary-blue) 100%);
    color: var(--white);
    padding: 20px 0;
    box-shadow: 0 4px 12px var(--shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 700;
}

.logo i {
    margin-right: 10px;
    font-size: 2rem;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 30px;
}

nav ul li a {
    color: var(--white);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    padding: 5px 10px;
    border-radius: 5px;
}

nav ul li a:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.language-selector {
    display: flex;
    align-items: center;
}

.language-selector select {
    padding: 8px 15px;
    border-radius: 5px;
    border: none;
    background-color: var(--white);
    color: var(--dark-blue);
    font-weight: 600;
    cursor: pointer;
}

/* Hero Section */
.hero {
    background: linear-gradient(rgba(255, 126, 185, 0.9), rgba(126, 200, 255, 0.9)), url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');
    background-size: cover;
    background-position: center;
    color: var(--white);
    padding: 80px 0;
    text-align: center;
    border-radius: 0 0 30px 30px;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 30px;
}

.cta-button {
    display: inline-block;
    background-color: var(--white);
    color: var(--primary-pink);
    padding: 15px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

/* Section Styles */
section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    margin-bottom: 50px;
    color: var(--dark-blue);
    font-size: 2.2rem;
    position: relative;
}

.section-title:after {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, var(--primary-pink), var(--secondary-blue));
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
}

/* Products Section */
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 30px;
}

.product-card {
    background-color: var(--white);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px var(--shadow);
    transition: transform 0.3s ease;
}

.product-card:hover {
    transform: translateY(-10px);
}

.product-image {
    height: 200px;
    width: 100%;
    object-fit: cover;
}

.product-info {
    padding: 20px;
}

.product-name {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: var(--dark-blue);
}

.product-price {
    color: var(--primary-pink);
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 15px;
}

.add-to-cart {
    background-color: var(--primary-pink);
    color: var(--white);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    width: 100%;
    transition: background-color 0.3s ease;
}

.add-to-cart:hover {
    background-color: var(--dark-blue);
}

/* Cart Section */
.cart-container {
    background-color: var(--white);
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 5px 15px var(--shadow);
}

.cart-items {
    margin-bottom: 30px;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
}

.cart-item:last-child {
    border-bottom: none;
}

.cart-item-info h4 {
    color: var(--dark-blue);
    margin-bottom: 5px;
}

.cart-item-price {
    color: var(--primary-pink);
    font-weight: 600;
}

.remove-item {
    background-color: transparent;
    color: #ff6b6b;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    transition: color 0.3s ease;
    padding: 5px 10px;
    border-radius: 5px;
}

.remove-item:hover {
    background-color: rgba(255, 107, 107, 0.1);
}

.cart-total {
    text-align: right;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--dark-blue);
    margin-bottom: 20px;
}

.checkout-button {
    background-color: var(--secondary-blue);
    color: var(--white);
    border: none;
    padding: 15px 30px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1rem;
    width: 100%;
    transition: background-color 0.3s ease;
}

.checkout-button:hover {
    background-color: var(--dark-blue);
}

/* Reviews Section */
.reviews-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 30px;
}

.review-card {
    background-color: var(--white);
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 5px 15px var(--shadow);
}

.reviewer {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.reviewer-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--light-pink);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    font-size: 1.5rem;
    color: var(--primary-pink);
}

.reviewer-name {
    font-weight: 700;
    color: var(--dark-blue);
}

.review-stars {
    color: #ffc107;
    margin-bottom: 10px;
}

/* Order Form */
.order-form {
    background-color: var(--white);
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 5px 15px var(--shadow);
    max-width: 800px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--dark-blue);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--primary-pink);
    outline: none;
}

.form-row {
    display: flex;
    gap: 20px;
}

.form-row .form-group {
    flex: 1;
}

.submit-button {
    background-color: var(--primary-pink);
    color: var(--white);
    border: none;
    padding: 15px 30px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1rem;
    width: 100%;
    transition: background-color 0.3s ease;
}

.submit-button:hover {
    background-color: var(--dark-blue);
}

/* Footer */
footer {
    background-color: var(--dark-blue);
    color: var(--white);
    padding: 40px 0 20px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

.footer-column {
    flex: 1;
    min-width: 250px;
    margin-bottom: 20px;
    padding-right: 20px;
}

.footer-column h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: var(--light-pink);
}

.footer-column ul {
    list-style: none;
}

.footer-column ul li {
    margin-bottom: 10px;
}

.footer-column ul li a {
    color: var(--white);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-column ul li a:hover {
    color: var(--light-pink);
}

.copyright {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
    .header-container {
        flex-direction: column;
    }

    nav ul {
        margin-top: 20px;
        flex-wrap: wrap;
        justify-content: center;
    }

    nav ul li {
        margin: 5px 10px;
    }

    .hero h1 {
        font-size: 2.2rem;
    }

    .form-row {
        flex-direction: column;
        gap: 0;
    }

    .footer-content {
        flex-direction: column;
    }
}

/* Language-specific styling */
.language-id, .language-en, .language-nl {
    display: none;
}

.language-id.active, .language-en.active, .language-nl.active {
    display: block;
}

.empty-cart {
    text-align: center;
    padding: 40px;
    color: var(--dark-blue);
}

.empty-cart i {
    font-size: 3rem;
    margin-bottom: 20px;
    color: var(--light-pink);
}// Language Switching Functionality
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
