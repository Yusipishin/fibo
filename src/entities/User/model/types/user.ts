import { UserRole } from '../consts/userConsts';
import { Country } from '@/entities/Country';

export interface User {
    id: string;
    username: string;
    roles?: UserRole[];
    profile: {
        firstname: string;
        lastname?: string;
        age?: number;
        country?: Country;
        city?: string;
        avatar?: string;
    };
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
