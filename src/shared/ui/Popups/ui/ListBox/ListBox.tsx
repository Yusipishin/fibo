import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { Button } from '../../../Button';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
    onChange: (value: string) => void;
}

export function ListBox(props: ListBoxProps) {
    const {
        className,
        items,
        onChange,
        defaultValue,
        value,
        readonly,
        direction = 'bottom right',
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button
                    as={Button}
                    aria-disabled={readonly}
                    className={cls.trigger}
                >
                    {value ?? defaultValue}
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            as={Fragment}
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    })}
                                >
                                    {selected && '✔'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
