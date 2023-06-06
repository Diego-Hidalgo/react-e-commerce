import { ItemsGrid } from "./ItemsGrid";

export default {
    title: 'Items Container',
    component: ItemsGrid,
    tags: ['autodocs'],
};

export const Empty = {
    args: {
        books: [],
        onAddToCart: () => {console.log("nada")},
        onSelectedBook: () => {console.log("seleccionado")}
    }
}

export const SomeItems = {
    args: {
        books: [{
            id: "623de5394aebb40517f35742",
            image: "https://images-na.ssl-images-amazon.com/images/I/51hb7s69wrL._SX355_BO1,204,203,200_.jpg",
            price: 20,
            name: "The Things You Can See Only When You Slow Down"
        },
        {
            id: "623de539a25cd86a11df7197",
            image: "https://images-eu.ssl-images-amazon.com/images/I/41yu2qXhXXL._SY264_BO1,204,203,200_QL40_ML2_.jpg",
            price: 13,
            name: "Sapiens: A Brief History of Humankind"
        },
        {
            id: "623ab1335faf472s967fbwb2",
            image: "https://images-na.ssl-images-amazon.com/images/I/41RfHWoMEQS._SX308_BO1,204,203,200_.jpg",
            price: 20,
            name: "Beautiful World, Where Are You"
        }
        ],
        onAddToCart: () => {console.log('agregado')},
        onSelectedBook: () => {console.log('seleccionado')}
    },
}