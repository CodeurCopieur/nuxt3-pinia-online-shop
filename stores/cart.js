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
      // crée un tableau contenant les clés (identifiants de produit) de l'objet cartContent (qui représente le contenu du panier) et itère sur chaque clé (chaque produit dans le panier)
      return Object.keys(this.cartContent).map(productId => {
        // obtenez l'objet produit à partir du panier en utilisant la clé
        const product = this.cartContent[productId];
        // recherche le produit correspondant dans la liste de tous les produits (this.products) 
        const matchedProduct = this.products.find(p => p.id === parseInt(product.productId, 10));

        // si matchedProduct n'est pas undefined
        if (matchedProduct) {
          // extrait les propriétés pertinentes du produit
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
    },
    total() {
      return Object.keys(this.cartContent).reduce((acc, id) => {
        // Convertissez id en nombre
        const productId = parseInt(id, 10);
        // Recherchez le produit correspondant en utilisant le produitId
        const product = this.products.find(p => p.id === productId);

        if (product) {
          // Si le produit est trouvé, ajoutez son coût à l'accumulateur
          return acc + product.price * this.cartContent[id].quantity;
        }
        // Sinon, ne faites rien avec cet id (retournez simplement l'accumulateur)
        return acc + 0;
      }, 0)
    },
    productsTotal() {
      return Object.keys(this.cartContent).reduce((acc, id) => {
        return acc + this.cartContent[id].quantity;
      }, 0)
    },
    getTheme() {
      return this.theme
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

      // vérifie si le produit que vous essayez d'ajouter existe déjà dans le panier en utilisant hasOwnProperty
      if(this.cartContent.hasOwnProperty(productId)) {

        //Si le produit existe déjà
        this.cartContent[productId] = {
          productId,
          quantity: this.cartContent[productId].quantity + 1 //incrémente la quantité du produit existant de 1
        }
      } else {
        //Si le produit n'existe pas encore dans le panier
        // nouvelle entrée dans le panier pour le produit en utilisant productId comme clé
        // entrée contient l'identifiant du produit (productId) et définit la quantité à 1,
        this.cartContent[productId] = {
          productId,
          quantity: 1
        }
      }
    },
    remove(productId){

      //vérifie si le produit que vous essayez de supprimer existe dans le panier
      if (!this.cartContent[productId]) { // si c'est faux
        return; //la méthode se termine ici
      }

      //Si le produit existe dans le panier
      this.cartContent[productId].quantity -= 1; // réduit la quantité de ce produit d'une unité

      //si la quantité du produit est maintenant égale à zéro
      //le produit ne devrait plus être dans le panier, car il a été complètement supprimé.
      if (this.cartContent[productId].quantity === 0) {
        delete this.cartContent[productId];
        // Si la quantité du produit est devenue zéro
        //supprime effectivement l'entrée du produit
        //Le produit est ainsi retiré du panier.
      }
    },
    removeFromCart(productId) {
      if (this.cartContent[productId]) {
        delete this.cartContent[productId];
      }
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
})