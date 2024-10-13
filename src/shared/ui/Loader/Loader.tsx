import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className="lds-wrapper">
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
