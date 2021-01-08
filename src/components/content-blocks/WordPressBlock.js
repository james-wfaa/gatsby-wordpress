import React from 'react'
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'



const WordPressBlock = ({className, block}) => {
    console.log('WordPressBlock - block:',block)

    return (
        <div className={className} dangerouslySetInnerHTML={{__html: block}} />
    )
}

const StyledWordPressBlock = styled(WordPressBlock)`
> p,
> ul,
> h2,
> h3,
> div,
> table,
> div.callout,
> div.call-out,
.core-freeform > p,
.core-freeform > ul,
.core-freeform > h2,
.core-freeform > h3,
.core-freeform > div,
.core-freeform > table,
.core-freeform > div.callout,
.core-freeform > div.call-out
 {
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
    @media screen and ${breakpoints.tabletL} {
        max-width: 650px;
    }
    @media screen and ${breakpoints.laptopS} {
        margin-left: 0;
        max-width: 712px;
    }

}
ul {
    list-style-position: inside;
}
a {
    ${mixins.a}
}
.core-freeform {
    margin-bottom: ${sizes.s32};
}
`


export default StyledWordPressBlock