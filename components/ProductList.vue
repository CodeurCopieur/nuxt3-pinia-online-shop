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
          <!-- <div class="relative flex items-center justify-center rounded"
            :class="{'w-full sm:w-2/5 lg:w-3/11': !grid}">
            <div class="h-68 w-full bg-cover bg-center bg-no-repeat w-full {bg-cover bg-center}" 
            :style="`background-image:url(${product.thumbnail})`"></div>
            <div class="absolute inset-0 flex items-center justify-center bg-emerald-500 bg-opacity-85 py-28 opacity-0 transition-opacity hover:opacity-100">
              <button 
                class="mr-3 flex items-center rounded-full bg-white px-3 py-3 transition-shadow hover:shadow-lg transition-all hover:text-white hover:bg-emerald-500">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
              <NuxtLink 
                :to="{ path: `/product/${product.id}`}"  
                class="flex items-center rounded-full bg-white px-3 py-3 transition-shadow hover:shadow-lg transition-all hover:text-white hover:bg-emerald-500">
                <i class="fa-solid fa-magnifying-glass"></i>
              </NuxtLink>
            </div>
          </div>
          <div v-if="grid" 
            class="flex items-center justify-between pt-6">
            <div>
              <h3 class="text-base ">{{ product.title }}</h3>
              <div class="flex items-center">
                <div class="flex items-center">
                  <i 
                    v-for="i in 5" :key="i" 
                    class="fa-solid fa-star"
                    :class="{'text-emerald-500': true, 'opacity-50' : i > Math.floor(product.rating)}"></i>
                </div>
                <p class="ml-2 text-sm ">{{ Math.floor(product.rating) }}</p>
              </div>
            </div>
            <span class="text-xl font-bold text-primary">${{ product.price }}</span>
          </div>
          <div v-else
          class="w-full px-4 lg:px-10 sm:w-3/5 sm:py-0 lg:w-8/11">
          <h3 class="font-bold text-xl text-grey-darkest xl:text-2xl">{{ product.title }}</h3>
          <span class="pt-1 text-xl font-bold ">${{ product.price }}</span>
          <span class="block pt-4 text-base font-bold text-emerald-600" v-if="product.stock > 1">In Stock</span>
          <span v-else class="font-bold pl-4 text-red-600">Pas de stock</span>
          <p class="pt-2 text-sm text-grey-darkest xl:text-base">
            {{  product.description }}
          </p>
          <div class="flex items-center pt-3 xl:pt-5">
            <div class="flex items-center">
              <i 
                v-for="i in 5" :key="i" 
                class="fa-solid fa-star"
                :class="{'text-emerald-500': true, 'opacity-50' : i > Math.floor(product.rating)}"></i>
            </div>
            <p class="ml-2 text-sm ">
              45
            </p>
          </div>
          </div> -->
          <Product :product="product" :grid="grid" />
      </div>
    </div>
  </div>
</template>