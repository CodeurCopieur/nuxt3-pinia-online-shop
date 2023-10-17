<script setup>

  /* imports */
  import { useCartStore } from '../stores/cart';

  const cartStore = useCartStore();
</script>

<template>
     <div class="mt-16">

<div v-if="Object.keys(cartStore.cartContent).length === 0" class="flex items-center flex-col">
  <h4 class="text-gray-600 text-2xl font-medium mb-6">Le panier est vide ...</h4>
  <router-link to="/" class="bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring focus:ring-emerald-300 active:bg-emerald-600 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white no-underline">Back to Home</router-link>
</div>
<div v-else>
  <div class="flex flex-col-reverse justify-between pb-16 sm:pb-20 lg:flex-row lg:pb-24">
    <div class="lg:w-3/5">
        <h3 class="text-gray-600 text-2xl font-bold">Panier</h3>
        <div>
          <div class="items"
            v-for="item in cartStore.formattedCart" :key="item.id">
            <!-- <pre>{{ item }}</pre>  -->
            <!-- Afficher le contenu de l'objet item -->
            <div 

              class="item">
              <div class="mb-0 flex-row items-center justify-between border-b border-grey-dark py-3 md:flex">
                <!-- icones -->
                <i 
                  @click="cartStore.removeFromCart(item.id)"
                  class="mr-6 cursor-pointer text-xl fa-solid fa-trash"></i>

                <div class="flex w-1/2 flex-row items-center border-b-0 border-grey-dark pt-0 pb-0 text-left lg:w-3/5 xl:w-1/2">
                  <div class="relative mx-0 w-20 pr-0">
                    <!-- images -->
                    <div class="flex h-20 items-center justify-center rounded">
                      <div class="aspect-w-1 aspect-h-1 w-full">
                        <img :src="item.thumbnail" class="object-cover w-full" alt="">
                      </div>
                    </div>
                  </div>
                  <span class="mt-2 ml-4 font-hk text-base">{{ item.title }}</span>
                </div>

                <!-- quantité -->
                <div class="w-full pb-0 text-center sm:w-1/5 xl:w-1/4">
                  <div class="mx-auto mr-8 xl:mr-4">
                    <div class="flex justify-center">
                      
                            <div class="flex flex-col items-center">
                              <span class="flex cursor-pointer bg-white px-1 hover:shadow-lg transition-all hover:text-emerald-500" @click="cartStore.add(item.id)">
                                <i class="text-xl fa-solid fa-caret-up"></i>
                              </span>
                              <span>{{ item.quantity }}</span>
                              <span class="flex cursor-pointer bg-white px-1 hover:shadow-lg transition-all hover:text-emerald-500" @click="cartStore.remove(item.id)">
                                <i class="text-xl fa-solid fa-caret-down"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>


                <!-- price -->
                <div class="w-1/4 text-right lg:w-1/5 xl:w-1/4">
                  <span class="font-hk text-secondary">${{item.cost}}</span>
                </div>

              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="mx-auto mt-16 sm:w-2/3 md:w-full lg:mx-0 lg:mt-0 lg:w-1/3">
      <div class="bg-grey-light py-8 px-8">
        <h4 class="font-hkbold pb-3 text-center text-2xl text-secondary sm:text-left">
          Total du panier
        </h4>

        <div class="flex justify-between pt-3">
          <span>Total</span>
          <span>Grand Total: US$ {{ cartStore.total }}</span>
        </div>
      </div>
    </div>
  </div>
  
</div>
</div>
</template>