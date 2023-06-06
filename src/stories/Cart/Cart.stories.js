import { Cart } from "./Cart";

export default {
    title: 'Cart Items Container',
    component: Cart,
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  };

  export const EmptyCart = {
    args:{
      items: [],
      total: 0,
      onRemoveFromCart: () => {console.log("removido del carrito")},
      onBuyCart: () => {console.log("carrito comprado")}
    }
  };