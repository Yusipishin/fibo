import { rtkApi } from '@/shared/api/rtkApi';

export function useGetList<T, P>(endpoint: P) {
    const listApi = rtkApi.injectEndpoints({
        endpoints: (build) => ({
            getList: build.query<T[], P>({
                query: (endpoint) => ({
                    url: `/${endpoint}`,
                }),
            }),
        }),
    });

    return listApi.useGetListQuery(endpoint);
}
