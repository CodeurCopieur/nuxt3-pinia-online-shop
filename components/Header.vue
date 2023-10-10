<script setup>
  const route = useRoute();
  const router = useRouter();
</script>
<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
      <NuxtLink to="/" class="font-bold">CodeurCopieur</NuxtLink>
      <ul class="flex gap-4 items-center">
        <li><NuxtLink to="/"><i class="fa-solid fa-house"></i></NuxtLink></li>
        <li><NuxtLink to="/cart"><i class="fa-solid fa-cart-shopping"></i></NuxtLink></li>
        <li class="cursor-pointer btn">
          <i v-if="theme === 'light'" 
            class="fa-solid fa-sun"></i>
          <i v-else class="fa-solid fa-moon"></i>
          <span class="ml-2">Toogle theme</span>
        </li>
      </ul>
    </nav>
  </header>
</template>