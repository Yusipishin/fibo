import type { Meta, StoryObj } from '@storybook/react';
import { AppImage } from './AppImage';
import { Skeleton } from '../Skeleton';
import imagePath from '../../assets/tests/test-img.jpg';

const meta: Meta<typeof AppImage> = {
    component: AppImage,
    title: 'shared/AppImage',
};
export default meta;

type Story = StoryObj<typeof meta>;

const ImgFallback = <Skeleton width={500} height={250} />;

export const Primary: Story = {
    args: {
        src: imagePath,
        fallback: ImgFallback,
    },
};
