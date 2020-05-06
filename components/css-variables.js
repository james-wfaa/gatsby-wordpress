export const baseSize = '18px';

export const fonts = {
    eaves: 'mrs-eaves-xl-serif, serif',
    eavesNarrow: 'mrs-eaves-xl-serif-narrow, serif',
}
export const sizes = {
    s13: '0.722rem',
    s14: '0.777rem',
    s15: '0.0.8333rem',
    s16: '0.888rem',
    s20: '1.111rem',
    s24: '1.333rem',
    s26: '1.444rem',
    s32: '1.778rem',
    s36: '2rem',
    s42: '2.333rem',

}
export const baseColors = {
    black:   '#000',
    white:   '#FFF',
    mainRed: '#c5050c',
    toneRed: '#A5050A',
    deepRed: '#8100000',
    flamingle: '#E8306E',
    offBlack: '#3C3C3C',
    darkerGrey: '#777777',
    darkGrey: '#949494',
    grey: '#CCCCCC',
    lightGrey: '#E0E0E0',
    lightestGrey: '#F3F3F3',
}
export const colors = {
    dateColor:      baseColors.offBlack,
    titleColor:     baseColors.mainRed,
    cardTitleBg:    baseColors.lightestGrey,
    cardBorder:     baseColors.darkGrey,
    cardText:       baseColors.offBlack,
    cardTags:       baseColors.darkGrey,
    copyText:       baseColors.offBlack,
    titleWhite:     baseColors.white,
    bgWhite:        baseColors.white,
    promoRed:       baseColors.mainRed,
    categoryGrey:   baseColors.darkerGrey,
    tagGrey:        baseColors.darkerGrey,
    navcardGrey:    baseColors.lightestGrey,
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

export const mixins = {
    cardTitle: `
        font-family: ${fonts.eavesNarrow};
        font-size: ${sizes.s24};
        color: ${colors.titleColor};
        font-weight: bold;
        font-style: italic;
        @media screen and ${breakpoints.tabletS} {
            font-size: ${sizes.s32};
        }
    `
}