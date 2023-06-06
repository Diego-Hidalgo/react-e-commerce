import { CartItem } from "./CartItem";

export default {
    title: 'Cart Item',
    component: CartItem,
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  };

  export const RegularCartItem = {
    args: {
      index: 1,
      item: {
        image: "https://images-na.ssl-images-amazon.com/images/I/51hb7s69wrL._SX355_BO1,204,203,200_.jpg",
        name: "Soy un libro",
        price: 10000,
      },
      onRemoveFromCart: () => {console.log('removido')}
    }
  };