import { memo, RefObject } from 'react';
import { FoodAllProps, FoodList, FoodPath } from '@/entities/Food';
import { useGetList } from '@/shared/lib/hooks/useGetList/useGetList';
import { Container } from '@/shared/ui/Container';

interface FoodInfiniteListProps {
    title: string;
    className?: string;
    endpoint: FoodPath;
    anchorRef: RefObject<HTMLDivElement>;
    onShowModal?: (food: FoodAllProps) => void;
}

export const FoodInfiniteList = memo((props: FoodInfiniteListProps) => {
    const { className, endpoint, title, onShowModal, anchorRef } = props;
    const {
        data: foods,
        isError,
        isLoading,
    } = useGetList<FoodAllProps, FoodPath>(endpoint);

    return (
        <Container anchorRef={anchorRef} id={endpoint}>
            <FoodList
                foods={foods}
                title={title}
                isError={isError}
                className={className}
                isLoading={isLoading}
                onShowModal={onShowModal}
            />
        </Container>
    );
});
