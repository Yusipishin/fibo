import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './{{pascalCase}}.module.scss';

interface {{pascalCase}}Props {
    className?: string;
}

export const {{pascalCase}} = memo((props: {{pascalCase}}Props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.{{pascalCase}}, {}, [className])}>
            SOME
        </div>
    );
});