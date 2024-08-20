import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearSecondary: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_SECONDARY,
    },
};

export const ClearThird: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_THIRD,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const Background: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        square: true,
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareSizeL: Story = {
    args: {
        square: true,
        children: '>',
        size: ButtonSize.L,
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareSizeXL: Story = {
    args: {
        square: true,
        children: '>',
        size: ButtonSize.XL,
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Disabled: Story = {
    args: {
        children: '>',
        disabled: true,
        theme: ButtonTheme.OUTLINE,
    },
};
