import type {Preview} from '@storybook/react';
// @ts-ignore
import {reactIntl} from './reactIntl';

const preview: Preview = {
    globals: {
        locale: 'en',
        locales: {
            en: {icon: '🇺🇸', title: 'English', right: 'EN'},
            fr: {icon: '🇫🇷', title: 'Français', right: 'FR'},
            ja: {icon: '🇯🇵', title: '日本語', right: 'JP'},
        },
    },
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        backgrounds: {
            default: 'light',
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        reactIntl,
    },
};

export default preview;
