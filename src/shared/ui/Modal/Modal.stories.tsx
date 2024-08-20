import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    component: Modal,
    title: 'shared/Modal',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquam amet at doloremque et eum nesciunt optio quam qui reiciendis.',
    },
};
