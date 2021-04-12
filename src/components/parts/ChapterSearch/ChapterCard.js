import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints, sizes, fonts, colors } from "../../css-variables"

const CardWrapper = styled.div`
  
  margin: 0;
  max-width: 716px;
  text-align: left;
  padding: 0 32px 32px;
  @media screen and ${breakpoints.tabletL} {
    padding: 0 0 32px 0;
  }
  .cardType {
    font-size: ${sizes.s14};
    line-height: ${sizes.s14};
    color: ${colors.categoryGrey};
    margin-bottom: ${sizes.s16};
    font-weight: 800;
    text-transform: uppercase;
  }
  .excerpt,
  .excerpt > * {
    font-size: ${sizes.s18};
    line-height: ${sizes.s26};
    a:link{
      color: ${colors.bgRed} !important;
      text-decoration: underline;
    }
  }
  a {
    cursor: pointer;
    p {
      margin: 0;
      color: ${colors.offBlack};
    }
    p:not(:last-child) {
      padding-bottom: 16px;
    }
    h3 {
      text-decoration: underline;
    }
  }
  a:hover,
  a:visited,
  a:active,
  a:link {
    color: #3c3c3c !important;
  }
  h3 {
    margin: 0;
    padding-bottom: 16px;
    color: ${colors.bgRed};
    font-weight: bold;
    font-style: italic;
    font-family: ${fonts.eaves};
    font-size: 24px;
    @media screen and ${breakpoints.tabletS} {
      font-size: 26px;
    }
  }
  &:not(.topResult) {
    ::before {
      content: "";
      display: inline-block;
      height: 8px;
      width: 100%;
      background-color: ${colors.cardTitleBg};
      margin-bottom: 26px;
    }
  }
  &.topResult {
    border: 1px solid ${colors.cardBorder};
    margin-bottom: 32px;
    max-width: 760px;
    & > a > p,
    div {
      padding-left: 16px;
      padding-right: 16px;
      @media screen and ${breakpoints.tabletS} {
        padding-left: 32px;
        padding-right: 32px;
      }
    }
  }
`

const ChapterCard = ({ chapter }) => {
  const url = chapter?.chapterDetails?.csUrl
  return (
    <CardWrapper>
      <div className="cardType">Chapter/Groups</div>
      { url ? (
        <Link to={`/groups/${chapter.chapterDetails.csUrl}`}>
        <h3>{chapter.title}</h3>
          {chapter.content ? (
            <div
              className="excerpt"
              dangerouslySetInnerHTML={{ __html: chapter.content }}
            ></div>
          ) : null}
        </Link>

      ) : (
        <>
          <h3>{chapter.title}</h3>
          {chapter?.content ? (
            <div
              className="excerpt"
              dangerouslySetInnerHTML={{ __html: chapter.content }}
            ></div>
          ) : null}
        </>
      )
      }

      
    </CardWrapper>
  )
}

export default ChapterCard
