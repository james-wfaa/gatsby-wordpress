export const baseSize = '18px';

export const baseColors = {
    mainRed: '#c5050c',
    black:   '#000',
    white:   '#FFF',
    darkGrey: '#777',
    lightGrey: '#F3F3F3',
}
export const colors = {
    dateColor: '#3c3c3c',
    titleColor: baseColors.mainRed,
    titleWhite: baseColors.white,
    bgWhite:    baseColors.white,
    promoRed:   baseColors.mainRed,
    darkGrey:   baseColors.darkGrey,
    navcardGrey:baseColors.lightGrey,
}

export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '414px',
    tabletS: '656px',
    tablet: '768px',
    tabletL: '936px',
    laptopS: '1200px',
    laptop:  '1280px',
    laptopL: '1440px',
    desktop: '1920px',
    max: '2880px'
}
export const breakpoints = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tabletS: `(min-width: ${size.tabletS})`,
    tablet: `(min-width: ${size.tablet})`,
    laptopS: `(min-width: ${size.laptopS})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
}