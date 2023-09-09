<template>
    <div>
      <h1>Review Pembelian</h1>
      <ul>
        <li v-for="(cartItem, index) in cart" :key="index">
          {{ cartItem.product.name }} - Jumlah: {{ cartItem.quantity }} - Harga: {{ cartItem.product.price * cartItem.quantity }}
        </li>
      </ul>
      <p>Total Harga:Rp. {{ calculateTotalPrice() }}</p>
      <button @click="handleCheckout" class="btn btn-success">Checkout</button>
      <p v-if="checkoutMessage">{{ checkoutMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cart: Array, // Menerima prop cart dari komponen parent
    },
    data() {
      return {
        checkoutMessage: '', // Pesan hasil checkout
      };
    },
    methods: {
      calculateTotalPrice() {
        // Logika perhitungan total harga dari item di keranjang
        let total = 0;
        for (const cartItem of this.cart) {
          total += cartItem.product.price * cartItem.quantity;
        }
        return total;
      },
      handleCheckout() {
        // Logika proses checkout
        if (this.cart.length === 0) {
          this.checkoutMessage = 'Keranjang belanja kosong. Tambahkan produk ke keranjang terlebih dahulu.';
          return;
        }
  
        // Simulasikan proses checkout sukses
        setTimeout(() => {
          // Reset keranjang
          this.$emit('reset-cart');
          // Tampilkan pesan sukses
          this.checkoutMessage = 'Pembelian berhasil. Terima kasih!';
          // Tampilkan alert pembelian sukses
          window.alert('Pembelian sukses. Silahkan ke kasir! Mau beli lagi silahkan reload halaman ini');
        }, 2000); // Simulasikan waktu proses checkout
      },
    },
  };
  </script>
  
  <style scoped>
  /* Gaya CSS khusus untuk komponen ini */
  </style>
  