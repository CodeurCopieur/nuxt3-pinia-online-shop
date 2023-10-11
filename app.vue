<script setup>
  /* imports */
  import { useCartStore } from './stores/cart';

  const cartStore = useCartStore();

  onMounted(() => {
    cartStore.getProducts(); // Vous utilisez cartStore au lieu de useCartStore
  });
</script>
<template>
  <div id="app">
    <NuxtLayout name="default">
      <nuxtPage />
    </NuxtLayout>
  </div>
</template>
