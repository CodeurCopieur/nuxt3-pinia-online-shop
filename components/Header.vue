<script setup>
  const route = useRoute();
  const router = useRouter();

  /* imports */
  import { useCartStore } from '../stores/cart';
  const cartStore = useCartStore();

</script>
<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
      <NuxtLink to="/" class="font-bold">CodeurCopieur</NuxtLink>
      <ul class="flex gap-4 items-center">
        <li>
          <NuxtLink to="/">
            <i class="fa-solid fa-house"></i>
          </NuxtLink>
        </li>
        <li class="relative">
          <div 
            v-if="Object.keys(cartStore.cartContent).length != 0"
            class="absolute bg-emerald-600 w-6 h-6 flex align-center justify-center items-center text-xs font-bold text-white" style="clip-path: circle(50%); top: -15px;right: 10px;">{{ Object.keys(cartStore.cartContent).length }}</div>
          <NuxtLink to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </NuxtLink>
        </li>
        <li class="cursor-pointer btn">
          <i v-if="cartStore.theme === 'light'" 
            class="fa-solid fa-sun"></i>
          <i v-else class="fa-solid fa-moon"></i>
          <span class="ml-2">Toogle theme</span>
        </li>
      </ul>
    </nav>
  </header>
</template>