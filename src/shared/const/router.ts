export enum AppRoutes {
    MAIN = 'main',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    PROFILE = 'profile',

    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
