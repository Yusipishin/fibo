import { Meta } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator';
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
    },
    decorators: [
        StyleDecorator,
        RouterDecorator,
        SuspenseDecorator,
        ThemeDecorator(Theme.LIGHT),
        withThemeByClassName({
            defaultTheme: 'light',
            parentSelector: '.app',
            themes: {
                light: Theme.LIGHT,
                dark: Theme.DARK,
            },
        }),
    ],
};

export default meta;
