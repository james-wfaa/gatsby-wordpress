import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { sizes, colors, mixins } from '../css-variables'

import StyledPageSectionHeader from "./PageSectionHeader"

const PaginationNav = ({className, basepath, page, totalPages, isFirst, isLast }) => {
    console.log(isFirst)
    console.log(isLast)
    const prevSlug = (page - 1).toString()
    const prev = page - 1 === 1 ? basepath : `${basepath}${prevSlug}`
    const nextSlug = (page + 1).toString()
    const next = `${basepath}${nextSlug}`
    console.log(prev)
    console.log(next)
    return (
        <div className={className}>    
            {!isFirst && (
                <Link className="arrowNav" to={prev} rel="prev" >
                &lt; 
                </Link>
            )}
            {Array.from({ length: totalPages }, (_, i) => (
                <Link 
                key={`pagination-number${i + 1}`} 
                to={`${basepath}${i === 0 ? "" : i + 1}`}
                activeClassName="active"
                >
                {i + 1}
                </Link>
            ))}
            {!isLast && (
                <Link className="arrowNav" to={next} rel="next">
                &gt;
                </Link>
            )}</div>
    )
}

const StyledPaginationNav = styled(PaginationNav)`
margin: ${sizes.s40} auto;
a {
    
    color: ${colors.linkVisitedGrey};
    font-size: ${sizes.s26};
    font-weight: bold;
    display: inline-block;
    margin-right: ${sizes.s13};
    text-decoration: none;
    &[rel=prev],
    &[rel=next],
    &.active {
        color: ${colors.badgerRed};
    }
    &:hover {
        text-decoration: underline;
    }
}`
export default StyledPaginationNav