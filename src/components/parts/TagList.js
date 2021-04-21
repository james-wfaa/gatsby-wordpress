import React from "react"
import styled from 'styled-components'
import { colors, sizes, breakpoints } from '../css-variables'

const TagList = ({ items, globalSearch, className, filterChange }) => {
    const limitedTags = items.slice(0,3)
    
    const globalClass = globalSearch
        ? ' global'
        : ''
    const tagsList = limitedTags.map((item) => {
        const filterType = (item?.type && item.type === 'product')
            ? 'product'
            : 'filter'

        if (item.name !== 'Uncategorized') {
            return globalSearch
            ? (
                <div className="tag__item" key={item.slug}>
                    <span>{item.name}</span>
                </div>
            )
            :  (
                <div className="tag__item" key={item.slug}>
                    <a className="tag__link" href={`/news/all?${filterType}=${item.slug}`} onClick={() => filterChange(filterType, item.slug)}><span>{item.name}</span></a>
                </div>
            )
        }
        return null
        
    })

    return (
        <section className={`${className}${globalClass}`}>{tagsList}</section>
    )
}

const StyledTagList = styled(TagList)`

.tag__item{
    display: inline-block;
    margin-left: 4px;
    padding-left: 2px;
    position: relative;
    padding-right: 4px;
    &:first-child {
        margin-left: 0;
        padding-left: 0;
    }
    &:after  {
        position: absolute;
        top: 0;

        right: -1px;
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
&.global {
    padding: 0 0 ${sizes.s16};
    color: ${colors.tagGrey};
}
`

export default StyledTagList