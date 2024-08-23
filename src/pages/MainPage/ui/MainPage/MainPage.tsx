import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { MainPageSlider } from '../MainPageSlider/MainPageSlider';

const MainPage = memo(() => (
    <Page data-testid="MainPage">
        <MainPageSlider />
        <div style={{ marginBottom: '3500px' }} />
    </Page>
));

export default MainPage;
