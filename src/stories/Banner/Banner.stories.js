import { Banner } from "./Banner";

export default {
    title: 'Banner',
    component: Banner,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export const LoggedBanner = {
    args: {
        user: {
            email: 'Dieg01',
        },
        cartLength: 0,
        onLogOut: () => {console.log('saliendo...')}
    },
};

export const LoggedOut = {
    args: {
        cartLength: 0,
        onLogOut: () => {console.log('no hay usuario...')}
    }
};