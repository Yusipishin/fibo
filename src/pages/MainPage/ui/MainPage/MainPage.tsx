import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { MainPageSlider } from '../MainPageSlider/MainPageSlider';
import { MainPageMap } from '../MainPageMap/MainPageMap';
import { Footer } from '@/widgets/Footer';
import { MainPageLists } from '../MainPageLists/MainPageLists';

const MainPage = memo(() => (
    <Page data-testid="MainPage">
        <MainPageSlider />
        <MainPageLists />
        <MainPageMap />
        <Footer />
    </Page>
));

export default MainPage;
