import React from "react"
import styled from "styled-components"
import { colors } from "../css-variables"

const BreadCrumbs = ({ links }) => {
  const BreadCrumbSection = styled.div`
    display: flex;
  `
  const BreadCrumb = styled.div`
    display: flex;
    margin: 5px;
    color: ${colors.titleColor};
    a {
      text-decoration: none;
      margin-right: 5px;
      color: ${colors.titleColor};
      cursor: pointer;
    }
    p {
      margin-right: 5px;
    }
  `
  let renderedLinks = links.map(link => {
    return (
      <BreadCrumb>
        <a href={link.url}>
          <p>{link.name}</p>
        </a>
        <p>{`>`}</p>
      </BreadCrumb>
    )
  })
  return <BreadCrumbSection>{renderedLinks}</BreadCrumbSection>
}

export default BreadCrumbs
