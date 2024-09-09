import { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';
import { Loader } from '@/shared/ui/Loader';
import { FoodFormAsync } from '../FoodForm/FoodForm.async';
import { AllFoodProps } from '@/entities/Food';

interface FoodModalProps {
    className?: string;
    food: AllFoodProps;
    isOpen: boolean;
    onClose: () => void;
}

export const FoodModal = (props: FoodModalProps) => {
    const { className, isOpen, onClose, food } = props;

    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames('', {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <FoodFormAsync isOpen={isOpen} food={food} />
            </Suspense>
        </Modal>
    );
};
