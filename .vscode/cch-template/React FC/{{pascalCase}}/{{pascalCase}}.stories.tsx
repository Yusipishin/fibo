import type { Meta, StoryObj } from '@storybook/react';
import { {{pascalCase}} } from './{{pascalCase}}';

const meta: Meta<typeof {{pascalCase}}> = {
    component: {{pascalCase}},
    title: 'shared/{{pascalCase}}',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
