import { useEffect, useState } from 'react';
export const breakpoints = {
    xl: '1920px',
    preXl: '1600px',
    lg: '1366px',
    md: '900px',
    sm: '600px',
    xs: '320px',
};

export const breakpointsNum = {
    xl: 1920,
    lg: 1200,
    md: 900,
    sm: 600,
    xs: 375,
};

export enum WindowSize {
    XS = 1,
    SM,
    MD,
    LG,
    XL,
}

export function useWindowSize() {
    const [size, setSize] = useState(WindowSize.XS);

    const getWindowSize = (width: number) => {
        if (width <= breakpointsNum.xs) {
            return WindowSize.XS;
        } else if (width > breakpointsNum.xs && width < breakpointsNum.sm) {
            return WindowSize.SM;
        } else if (width >= breakpointsNum.sm && width < breakpointsNum.md) {
            return WindowSize.MD;
        } else if (width >= breakpointsNum.md && width < breakpointsNum.lg) {
            return WindowSize.MD;
        } else if (width >= breakpointsNum.lg && width < breakpointsNum.xl) {
            return WindowSize.LG;
        } else if (width >= breakpointsNum.xl) {
            return WindowSize.XL;
        } else return WindowSize.XS;
    };

    useEffect(() => {
        const updateSize = () => {
            setSize(getWindowSize(window.innerWidth));
        };

        window.addEventListener('resize', updateSize);

        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
}
