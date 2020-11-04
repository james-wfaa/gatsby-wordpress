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
    s10: '0.555rem',
    s11: '0.611rem',
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
    s38: '2.111rem',
    s40: '2.222rem',
    s42: '2.333rem',
    s45: '2.5rem',
    s48: '2.6rem',
    s50: '2.778rem',
    s52: '2.889rem',
    s58: '3.222rem',
    s60: '3.333rem',
    s72: '4rem',
    s80: '4.444rem',
    s88: '4.889rem',
    s100:'5.555rem',

}
export const baseColors = {
    black:   '#000',
    white:   '#FFF',
    mainRed: '#c5050c',
    toneRed: '#A5050A',
    flamingle: '#E8306E',
    offBlack: '#3C3C3C',
    darkerGrey: '#777777',
    darkGrey: '#949494',
    grey: '#CCCCCC',
    lightGrey: '#E0E0E0',
    lightestGrey: '#F3F3F3',
    evenlighterGrey: '#F8F8F8',
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
    buttonHoverRed: baseColors.toneRed,
    buttonActiveGrey: baseColors.darkerGrey,
    bgRed:          baseColors.mainRed,
    bgWhite:        baseColors.white,
    bgActiveGrey:   baseColors.lightGrey,
    hoverRed:       baseColors.toneRed,
    promoRed:       baseColors.mainRed,
    categoryGrey:   baseColors.darkerGrey,
    tagGrey:        baseColors.darkerGrey,
    captionGrey:   baseColors.darkerGrey,
    navcardGrey:    baseColors.lightestGrey,
    readMoreText:   baseColors.mainRed,
    linkText:       baseColors.mainRed,
    linkTextHover:  baseColors.toneRed,
    linkTextActive: baseColors.offBlack,
    linkDateHover:  baseColors.mainRed,
    linkDateActive: baseColors.toneRed,
    linkVisitedGrey: baseColors.darkerGrey,
    linkActiveGrey:     baseColors.darkGrey,
    cardHeaderBGGrey: baseColors.lightestGrey,
    navMenuBlack:      baseColors.offBlack,
    navMenuBorderGrey: baseColors.grey,
    navMenuBottomBorder: baseColors.lightGrey,
    toneRed: baseColors.toneRed,
    badgerRed: baseColors.mainRed,
    linkTextVisitedLight: baseColors.lightestGrey,
    footerAccent: baseColors.toneRed,
    iconGrey: baseColors.darkGrey,
    sectionBorder: baseColors.lightestGrey,
    rednavGrey: baseColors.lightGrey,
    navCardVisitedGrey: baseColors.darkerGrey,
    calloutGrey: baseColors.lightestGrey,
    featureImageGrey: baseColors.darkGrey,
    testimonialGrey: baseColors.lightestGrey,
    borderGrey: baseColors.grey,
    bgLightGrey: baseColors.evenlighterGrey,
    mapDetailsText: baseColors.offBlack,
    disabledGrey: baseColors.darkGrey,




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
    desktopS: '1600px',
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
    laptopSMax: `(max-width: ${size.laptopS})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktopS: `(min-width: ${size.desktopS})`,
    desktop: `(min-width: ${size.desktop})`
}

export const mixins = {
    a: `
    {
        color: ${colors.linkText};
        :hover{
            color: ${colors.linkTextHover};
        }
        :active{
            color: ${colors.linkTextActive};
        }
    }`,
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
    textlink: `
        &:link,
        &:visited {
            color: ${colors.linkText};
        }

        &:hover {
            color: ${colors.linkTextHover};
        }
        &:active {
            color: ${colors.linkTextActive};
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
        &--fullwidth {
            width: 100%;
        }
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
     &--alt {
        color: ${colors.buttonRed};
        background-color: ${colors.titleWhite};
        &:hover {
            color: ${colors.buttonActiveGrey};
            background-color: ${colors.bgActiveGrey};
            border: 1px solid ${colors.bgWhite};
        }
        &:active {
            color: ${colors.buttonActiveGrey};
            background-color: ${colors.bgWhite};
        }

     }
     &--altborder {
        border: 1px solid ${colors.buttonRed};
     }
     &--disabled {
        pointer-events: none;
        cursor: default;
        color: ${colors.titleWhite};
        background-color: ${colors.disabledGrey};
        }
    `,
    separator: `{
        height: ${sizes.s36};
        background-color: ${colors.sectionBorder};
        margin: ${sizes.s36} 0;
        @media screen and ${breakpoints.tabletS} {
            margin: ${sizes.s52} 0;

        }
    }`,
    sectionHeader: ` {
        text-align: center;
        position: relative;
        padding-bottom:  ${sizes.s40};
        margin-bottom: ${sizes.s58};
        
        &:after {
            position: absolute;
            bottom: 0;
            left: calc( 50% - ${sizes.s34} );
            height: ${sizes.s8};
            width: calc( ${sizes.s34} * 2 );
            background-color: ${colors.titleColor};
            content: '';
        }
        &.leftAlign {
            text-align: left;
            &:after {
                left: 10%;
            }
        }
        h1,
        h2 {

            color: ${colors.titleColor};
            font-family: ${fonts.eaves};
            font-weight: bold;
            font-style: italic;
            font-size: ${sizes.s36};
            line-height: ${sizes.s40};
            margin: 0 auto;
            max-width: 80%;

            @media screen and ${breakpoints.laptopS} {
                font-size: ${sizes.s42};
                line-height: ${sizes.s52};
                padding: 0;
            }
        }
        

        &.bgimage,
        &.headingAlt {
            h2 {
                color: ${colors.titleWhite}
            }
            &:after {
                background-color: ${colors.bgWhite};
            }
        }

        &.social,
        &.compact {
            margin-bottom: ${sizes.s32};

        }
       }
    }`,
    imageWithCaption: `{
        figure {
            max-width: 254px;
            margin: 0;
            @media screen and ${breakpoints.tabletS} {
                max-width: 344px;
            }

            @media screen and ${breakpoints.tabletL} {
                &.size-full {
                    max-width: 712px;
                }

            }

            img {
                width: 100%;

            }
            figcaption {
                margin-top: ${sizes.s32};
                font-weight: bold;
            }
        }

    }`,
    introHeading: `{
        position: absolute;
        width: 300px;
        left: calc(50% - 150px);
        top: calc(50% - 50px);
        font-style: italic;

        color: white;
        font-size: ${sizes.s32};
        text-align: center;
        text-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);
        span {
            font-weight: bold;
            font-family: ${fonts.eaves};
            font-size: ${sizes.s52};
        }
        @media screen and ${breakpoints.tabletS} {
            width: 450px;
            left: calc(50% - 225px);
            font-size: ${sizes.s60};
            span {
                font-size: ${sizes.s100};
            }
        }
        @media screen and ${breakpoints.laptopS} {
            width: 600px;
            left: calc(50% - 300px);
            top: calc(50% - 50px);
            &.jumbo {
                top: calc(50% - 70px);
            }
        }
    }
    }`,
    contentCardBase: `{
        width: 256px;
        min-height: 502px;
        display: flex;
        flex-flow: column;
        text-align: left;
        position: relative;
    
        border: 1px solid ${colors.cardBorder};
        border-top: 6px solid ${colors.cardBorder};
        background-color: ${colors.bgWhite};
        opacity: 0.9; 
    
        & a{
            text-decoration: none;
        }
    
        &_wrapper {
            position: relative;
    
        }
        .imgzoomlink{
            max-width: 100%;
            overflow: hidden;
        }
        .img, gatsby-image-wrapper {
            max-width: 100%;
            height: auto;
            transition: transform .2s; /* Animation */
            overflow: hidden;
    
            &:link {
                text-decoration: none;
            }
    
            /* visited link */
            &:visited {
            }
    
            /* mouse over link */
            &:hover {
                transform: scale(1.05);
            }
    
            /* selected link */
            &:active {
                cursor:default;
                filter: brightness(80%);
            }
        }
        .category {
            font-size: ${sizes.s13};
            line-height: ${sizes.s15};
            font-weight: 800;
            text-transform: uppercase;
            position: relative;
            padding-bottom: ${sizes.s16};
            color: ${colors.categoryGrey};
    
            @media screen and ${breakpoints.tabletS} {
                font-size: ${sizes.s14};
                line-height: ${sizes.s16};
                padding-bottom: ${sizes.s16};
            }
        }   
        .contentwrap {
            position: relative;
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            flex: 1;
            &:before {
                position: absolute;
                content: '';
                top: -11px;
                left: ${sizes.s24};
                height: 22px;
                width: 9px;
                z-index: 1;
                border-left: 1.5px solid ${colors.bgRed};
                border-right: 1.5px solid ${colors.bgRed};
                transform: skew(135deg);
    
                @media screen and ${breakpoints.tabletS} {
                    top: -15px;
                    left: ${sizes.s45};
                    height: 30px;
                    width: 14px;
                }
            }
        }
    
        .venue {
            position: ;
            font-size: ${sizes.s18};
        }
        .location {
            position: relative;
            font-size: ${sizes.s18};
            font-weight: bold;
            padding-bottom: ${sizes.s16};
        }
     
        .excerpt {
            font-size: ${sizes.s16};
            line-height: ${sizes.s22};
            padding-bottom: ${sizes.s16};
            @media screen and ${breakpoints.tabletS} {
                padding-bottom: ${sizes.s32};
            }
            &.readmore {
                color: ${colors.titleColor};
                text-transform: uppercase;
                &:link {
                    text-decoration: none;
                }
    
                /* visited link */
                &:visited {
                    color: ${colors.linkVisitedGrey};
                }
    
                /* mouse over link */
                &:hover {
                    color: ${colors.linkTextHover};
                    text-decoration: underline;
                    cursor:pointer;
                }
    
                /* selected link */
                &:active {
                    color: ${colors.linkActiveGrey};
                    text-decoration: underline;
                    cursor:default;
                }
            }
        }

        .headersection {
            position: relative;
            background-color: ${colors.cardHeaderBGGrey};
            margin: 0px;
            padding-left: ${sizes.s16};
            padding-right: ${sizes.s16};
            padding-top: ${sizes.s32};
            min-height: 80px;
            overflow: hidden;
            overflow-y: visible;
            border-bottom: 1px solid ${colors.cardHeaderBGGrey};
            .headerImg{
                display: none;
            }
            @media screen and ${breakpoints.tabletS} {
                padding-left: ${sizes.s32};
                padding-right: ${sizes.s32};
            }
            @media screen and ${breakpoints.laptopS} {
                &--L{
                    &:after {
                        position: absolute;
                        top: 0;
                        right: -102px;
                        height: 100%;
                        width: 300px;
                        content: '';
                        background-color: ${colors.bgWhite} !important;
                        transform: skew(135deg);
                    }
                }
                &--XL{
                    &:after {
                        position: absolute;
                        top: 0;
                        right: -60px;
                        height: 100%;
                        width: 350px;
                        content: '';
                        background-color: ${colors.bgWhite} !important;
                        transform: skew(135deg);
                    }
                }
                &--XXL{
                    &:after {
                        position: absolute;
                        top: 0;
                        right: -60px;
                        height: 100%;
                        width: 450px;
                        content: '';
                        background-color: ${colors.bgWhite} !important;
                        transform: skew(135deg);
                    }
                }
                
            }
            .date {
                font-family: ${fonts.eaves};
                position: relative;
                padding-top: ${sizes.s16};
                padding-bottom: ${sizes.s24};
                font-weight: bold;
                font-size: ${sizes.s42};
                line-height: ${sizes.s42};
                font-style: italic;
                color: ${colors.startDateColor};
                @media screen and ${breakpoints.tabletS} {
                    font-size: ${sizes.s52};
                    line-height: ${sizes.s52};
                    top: -3px;
                    padding-top: ${sizes.s32};
                    padding-bottom: ${sizes.s32};
                }
                & a:link {
                    text-decoration: none;
                    color: ${colors.startDateColor};
                }
        
                /* visited link */
                & a:visited {
                    color: ${colors.linkVisitedGrey};
                }
        
                /* mouse over link */
                & a:hover {
                    color: ${colors.linkDateHover};
                    text-decoration: underline;
                    cursor:pointer;
                }
        
                /* selected link */
                & a:active {
                    color: ${colors.linkDateActive};
                    text-decoration: underline;
                    cursor:default;
                }
            }
    
        }
        .contentsection {
            position: relative;
            margin: 0px;
            padding-top: ${sizes.s24};
            padding-bottom: ${sizes.s12};
            display: flex;
            flex-flow: column;
            flex: 1 1 auto;
            @media screen and ${breakpoints.tabletS} {
                padding-top: ${sizes.s32};
                padding-bottom: ${sizes.s32};
    
            }
            @media screen and ${breakpoints.laptopS} {
                &--L, &--XL, &--XXL{
                    padding-top: ${sizes.s32};
                    padding-bottom: ${sizes.s32};
                    flex-flow: row;
                }
            }
    
            &:after {
                position: absolute;
                content: '';
            }
            .columnwrap {
                position: relative;
                display: flex;
                flex-flow: column;
                padding-left: ${sizes.s16};
                padding-right: ${sizes.s16};
                @media screen and ${breakpoints.tabletS} {
                    padding-left: ${sizes.s32};
                    padding-right: ${sizes.s32};
                }
                @media screen and ${breakpoints.laptopS} {
                    &--L, &--XL, &--XXL{
                        width: 50%;
                        padding-left: ${sizes.s32};
                    }
                }
                .title {
                    padding-bottom: 0px;
                }
                .category {
                    @media screen and ${breakpoints.tabletS} {
                        padding-bottom: ${sizes.s32};
                    }
                }
                .category--L,
                .category--XL,
                .category--XXL {
                    @media screen and ${breakpoints.tabletS} {
                        padding-bottom: ${sizes.s16};
                    }
                }
                &--M, &--S{
                    :nth-last-child(1){
                        justify-content: space-between;
                        flex: 1 1 auto;
                    }
                }
                :nth-last-child(1){
                    justify-content: space-between;
                    @media screen and ${breakpoints.laptopSMax} {
                        flex: 1 1 auto;
                    }
                }
            }
    
        }
    
        .title {
            position: relative;
            top: -3px;
            padding-bottom: ${sizes.s24};
            font-size: ${sizes.s24};
            line-height: ${sizes.s26};
            text-decoration: none;
            margin: 0px;
            @media screen and ${breakpoints.tabletS} {
                font-size: ${sizes.s32};
                line-height: ${sizes.s36};
                top: -3px;
                padding-bottom: ${sizes.s32};
            }
            &--L, &--XL, &--XXL {
                z-index: 1;
            }
            & a:link {
                text-decoration: none;
                color: ${colors.titleColor};
            }
            /* visited link */
            & a:visited {
                color: ${colors.linkVisitedGrey};
            }
            /* mouse over link */
            & a:hover {
                color: ${colors.linkTextHover};
                text-decoration: underline;
                cursor:pointer;

            }
            /* selected link */
            & a:active {
                color: ${colors.linkActiveGrey};
                text-decoration: underline;
                cursor:default;
            }
        }
        
    }`,
    contentCardSizes:`{
        &--notsmall{
            @media screen and ${breakpoints.tabletS} {
                width: 528px;
                min-height: 680px;
    
            }
            @media screen and ${breakpoints.laptopS} {
                .columnwrap:nth-child(1) {
                    border-right: 1px solid ${colors.cardBorder};
                }
                .title {
                    top: -3px;
                }
                .date {
                    font-size: ${sizes.s52};
                    line-height: ${sizes.s52};
                }
                .excerpt {
                    font-size: ${sizes.s18};
                    line-height: ${sizes.s26};
                    padding-bottom: 0px;
                }
            }
        }
        &--S{
            @media screen and ${breakpoints.tabletS} {
                width: 344px;
                max-width: 344px;
                min-height: 680px;
            }
        }
        &--M{
            .columnwrap:nth-child(1) {
                border-right: none;
            }
        }
    
        &--L{
            @media screen and ${breakpoints.laptopS} {
                width: 712px;
    
            }
        }
        &--XL{
            @media screen and ${breakpoints.laptopS} {
                width: 896px;
            }
        }
        &--XXL{
            @media screen and ${breakpoints.laptopS} {
                width: 1080px;
            }
        }
        &--Wide{
            @media screen and ${breakpoints.laptopS} {
                width: 1080px;
                flex-flow: row;
                min-height: 230px;
                border-top: 1px solid ${colors.cardBorder};
                &:before {
                    position: absolute;
                    content: "";
                    display: block;
                    width: 345px;
                    height: 6px;
                    top: -6px;
                    left: -1px;
                    background-color: ${colors.cardBorder};
                }
                .headersection {
                    border-bottom: none;
                    padding-left: 0px;
                    padding-right: 0px;
                    flex: 0 0 344px;
                    .headerImg{
                        display: block;
                        width: 344px;
                        img {
                            margin-bottom: 0;
                        }
                    }
                }
                .date {
                    padding-left: ${sizes.s32};
                    padding-right: ${sizes.s32};
                    padding-top: ${sizes.s28};
                }
                .title {
                    padding-left: ${sizes.s32};
                    padding-right: ${sizes.s32};
                    padding-top: ${sizes.s28};
                }
                .category {
                    padding-left: ${sizes.s32};
                }
                .contentwrap {
                    flex:2;
                    .bodyImg{
                        display: none;
                    }
                    &:before {
                            top: 37px;
                            left: -9px;
                            height: 30px;
                            width: 14px;
                    }
                }
                .contentsection {
                    flex-flow: row;
                }
                .columnwrap {
                    flex:1;
                }
    
            }
        }
    }`
}