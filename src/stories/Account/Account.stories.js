import { Account } from "./Account";

export default {
    title: 'Account Page',
    component: Account,
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  };

export const LoggedIn = {
  args: {
    username: 'Usuario de Prueba',
    books: [],
    onRegisterBook: () => {console.log('registrado')},
    onDeleteBooks: () => {console.log('eliminado')}
  }
};