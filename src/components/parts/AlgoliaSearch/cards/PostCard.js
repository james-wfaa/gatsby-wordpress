import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { breakpoints, fonts, colors } from "../../../css-variables"

const CardWrapper = styled.div`
  ::before {
    content: "";
    display: inline-block;
    height: 8px;
    width: 100%;
    background-color: #F3F3F3;
    margin-bottom: 32px;
  }
  padding: 0 0 32px 0;
  margin: 0;
  a {
    cursor: pointer;
    p {
      margin: 0;
      color: ${colors.offBlack};
      span {
        font-size: 14px;
        color: #777777;
      }
    }
    p:not(:last-child) {
      padding-bottom: 16px;
    }
  }
  a:hover, a:visited, a:active, a:link { color: #3c3c3c !important}
  h3 {
    margin: 0;
    padding-bottom: 16px;
    color: ${colors.bgRed};
    font-weight: normal;
    font-family: ${fonts.eaves};
    font-size: 26px;
  }
  .datetime {
    font-weight: bold;
  }
`

const PostCard = ({excerpt, hit, initialBlock, title,  url}) => {

  let truncatedText = initialBlock.length < 325 ? initialBlock : initialBlock.substr(0, 326) + "..."

  return (
    <CardWrapper>
      <Link to={url}>
        <p><span>STORY</span></p>
        <h3>{title}</h3>
        <p><span>Tag 1, tag 2, tag 3</span></p>
        {initialBlock ?
        <div dangerouslySetInnerHTML={{__html: truncatedText}}></div>
        : null}
      </Link>
    </CardWrapper>
  )
}

export default PostCard
