<script setup>
  defineProps({
    product: {
      type: Object,
    },
    grid: {
      type: Boolean,
    },
  });

  /* imports */
  import { useCartStore } from '../stores/cart';

  const cartStore = useCartStore();


</script>

<template>
  <div
    class="relative flex items-center justify-center rounded"
    :class="{ 'w-full sm:w-2/5 lg:w-3/11': !grid }">
    <div
      class="h-68 w-full bg-cover bg-center bg-no-repeat w-full {bg-cover bg-center}"
      :style="`background-image:url(${product.thumbnail})`"></div>
    <div
      class="absolute inset-0 flex items-center justify-center bg-emerald-500 bg-opacity-85 py-28 opacity-0 transition-opacity hover:opacity-100">
      <button
      @click="cartStore.add(product.id)"
      :class="cartStore.getTheme === 'light' ? 'bg-white text-black' : 'bg-black text-white'"
        class="mr-3 flex items-center rounded-full  px-3 py-3 transition-shadow hover:shadow-lg transition-all hover:text-white hover:bg-emerald-500">
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
      <NuxtLink
        :to="{ path: `/product/${product.id}` }"
        :class="cartStore.getTheme === 'light' ? 'bg-white text-black' : 'bg-black text-white'"
        class="flex items-center rounded-full px-3 py-3 transition-shadow hover:shadow-lg transition-all hover:text-white hover:bg-emerald-500">
        <i class="fa-solid fa-magnifying-glass"></i>
      </NuxtLink>
    </div>
  </div>
  <div v-if="grid" class="flex items-center justify-between pt-6">
    <div>
      <h3 class="text-base">{{ product.title }}</h3>
      <div class="flex items-center">
        <div class="flex items-center">
          <i
            v-for="i in 5"
            :key="i"
            class="fa-solid fa-star"
            :class="{
              'text-yellow-500': true,
              'opacity-50': i > Math.floor(product.rating),
            }"
          ></i>
        </div>
        <p class="ml-2 text-sm">{{ Math.floor(product.rating) }}</p>
      </div>
    </div>
    <span class="text-xl font-bold text-primary">${{ product.price }}</span>
  </div>
  <div v-else class="w-full px-4 lg:px-10 sm:w-3/5 sm:py-0 lg:w-8/11">
    <h3 class="font-bold text-xl text-grey-darkest xl:text-2xl">
      {{ product.title }}
    </h3>
    <span class="pt-1 text-xl font-bold">${{ product.price }}</span>
    <span
      class="block pt-4 text-base font-bold text-emerald-600"
      v-if="product.stock > 1"
      >In Stock</span
    >
    <span v-else class="font-bold pl-4 text-red-600">Pas de stock</span>
    <p class="pt-2 text-sm text-grey-darkest xl:text-base">
      {{ product.description }}
    </p>
    <div class="flex items-center pt-3 xl:pt-5">
      <div class="flex items-center">
        <i
          v-for="i in 5"
          :key="i"
          class="fa-solid fa-star"
          :class="{
            'text-yellow-500': true,
            'opacity-50': i > Math.floor(product.rating),
          }"
        ></i>
      </div>
      <p class="ml-2 text-sm">45</p>
    </div>
  </div>
</template>