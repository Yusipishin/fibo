import { rtkApi } from '@/shared/api/rtkApi';
import { CartItem } from '../model/types/cart';

interface GetCartItemsArg {
    userId: string;
}

interface AddCartItemArg extends CartItem {
    userId: string;
}

const cartApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getCartItems: build.query<CartItem[], GetCartItemsArg>({
            query: ({ userId }) => ({
                url: '/cart/',
                params: {
                    userId,
                },
            }),
        }),
        addCartItem: build.mutation<void, AddCartItemArg>({
            query: (item) => ({
                url: `/cart/`,
                method: 'POST',
                body: item,
            }),
        }),
        deleteCartItem: build.mutation<void, { userId: string; id: string }>({
            query: ({ userId, id }) => ({
                url: `/cart/`,
                method: 'DELETE',
                params: {
                    userId,
                    id,
                },
            }),
        }),
    }),
});

export const useGetCartItems = cartApi.useGetCartItemsQuery;
export const useAddCartItem = cartApi.useAddCartItemMutation;
export const useDeleteCartItem = cartApi.useDeleteCartItemMutation;
