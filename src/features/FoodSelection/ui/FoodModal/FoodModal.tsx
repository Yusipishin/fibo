import { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';
import { Loader } from '@/shared/ui/Loader';
import { FoodFormAsync } from '../FoodForm/FoodForm.async';
import { FoodAllProps } from '@/entities/Food';

interface FoodModalProps {
    className?: string;
    food: FoodAllProps;
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
                <FoodFormAsync onClose={onClose} isOpen={isOpen} food={food} />
            </Suspense>
        </Modal>
    );
};
