<template>
    <div>
      <h1>Daftar Produk</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Deskripsi</th>
            <th>Stok</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.stock }}</td>
            <td>Rp.{{ product.price }}</td>
            <td>
              <button @click="addToCart(product)" class="btn btn-primary">
                Tambahkan ke Keranjang
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Tombol untuk membuka Keranjang Belanja (CartComponent) -->
      <button @click="showCart" class="btn btn-success">
        Tampilkan Keranjang
      </button>
  
      <!-- Komponen Keranjang Belanja (CartComponent) -->
      <cart-component
        v-if="isCartVisible"
        :cart="cart"
        @update-cart="updateCart"
        @remove-from-cart="removeFromCart"
      ></cart-component>
  
      <!-- Tombol untuk membuka Review Pembelian (CheckoutComponent) -->
      <button @click="showCheckout" class="btn btn-info">
        Checkout
      </button>
  
      <!-- Komponen Review Pembelian (CheckoutComponent) -->
      <checkout-component
        v-if="isCheckoutVisible"
        :cart="cart"
        @reset-cart="resetCart"
      ></checkout-component>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Sate',
            description: 'Enak dan gurih',
            stock: 10,
            price: 20000,
          },
          {
            id: 2,
            name: 'Mie Ayam',
            description: 'Mie ayam spesial',
            stock: 8,
            price: 15000,
          },
          {
            id: 3,
            name: 'Rendang',
            description: 'Daging rendang yang lezat',
            stock: 12,
            price: 25000,
          },
          // Tambahkan produk lainnya di sini
        ],
        cart: [], // Data keranjang
        isCartVisible: false, // Status tampilan Keranjang Belanja
        isCheckoutVisible: false, // Status tampilan Review Pembelian
      };
    },
    methods: {
      addToCart(product) {
        if (product.stock > 0) {
          // Kurangi stok produk
          product.stock--;
  
          // Tambahkan produk ke keranjang
          const cartItem = this.cart.find((item) => item.product.id === product.id);
  
          if (cartItem) {
            cartItem.quantity++;
          } else {
            this.cart.push({ product: product, quantity: 1 });
          }
  
          // Emit event ke komponen parent untuk memperbarui keranjang secara global
          this.$emit('update-cart', this.cart);
  
          // Tampilkan alert bahwa produk telah dimasukkan ke keranjang
          alert('Produk telah dimasukkan ke keranjang.');
        } else {
          // Tampilkan peringatan jika stok habis
          alert('Stok produk habis!');
        }
      },
      showCart() {
        this.isCartVisible = true;
        this.isCheckoutVisible = false;
      },
      showCheckout() {
        this.isCartVisible = false;
        this.isCheckoutVisible = true;
      },
      updateCart(newCart) {
        this.cart = newCart;
      },
      resetCart() {
        this.cart = [];
        this.isCartVisible = false;
        this.isCheckoutVisible = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Gaya CSS khusus untuk komponen ini */
  </style>
  