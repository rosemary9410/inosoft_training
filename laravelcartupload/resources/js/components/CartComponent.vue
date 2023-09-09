<template>
    <div>
      <h2>Keranjang Belanja</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Produk</th>
            <th>Jumlah</th>
            <th>Harga Satuan</th>
            <th>Total Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cartItem, index) in cart" :key="index">
            <td>{{ cartItem.product.name }}</td>
            <td>{{ cartItem.quantity }}</td>
            <td>Rp.{{ cartItem.product.price }}</td>
            <td>Rp.{{ cartItem.product.price * cartItem.quantity }}</td>
            <td>
              <button @click="removeFromCart(index)" class="btn btn-danger">
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- ... (kode lainnya) ... -->
    </div>
  </template>
  
  <script>
  export default {
    props: ['cart'],
    methods: {
      removeFromCart(index) {
        const cartItem = this.cart[index];
        const product = cartItem.product;
  
        // Mengembalikan jumlah stok produk
        product.stock += cartItem.quantity;
  
        // Menghapus item dari keranjang
        this.cart.splice(index, 1);
  
        // Emit event ke komponen parent untuk memperbarui keranjang secara global
        this.$emit('update-cart', this.cart);
  
        // Emit event untuk mengembalikan stok produk
        this.$emit('remove-from-cart', product);
      },
      
    },
  };
  </script>
  
  <style scoped>
  /* Gaya CSS khusus untuk komponen ini */
  </style>
  