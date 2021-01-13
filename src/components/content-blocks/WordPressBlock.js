import React from 'react'
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'



const WordPressBlock = ({className, block}) => {
    if (block) {
        //console.log('WordPressBlock - block:',block)
    }

    return (
        <>
        { block && (
            <div className={className} dangerouslySetInnerHTML={{__html: block.originalContent}} />
        ) }
        </>
    )
}

const StyledWordPressBlock = styled(WordPressBlock)`

text-align: left;
min-width: 300px;
width: 100%;
max-width: 303px;
margin-left: auto;
margin-right: auto;

@media screen and ${breakpoints.tabletS} {
    max-width: 536px;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;

}
@media screen and ${breakpoints.laptopS} {
    margin-left: 0;
    max-width: 712px;
}

>h2,
>h3{
    font-size: ${sizes.s32};
    font-family: ${fonts.eaves};
    font-weight: bold;
    font-style: italic;
    line-height: ${sizes.s36};
    margin-bottom: ${sizes.s32};
    color: ${colors.titleColor};
    @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s36};
        line-height: ${sizes.s42};

    }

}
>h3 {
    font-size: ${sizes.s26};
    margin-bottom: ${sizes.s24};
    line-height: ${sizes.s32};

}

ul {
    list-style-position: inside;
    margin-left: 0;
    @media screen and ${breakpoints.tabletS} {
        margin-left: ${sizes.s24};
    }
}
li{
    margin-bottom: ${sizes.s12};
}
a {
    ${mixins.a}
}
.core-freeform {
    margin-bottom: ${sizes.s32};
}

> p, 
> ul,
> h2,
> h3,
>.wp-block-image {
    min-width: 300px;
    max-width: 712px;
    margin-left: auto;
    margin-right: auto;
}
`


export default StyledWordPressBlock