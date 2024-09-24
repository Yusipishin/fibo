import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';

const meta: Meta<typeof ProfilePage> = {
    component: ProfilePage,
    title: 'pages/ProfilePage',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({
            profile: {
                data: {
                    avatar: AvatarImg,
                    username: 'admin',
                    age: 22,
                    lastname: 'Yus',
                    firstname: 'Al',
                    city: 'Ukhta',
                },
            },
        }),
    ],
};
