import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { mapIcons } from '../../model/consts/map';
import cls from './MainPageMap.module.scss';
import { Icon } from '@/shared/ui/Icon';
import { Text, TextSize } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Container } from '@/shared/ui/Container';

interface MainPageMapProps {
    className?: string;
}

export const MainPageMap = memo((props: MainPageMapProps) => {
    const { className } = props;

    return (
        <section className={classNames(cls.MainPageMap, {}, [className])}>
            <Container className={cls.container} Tag="div">
                <Text
                    theme="accent"
                    size={TextSize.XL}
                    align="center"
                    title={{ txt: 'Оплата и доставка', tag: 'h2' }}
                />
                <HStack gap="32" className={cls.list} justify="between">
                    {mapIcons.map((icon) => (
                        <VStack align="center" className={cls.item}>
                            <div className={cls.iconWrapper}>
                                <Icon Svg={icon.Svg} />
                            </div>
                            <Text
                                align="center"
                                className={cls.text}
                                text={icon.description}
                            />
                        </VStack>
                    ))}
                </HStack>
                <iframe
                    className={cls.map}
                    title="Карта пиццерии"
                    // eslint-disable-next-line max-len
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.1907212114406!2d37.5813665986061!3d55.77255936253342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bceabc8c009%3A0x5e96e9b04fbfdee2!2z0JTQvtC00L4g0J_QuNGG0YbQsA!5e0!3m2!1sru!2sru!4v1725998216699!5m2!1sru!2sru"
                    width="100%"
                    height="322"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </Container>
        </section>
    );
});
