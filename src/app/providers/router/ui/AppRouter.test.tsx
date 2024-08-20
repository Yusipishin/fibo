import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { getRouteAdminPanel, getRouteMain } from '@/shared/const/router';
import { UserRole } from '@/entities/User';

describe('app/router/AppRouter', () => {
    test('Страница должна отрендериться', async () => {
        componentRender(<AppRouter />, {
            route: getRouteMain(),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Страница не найдена', async () => {
        componentRender(<AppRouter />, {
            route: '/abcde',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    // test('Редирект неавторизованного пользователя на главную страницу', async () => {
    //     componentRender(<AppRouter />, {
    //         route: getRouteProfile('1'),
    //     });

    //     const page = await screen.findByTestId('MainPage');
    //     expect(page).toBeInTheDocument();
    // });

    // test('Доступ к закрытой странице для авторизованного пользователя', async () => {
    //     componentRender(<AppRouter />, {
    //         route: getRouteProfile('1'),
    //         initialState: {
    //             user: { _inited: true, authData: { username: 'Alex' } },
    //         },
    //     });

    //     const page = await screen.findByTestId('ProfilePage');
    //     expect(page).toBeInTheDocument();
    // });

    test('Доступ запрещён (роль отсутствует)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _inited: true, authData: { username: 'Alex' } },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ разрешён (роль присутствует)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    _inited: true,
                    authData: { username: 'Alex', roles: [UserRole.ADMIN] },
                },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
