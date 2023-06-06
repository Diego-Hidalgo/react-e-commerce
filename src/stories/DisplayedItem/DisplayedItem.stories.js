import { DisplayedItem } from "./DisplayedItem";

export default {
    component: DisplayedItem,
    tags: ['autodocs'],
    title: 'Displayed Item',
};
 
export const Regular = {
    args: {
        book: {
            image: "https://images-na.ssl-images-amazon.com/images/I/51hb7s69wrL._SX355_BO1,204,203,200_.jpg",
            name: "Soy un libro",
            price: 10000,
        },
        onAddToCart: () => {console.log("agregado")},
        onSelectedBook: () => {console.log("seleccionado")}
    },
}