import { Register } from "./Register";

export default {
    title: 'Example/Page',
    component: Register,
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  };

export const RegisterPage = {
  args: {
    onRegister: () => {console.log('registrado')}
  }
};