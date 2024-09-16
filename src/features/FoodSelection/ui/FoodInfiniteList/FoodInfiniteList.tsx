import { memo } from 'react';
import { AllFoodProps, FoodList, FoodPath } from '@/entities/Food';
import { useGetList } from '@/shared/lib/hooks/useGetList/useGetList';
import { Container } from '@/shared/ui/Container';

interface FoodInfiniteListProps {
    title: string;
    endpoint: FoodPath;
    className?: string;
    onShowModal?: (food: AllFoodProps) => void;
}

export const FoodInfiniteList = memo((props: FoodInfiniteListProps) => {
    const { className, endpoint, title, onShowModal } = props;
    const {
        data: foods,
        isError,
        isLoading,
    } = useGetList<AllFoodProps, FoodPath>(endpoint);

    return (
        <Container>
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
