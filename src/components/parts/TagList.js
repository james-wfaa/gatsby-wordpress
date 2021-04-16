import React from "react"
import styled from 'styled-components'
import { colors, sizes, breakpoints } from '../css-variables'

const TagList = ({ items, className }) => {
    const limitedTags = items.slice(0,3)
    const tagsList = limitedTags.map((item) => {
        const filterType = (item?.type && item.type === 'product')
            ? 'product'
            : 'filter'
        return (
        
            <div className="tag__item" key={item.slug}>
                <a className="tag__link" href={`/news/all?${filterType}=${item.slug}`}><span>{item.name}</span></a> 
            </div>
        )
    })
      
    return (
        <section className={className}>{tagsList}</section>
    )
}

const StyledTagList = styled(TagList)`

.tag__item{
    display: inline-block;
    padding-left: 4px;
    position: relative;
    padding-right: 4px;
    &:after  {
        position: absolute;
        top: 0;
       
        right: -2px;
        bottom: 0;
        content: ', ';
    }
    &:last-child {
        &:after {
            content: '';
        }
    }
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