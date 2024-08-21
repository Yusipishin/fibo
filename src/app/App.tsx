import './styles/index.scss';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from '@/entities/User';
import { Header } from '@/widgets/Header';
import { AppRouter } from './providers/router';
import { Switchers } from '@/widgets/Switchers';

const App = () => {
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className="app">
            <Suspense fallback="">
                <Header scrolled={scrolled} />
                {inited && <AppRouter />}
                <Switchers />
            </Suspense>
        </div>
    );
};

export default App;
