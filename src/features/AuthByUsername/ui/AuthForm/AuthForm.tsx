import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import cls from './AuthForm.module.scss';
import { authActions, authReducer } from '../../model/slices/AuthSlice';
import {
    getAuthError,
    getAuthIsLoading,
    getAuthPassword,
    getAuthUsername,
} from '../../model/selectors/authByUsernameSelectors';
import { authByUsername } from '../../model/services/authByUsername/authByUsername';

export interface AuthFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    authForm: authReducer,
};

const AuthForm = memo(({ className, onSuccess }: AuthFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getAuthUsername);
    const password = useSelector(getAuthPassword);
    const isLoading = useSelector(getAuthIsLoading);
    const error = useSelector(getAuthError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(authActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(authActions.setPassword(value));
        },
        [dispatch],
    );

    const onAuthClick = useCallback(async () => {
        const result = await dispatch(authByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.AuthForm, {}, [className])}>
                <Text title={{ tag: 'h2', txt: t('Форма Авторизации') }} />
                {error && (
                    <Text
                        text={t('Вы ввели неверный логин или пароль')}
                        theme="error"
                    />
                )}
                <Input
                    autofocus
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите логин')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    onClick={onAuthClick}
                    theme="outline"
                    className={cls.authBtn}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AuthForm;
