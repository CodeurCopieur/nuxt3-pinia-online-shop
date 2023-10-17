<script setup>
  /* imports */
  import { storeToRefs } from 'pinia'
  import { useCartStore } from '../stores/cart';

  const cartStore = useCartStore();

  const { loading, products } = storeToRefs(cartStore);

  const grid = ref(true);

</script>

<template>
  <div class="my-5">
    <div class="flex flex-col justify-between py-10 sm:flex-row">
      <div class="flex items-center py-5">
        <i class="text-emerald-500 fa-solid fa-filter"></i>
        <p class="block px-2 leading-none md:text-lg">Filter</p>
        <button class="btn mr-2" 
          @click="grid = !grid" 
          :class="{'bg-emerald-500 text-white': !grid, 'cursor-pointer': grid}">
          <i class="fa-solid fa-list"></i>
        </button>
        <button class="btn" 
          @click="grid = !grid" 
          :class="{'bg-emerald-500 text-white': grid, 'cursor-pointer': !grid}">
          <i class="fa-solid fa-grip"></i>
        </button>
      </div>
    </div>
    <div class="gap-4"
      :class="{'grid md:grid-cols-3 lg:grid-cols-4': grid}">
      <div v-for="product in products" :key="product.id"
        class="relative w-full flex"
        :class="{'flex-row items-center border border-grey-dark transition-shadow hover:shadow-lg': !grid, 'flex-col': grid, 'mb-4': product !== products.length-1 && !grid}">
          <Product :product="product" :grid="grid" />
      </div>
    </div>
  </div>
</template>