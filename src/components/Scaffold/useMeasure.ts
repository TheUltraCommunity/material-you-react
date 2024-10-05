import { useEffect, useLayoutEffect, useMemo, useState } from 'react';

export const noop = () => { };

export function on<T extends Window | Document | HTMLElement | EventTarget>(
    obj: T | null,
    ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
    if (obj && obj.addEventListener) {
        obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>));
    }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
    obj: T | null,
    ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]
): void {
    if (obj && obj.removeEventListener) {
        obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>));
    }
}

export const isBrowser = typeof window !== 'undefined';

export const isNavigator = typeof navigator !== 'undefined';
const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export type UseMeasureRect = Pick<
    DOMRectReadOnly,
    'x' | 'y' | 'top' | 'left' | 'right' | 'bottom' | 'height' | 'width'
>;
export type UseMeasureRef<E extends Element = Element> = (element: E) => void;
export type UseMeasureResult<E extends Element = Element> = [UseMeasureRef<E>, UseMeasureRect];

const defaultState: UseMeasureRect = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
};

function useMeasure<E extends Element = Element>(): UseMeasureResult<E> {
    const [element, ref] = useState<E | null>(null);
    const [rect, setRect] = useState<UseMeasureRect>(defaultState);

    const observer = useMemo(
        () =>
            new (window as any).ResizeObserver((entries: any) => {
                if (entries[0]) {
                    const { x, y, width, height, top, left, bottom, right } = entries[0].contentRect;
                    setRect({ x, y, width, height, top, left, bottom, right });
                }
            }),
        []
    );

    useIsomorphicLayoutEffect(() => {
        if (!element) return;
        observer.observe(element);
        return () => {
            observer.disconnect();
        };
    }, [element]);

    return [ref, rect];
}


export function getWidthSizeClass(width: number) {
    if (width < 600) {
        return WindowSizeClass.Compact
    } else if (width >= 600 && width < 840) {
        return WindowSizeClass.Medium
    } else if (width >= 840 && width < 1200) {
        return WindowSizeClass.Expanded
    } else if (width >= 1200 && width < 1600) {
        return WindowSizeClass.Large
    } else {
        return WindowSizeClass.ExtraLarge
    }
}

export enum WindowSizeClass {
    Compact = "compact",
    Medium = "medium",
    Expanded = "expanded",
    Large = "large",
    ExtraLarge = "extra-large",
}


export default isBrowser && typeof (window as any).ResizeObserver !== 'undefined'
    ? useMeasure
    : ((() => [noop, defaultState]) as typeof useMeasure);