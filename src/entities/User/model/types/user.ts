import { UserRole } from '../consts/userConsts';

export interface User {
    id: string;
    username: string;
    roles?: UserRole[];
    firstname?: string;
    lastname?: string;
    age?: number;
    city?: string;
    avatar?: string;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
