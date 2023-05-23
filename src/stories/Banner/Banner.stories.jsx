import { Banner } from "./Banner";

export default {
    component: Banner,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export const LoggedBanner = {
    args: {
        user: {
            username: 'Dieg01'
        }
    },
};

export const LoggedOut = {

};