import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINE}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text
                title={{ txt: item.title, tag: 'h2' }}
                text={item.description}
            />
        </Card>
    );

    if (item.href) {
        return (
            <a className="" href={item.href} target="_blank" rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});
