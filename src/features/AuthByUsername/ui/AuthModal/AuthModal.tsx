import { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';
import { Loader } from '@/shared/ui/Loader';
import { AuthFormAsync } from '../AuthForm/AuthForm.async';

interface AuthModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const AuthModal = (props: AuthModalProps) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames('', {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <AuthFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
