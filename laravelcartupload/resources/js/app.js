import './bootstrap.js';

import { createApp } from 'vue';
import ProductComponent from './components/ProductComponent.vue'; // Sesuaikan dengan lokasi komponen Anda
import CartComponent from './components/CartComponent.vue'; // Sesuaikan dengan lokasi komponen Anda
import CheckoutComponent from './components/CheckoutComponent.vue'; // Sesuaikan dengan lokasi komponen Anda

const app = createApp({});

// Mendaftarkan komponen-komponen Anda dengan metode app.component
app.component('product-component', ProductComponent);
app.component('cart-component', CartComponent);
app.component('checkout-component', CheckoutComponent);

app.mount('#app');
