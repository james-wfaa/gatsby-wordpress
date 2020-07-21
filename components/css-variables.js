export const baseSize = '18px';

export const fonts = {
    eaves: 'mrs-eaves-xl-serif, serif',
    eavesNarrow: 'mrs-eaves-xl-serif-narrow, serif',
    verlag: 'Verlag A, Verlag B'
}
export const sizes = {
    s4:  '0.222rem',
    s7:  '0.389rem',
    s8:  '0.444rem',
    s9:  '0.5rem',
    s12: '0.667rem',
    s13: '0.722rem',
    s14: '0.778rem',
    s15: '0.8333rem',
    s16: '0.889rem',
    s17: '0.944rem',
    s18: '1rem',
    s20: '1.111rem',
    s21: '1.167rem',
    s22: '1.222rem',
    s24: '1.333rem',
    s26: '1.444rem',
    s32: '1.778rem',
    s34: '1.889rem',
    s36: '2rem',
    s40: '2.222rem',
    s42: '2.333rem',
    s45: '2.5rem',
    s48: '2.6rem',
    s50: '2.778rem',
    s52: '2.889rem',
    s58: '3.222rem',
    s60: '3.333rem',
    s80: '4.444rem',
    s88: '4.889rem',
    s100:'5.555rem',

}
export const baseColors = {
    black:   '#000',
    white:   '#FFF',
    mainRed: '#c5050c',
    toneRed: '#A5050A',
    deepRed: '#810000',
    darkRed: '#A2020A',
    flamingle: '#E8306E',
    offBlack: '#3C3C3C',
    darkerGrey: '#777777',
    darkGrey: '#949494',
    grey: '#CCCCCC',
    lightGrey: '#E0E0E0',
    lightestGrey: '#F3F3F3',
}
export const colors = {
    startDateColor: baseColors.offBlack,
    titleColor:     baseColors.mainRed,
    cardTitleBg:    baseColors.lightestGrey,
    cardBorder:     baseColors.darkGrey,
    cardText:       baseColors.offBlack,
    cardTags:       baseColors.darkGrey,
    copyText:       baseColors.offBlack,    
    titleWhite:     baseColors.white,
    buttonRed:      baseColors.mainRed,
    buttonHoverRed: baseColors.deepRed,
    buttonActiveGrey: baseColors.darkerGrey,
    bgRed:          baseColors.mainRed,
    bgWhite:        baseColors.white,
    bgActiveGrey:   baseColors.lightGrey,
    hoverRed:       baseColors.deepRed,
    promoRed:       baseColors.mainRed,
    categoryGrey:   baseColors.darkerGrey,
    tagGrey:        baseColors.darkerGrey,
    navcardGrey:    baseColors.lightestGrey,
    readMoreText:   baseColors.mainRed,
    linkTextHover:  baseColors.deepRed,
    linkTextActive: baseColors.offBlack,
    linkDateHover:  baseColors.mainRed,
    linkDateActive: baseColors.deepRed, 
    linkVisitedGrey: baseColors.darkerGrey,
    linkActiveGrey:     baseColors.darkGrey,
    cardHeaderBGGrey: baseColors.lightestGrey,
    navMenuBlack:      baseColors.offBlack,
    navMenuBorderGrey: baseColors.grey,
    toneRed: baseColors.toneRed,
    badgerRed: baseColors.mainRed,
    linkTextVisitedLight: baseColors.lightestGrey,
    footerAccent: baseColors.darkRed,
    iconGrey: baseColors.darkGrey,

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
    tabletL: `(min-width: ${size.tabletL})`,
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
        font-weight: bold;
        font-style: italic;
        color: ${colors.titleColor};
        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s32};
        }
    `,
    cardDate: `
        font-family: ${fonts.eaves};
        font-size: ${sizes.s42};
        font-weight: bold;
        font-style: italic;
        color:   ${colors.dateColor};
        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s52};
        }

    `,
    category: `
        font-size: ${sizes.s13};
        font-weight: 800;
        color: ${colors.categoryGrey};
        text-transform: uppercase; 
        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s14};
        }   
    `,

    tag: `
        font-size: ${sizes.s14};
        color: ${colors.categoryGrey};
        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s15};
        } 
    `,
    venue: `
        font-size: ${sizes.s16};
        color: ${colors.cardText};
        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s18};
        } 
    `,
    location: `
        font-weight: bold;
        color: ${colors.cardText};
        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s18};
        } 

    `,
    buttons: `
    display: inline-block;
    width: 100%;
    min-width: 6.5rem;
    background-color: ${colors.buttonRed};
    font-family: ${fonts.verlag};
    font-style: normal;
    font-size: ${sizes.s16};
    line-height: ${sizes.s26};
    font-weight: bold;
    color: ${colors.titleWhite};
    padding: ${sizes.s16};
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    margin: ${sizes.s24} 0 0 ;
    &:first-of-type {
        margin-top: 0;
    }
    &:last-of-type {
        margin-right: 0;
    }
    &:hover {
        background-color: ${colors.buttonHoverRed};
        box-shadow: 4px 4px 6px rgba(0,0,0,0.2);
    }
    &:active {
        background-color: ${colors.buttonActiveGrey};
    }
    @media screen and ${breakpoints.tabletS} {
        width: auto;
        margin-right: ${sizes.s24};
     }
     &--bgimage {
         border: 1px solid ${colors.bgWhite};
         background-color: transparent;
         &:hover {
             background-color: ${colors.buttonActiveGrey};
         }
         &:active {
             color: ${colors.buttonActiveGrey};
             background-color: ${colors.bgWhite};
         }
     }
    `
}