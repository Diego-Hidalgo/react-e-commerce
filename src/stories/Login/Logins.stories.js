import { Login } from "./Login";

export default {
    title: 'Example/Page',
    component: Login,
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
}

export const LoginPage = {
    args: {
        onLogin: () => {console.log("ingreso")}
    }
}