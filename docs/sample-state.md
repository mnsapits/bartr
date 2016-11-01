```js
{
  currentUser: {
    id: 1,
    username: "mnsapits",
    avatar: "urlstring"
  },
  forms: {
   signUp: {errors: []},
   logIn: {errors: []},
   addItem: {errors: []}
  },

  items: {
    1: {
      id: 1,
      image_url: "imageurl",
      name: "lamp",
      location: "California",
      description: "old lamp",
      seller_id: 1,
      price: 2.99
    }
  },
  currentListing: {
    id: 1,
    image_url: "imageurl",
    name: "lamp",
    location: "California",
    description: "old lamp",
    seller_id: 1,
    price: 2.99,
    sellers_store: {
      1: {
        id: 2,
        image_url: "imageurl",
        name: "lampshade",
        location: "California",
        description: "old lampshade",
        seller_id: 1,
        price: 1.99
      }
      2: {
        id: 3,
        image_url: "imageurl",
        name: "lamp light",
        location: "California",
        description: "old lamp light",
        seller_id: 1,
        price: 0.99
      }
    }
  },


  cart: [
  {
    item_id: 1,
    image_url: "imageurl"
    price: 2.99,
  }
  ],

  searchFilter: "some string",
  {items: ????}


}
```
