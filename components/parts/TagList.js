import React from "react"
import styled from 'styled-components'
import { colors, sizes, breakpoints } from '../css-variables'

const TagList = ({ items, className }) => {
    const itemsList = items.map((item) => (
        <div className="tag__item" key={item.tag}>
            <a className="tag__link" href={item.link}><span>{item.tag}</span>,</a>
        </div>
      ))
      
        return (
          <section className={className}>{itemsList}</section>
        )
}

const StyledTagList = styled(TagList)`

.tag__item{
    display: inline-block;
}
.tag__link {
    font-size: ${sizes.s14};
    line-height: ${sizes.s20};
    position: relative;
    display: inline-block;
    color: ${colors.categoryGrey};
    text-decoration: underline;
    @media screen and ${breakpoints.tabletL} {
        font-size: ${sizes.s15};
        line-height: ${sizes.s22};
    }
    &:visited {
        color: ${colors.categoryGrey};
    }
    
    &:hover {
        color: ${colors.linkTextHover};
    }
    &:active {
        color: ${colors.linkTextActive};
    }
    
}
`

export default StyledTagList