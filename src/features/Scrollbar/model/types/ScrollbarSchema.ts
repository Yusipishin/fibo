// <Адрес страницы, позиция скролла>
export type ScrollSchema = Record<string, number>;

export interface ScrollbarSchema {
    scroll: ScrollSchema;
}
