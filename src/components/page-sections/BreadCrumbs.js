import React from "react"
import styled from "styled-components"
import { colors, sizes } from "../css-variables"

const BreadCrumbs = ({ links }) => {
  const BreadCrumbSection = styled.div`
    display: flex;
    max-width: 1080px;
    margin: 0 auto;
  `
  const BreadCrumb = styled.div`
    display: flex;
    margin: 5px 0 5px 5px;
    color: ${colors.copyText};
    font-size: ${sizes.s14};
    a {
      text-decoration: underline;
      margin-right: 5px;
      color: ${colors.copyText};
      cursor: pointer;
    }
    p {
      margin-bottom: 0;
    }
  `
  let lastItem = links[links.length - 1]
  
  let renderedLinks = links.map(link => {
    const notLast = link !== lastItem ? true : false
    return (
      <BreadCrumb>
        <a href={link.url}>
          <p>{link.name}</p>
        </a>
        {notLast && <p>{`>`}</p>}
      </BreadCrumb>
    )
  })
  return <BreadCrumbSection>{renderedLinks}</BreadCrumbSection>
}

export default BreadCrumbs
