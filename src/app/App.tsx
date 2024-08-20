import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from '@/entities/User';
import { Header } from '@/widgets/Navbar';
import { AppRouter } from './providers/router';

const App = () => {
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className="app">
            <Suspense fallback="">
                <Header />
                {inited && <AppRouter />}
            </Suspense>
        </div>
    );
};

export default App;
