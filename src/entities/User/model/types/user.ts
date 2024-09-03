import { FeatureFlags } from '@/shared/types/featureFlags';
import { UserRole } from '../consts/userConsts';
import { Country } from '@/entities/Country';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
}

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface UserSchema {
    authData?: User;
    profile?: Profile;

    _inited: boolean;
}
