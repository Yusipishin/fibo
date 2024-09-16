import { StateSchema } from '@/app/providers/StoreProvider';

export const getAuthError = (state: StateSchema) => state?.authForm?.error;

export const getAuthIsLoading = (state: StateSchema) =>
    state?.authForm?.isLoading || false;

export const getAuthPassword = (state: StateSchema) =>
    state?.authForm?.password || '';

export const getAuthUsername = (state: StateSchema) =>
    state?.authForm?.username || '';
