module.exports = (
    layer,
    componentName,
) => `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
    component: ${componentName},
    title: '${layer}/${componentName}',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
`;
