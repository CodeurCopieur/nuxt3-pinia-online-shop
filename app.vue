<script setup>
  /* imports */
  import { useCartStore } from './stores/cart';

  const cartStore = useCartStore();

  onMounted(() => {
    cartStore.getProducts(); // Vous utilisez cartStore au lieu de useCartStore
  });
</script>
<template>
  <div id="app"
    :class="cartStore.getTheme === 'light' ? 'bg-white text-black' : 'bg-black text-white'">
    <NuxtLayout name="default">
      <nuxtPage />
    </NuxtLayout>
  </div>
</template>
