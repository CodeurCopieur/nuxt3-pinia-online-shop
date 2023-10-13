import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [],
    cartContent : {},
    theme: 'light',
    loading: true
  }),
  getters: {
    formattedCart() {
      return Object.keys(this.cartContent).map(productId => {
        const product = this.cartContent[productId];
  
        const matchedProduct = this.products.find(p => p.id === parseInt(product.productId, 10));

  
        if (matchedProduct) {
          const { id, thumbnail, title, price } = matchedProduct;
          const { quantity } = product;
          
          return {
            id,
            thumbnail,
            title,
            price,
            quantity,
            cost: quantity * price
          };


        } else {
          // Gérer le cas où le produit n'a pas été trouvé
          return null;
        }
      }).filter(product => product !== null); // Filtrer les produits null
    }
  },
  actions: {
    
    async getProducts() {
      try {
        // Requête HTTP pour récupérer les produits depuis l'API
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()

        // Stockez les produits dans une variable
        const productsFromAPI  = data.products

        // Maintenant, ajoutez la propriété "quantité" à chaque produit
        const productsWithQuantity = productsFromAPI.map(product => {
          return {
            ...product, // Copiez toutes les propriétés du produit d'origine
            quantity:0 // Ajoutez la propriété "quantité" avec une valeur initiale de 0
          }
        })

        // Maintenant, stockez les produits avec la propriété "quantité" ajoutée
        this.products = productsWithQuantity;

        setTimeout(()=> {
          this.loading = false
        }, 1000)

      } catch (error) {
        console.log(error);
      }
    },
    add(productId) {
      
      productId = productId.toString();
      if(this.cartContent.hasOwnProperty(productId)) {
        this.cartContent[productId] = {
          productId,
          quantity: this.cartContent[productId].quantity + 1
        }
      } else {
        this.cartContent[productId] = {
          productId,
          quantity: 1
        }
      }
    }
  }
})