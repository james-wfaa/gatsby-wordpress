import React from "react"
import styled from "styled-components"
import { colors, sizes, breakpoints } from "../css-variables"

const BreadCrumbs = ({ links, nounderline }) => {
  const BreadCrumbSection = styled.div`
    display: none;
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;
    @media screen and ${breakpoints.tablet} {
      display: flex;
    }
  `
  const BreadCrumb = styled.div`
    display: flex;
    margin: 12px 0 5px 3px;
    color: ${colors.copyText};
    font-size: ${sizes.s14};
    a {
      margin-right: 5px;
      color: ${colors.copyText};
      cursor: pointer;
      &.noUnderline{
        text-decoration: none;
      }
      &:hover{
        color:${colors.linkText};
      }
      &:active{
        color:${colors.linkTextHover};
      }
    }
    p {
      margin-bottom: 0;
      
    }
  `
  let underline = nounderline ? 'noUnderline' : null;
  let lastItem = links[links.length - 1]

  let renderedLinks = links.map(link => {
    const notLast = link !== lastItem ? true : false
    return (
      <BreadCrumb>
        <a href={link.url} className={underline}>
          <p>{link.name}</p>
        </a>
        {notLast && <p>{`>`}</p>}
      </BreadCrumb>
    )
  })
  return <BreadCrumbSection>{renderedLinks}</BreadCrumbSection>
}

export default BreadCrumbs
