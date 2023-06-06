import { ItemsTable } from "./ItemsTable";

export default {
    title: 'Items Table',
    component: ItemsTable,
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  };

export const EmptyTable = {
  args: {
    books: [],
    changeToDelete: () => {console.log("nada")}
  }
}

export const TableWithSomeItems = {
  args: {
    books: [{
      id: "623de5394aebb40517f35742",
      price: 20,
      name: "The Things You Can See Only When You Slow Down"
  },
  {
      id: "623de539a25cd86a11df7197",
      price: 13,
      name: "Sapiens: A Brief History of Humankind"
  },
  {
      id: "623ab1335faf472s967fbwb2",
      price: 20,
      name: "Beautiful World, Where Are You"
  }
  ],
    changeToDelete: () => {console.log("eliminado")}
  }
};