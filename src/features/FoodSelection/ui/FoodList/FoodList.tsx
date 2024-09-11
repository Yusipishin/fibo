import { memo } from 'react';
import { AllFoodProps, FoodListWrapper, FoodPath } from '@/entities/Food';
import { useGetList } from '@/shared/lib/hooks/useGetList/useGetList';
import { VStack } from '@/shared/ui/Stack';
import { Container } from '@/shared/ui/Container';

interface FoodListProps {
    title: string;
    endpoint: FoodPath;
    className?: string;
    onShowModal?: (food: AllFoodProps) => void;
}

export const FoodList = memo((props: FoodListProps) => {
    const { className, endpoint, title, onShowModal } = props;

    const {
        data: foods,
        isError,
        isLoading,
    } = useGetList<AllFoodProps, FoodPath>(endpoint);

    return (
        <Container>
            <VStack max className={className}>
                <FoodListWrapper
                    foods={foods}
                    title={title}
                    isError={isError}
                    isLoading={isLoading}
                    onShowModal={onShowModal}
                />
            </VStack>
        </Container>
    );
});
