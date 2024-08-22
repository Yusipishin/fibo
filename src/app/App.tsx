import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getUserInited, userActions } from '@/entities/User';
import { Header } from '@/widgets/Header';
import { AppRouter } from './providers/router';
import { Switchers } from '@/widgets/Switchers';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { scrollbarActions } from '@/features/Scrollbar';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';

const App = () => {
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const inited = useSelector(getUserInited);

    const onScroll = useThrottle(() => {
        dispatch(
            scrollbarActions.setScrollPosition({
                position: window.scrollY,
                path: pathname,
            }),
        );
    }, 200);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [onScroll]);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className="app">
            <Suspense fallback="">
                <Header />
                {inited && <AppRouter />}
                <Switchers />
            </Suspense>
        </div>
    );
};

export default App;
