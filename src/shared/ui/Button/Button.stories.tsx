import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'shared/Button',
};
type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: 'clear',
    },
};

export const Accent: Story = {
    args: {
        children: 'Text',
        theme: 'accent',
    },
};

export const Inverted: Story = {
    args: {
        children: 'Text',
        theme: 'inverted',
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
    },
};

// export const OutlineSizeL: Story = {
//     args: {
//         children: 'Text',
//         theme: ButtonTheme.OUTLINE,
//         size: ButtonSize.L,
//     },
// };

// export const OutlineSizeXL: Story = {
//     args: {
//         children: 'Text',
//         theme: ButtonTheme.OUTLINE,
//         size: ButtonSize.XL,
//     },
// };

// export const Background: Story = {
//     args: {
//         children: 'Text',
//         theme: ButtonTheme.BACKGROUND,
//     },
// };

// export const BackgroundInverted: Story = {
//     args: {
//         children: 'Text',
//         theme: ButtonTheme.BACKGROUND_INVERTED,
//     },
// };

// export const Square: Story = {
//     args: {
//         square: true,
//         children: '>',
//         theme: ButtonTheme.BACKGROUND_INVERTED,
//     },
// };

// export const SquareSizeL: Story = {
//     args: {
//         square: true,
//         children: '>',
//         size: ButtonSize.L,
//         theme: ButtonTheme.BACKGROUND_INVERTED,
//     },
// };

// export const SquareSizeXL: Story = {
//     args: {
//         square: true,
//         children: '>',
//         size: ButtonSize.XL,
//         theme: ButtonTheme.BACKGROUND_INVERTED,
//     },
// };

// export const Disabled: Story = {
//     args: {
//         children: '>',
//         disabled: true,
//         theme: ButtonTheme.OUTLINE,
//     },
// };
