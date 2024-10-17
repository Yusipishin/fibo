export enum AppRoutes {
    MAIN = 'main',
    PROMO = 'promo',
    CONTACT = 'contact',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    PROFILE = 'profile',

    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/uhta';
export const getRoutePromo = () => '/promo';
export const getRouteContact = () => '/contact';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
