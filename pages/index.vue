<script setup>
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
      <div v-for="n in 12" :key="n"
        class="relative w-full flex"
        :class="{'flex-row items-center border border-grey-dark transition-shadow hover:shadow-lg': !grid, 'flex-col': grid, 'mb-4': n !== 12 && !grid}">
          <div class="relative flex items-center justify-center rounded"
            :class="{'w-full sm:w-2/5 lg:w-3/11': !grid}">
            <div class="h-68 w-full bg-cover bg-center bg-no-repeat" style="background-image:url(https://elyssi.redpixelthemes.com/assets/img/unlicensed/sunglass-1.png)"></div>
            <div class="absolute inset-0 flex items-center justify-center bg-emerald-500 bg-opacity-85 py-28 opacity-0 transition-opacity hover:opacity-100">
              <button class="mr-3 flex items-center rounded-full bg-white px-3 py-3 transition-shadow hover:shadow-lg transition-all hover:text-white hover:bg-emerald-500">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
              <NuxtLink to="/"  class="flex items-center rounded-full bg-white px-3 py-3 transition-shadow hover:shadow-lg transition-all hover:text-white hover:bg-emerald-500">
                <i class="fa-solid fa-magnifying-glass"></i>
              </NuxtLink>
            </div>
          </div>
          <div v-if="grid" 
            class="flex items-center justify-between pt-6">
            <div>
              <h3 class="font-hk text-base text-secondary">Cat eye</h3>
              <div class="flex items-center">
                <div class="flex items-center">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p class="ml-2 font-hk text-sm text-secondary">(45)</p>
              </div>
            </div>
            <span class="font-hk text-xl font-bold text-primary">$75.0</span>
          </div>
          <div v-else
          class="w-full px-4 lg:px-10 sm:w-3/5 sm:py-0 lg:w-8/11">
          <h3 class="font-bold text-xl text-grey-darkest xl:text-2xl">
            Cat eye
          </h3>
          <span class="block pt-1 font-hk text-xl font-bold text-secondary">$75.0</span>
          <span class="block pt-4 font-hk text-base font-bold text-v-green">In Stock</span>
          <p class="pt-2 font-hk text-sm text-grey-darkest xl:text-base">
            Elyssi sunglasses provides a new way to protect your eyes from the sun’s UV light, because of its polarized lenses.
          </p>
          <div class="flex items-center pt-3 xl:pt-5">
            <div class="flex items-center">
              <i class="bx bxs-star text-primary"></i>
              <i class="bx bxs-star text-primary"></i>
              <i class="bx bxs-star text-primary"></i>
              <i class="bx bxs-star text-primary"></i>
              <i class="bx bxs-star text-primary"></i>
            </div>
            <p class="ml-2 font-hk text-sm text-secondary">
              45
            </p>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>