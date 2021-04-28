import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { breakpoints, fonts, colors, sizes, mixins } from "../../../css-variables"
import TagList from "../../TagList"


const CardWrapper = styled.div`
  padding: 0 0 32px 0;
  margin: 0;
  max-width: 716px;
  .cardType {
    font-size: 13px;
    text-transform: uppercase;
    color: ${colors.categoryGrey};
    font-weight: 800;
    @media screen and ${breakpoints.tabletS} {
      font-size: 14px;
    }
    margin-bottom: ${sizes.s16};
  }
  .tags {
    font-size: 14px;
    color: ${colors.categoryGrey};
    font-weight: bold;
    @media screen and ${breakpoints.tabletS} {
      font-size: 15px;
    }
  }
  .excerpt, .excerpt > * {
    font-size: 16px;
    @media screen and ${breakpoints.tabletS} {
      font-size: 18px;
    }
    p:last-child {
      margin-bottom: 0;
    }
    margin-bottom: ${sizes.s16};  
  }
  a {
    cursor: pointer;
    text-decoration: underline;
    color: ${colors.bgRed};
    
  }
  a:hover, a:visited, a:active { 
    color: ${colors.linkTextHover};
  }
  p {
    margin: 0;
    color: ${colors.offBlack};
  }
  p:not(:last-child) {
    padding-bottom: 16px;
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
  .datetime {
    font-weight: bold;
  }
  &:not(.topResult) {
    ::before {
    content: "";
    display: inline-block;
    height: 8px;
    width: 100%;
    background-color: ${colors.cardTitleBg};
    margin-bottom: 32px;
    }
  }
  &.topResult {
    border: 1px solid ${colors.cardBorder};
    margin-bottom: 32px;
    max-width: 760px;
    & > a > p, 
    > div,
    > section {
      padding-left: 16px;
      padding-right: 16px;
      @media screen and ${breakpoints.tabletS} {
        padding-left: 32px;
        padding-right: 32px;
      }
    }
  }
  .arrow {
    ${mixins.arrow}
  }
`

const CardHeader = styled.div`
  background-color: ${colors.cardBorder};
  span {
    color: ${colors.bgWhite};
    font-size: 14px;
    font-weight: 800;
  }
`

const DetailsDiv = styled.div`
  background: ${colors.cardTitleBg};
  padding: 16px 0 8px 0;
  margin-bottom: 24px;
`
const ExternalUrlDiv = styled.div`
  font-weight: bold;
  margin: 0 0 ${sizes.s16};
  `

const PostCard = ({ initialBlock, excerpt, title, topResult, url, categories, category, linkFormat, acfAlternatePostType, videoFormat, tags }) => {
  

  // modify this to check for linkFormat
  let type = categories[0].name === "Classnote" ? 'STORY' : 'STORY'

  let altPostType = acfAlternatePostType?.alternateposttype 
      ? acfAlternatePostType.alternateposttype 
      : videoFormat?.vimeoId
        ? "Video"
        : null
    
    const displayCategory = categories[0].name === "Classnote"
      ? "ALUMNI NOTES"
      : category 
        ? category
        : altPostType 
          ? altPostType 
          : null

    
    const external = linkFormat?.linkUrl
    const finalUrl = external
      ? linkFormat.linkUrl
      : url
    const target = external
      ? '_blank'
      : '_self'
    const linkTitle = external
      ? 'Link will open in a new tab/window'
      : ''
    let externalUrl = external
      ? external.substring(external.indexOf('//')+2)
      : null

    if (externalUrl) {
      externalUrl = externalUrl.substring(0, externalUrl.indexOf('/'))
    }

  return (
    <CardWrapper className={topResult ? "topResult" : null}>
      
        {topResult ? (
          <CardHeader>
            <span>BEST BET</span>
          </CardHeader>
        ) : null}
        {topResult ? (
          <DetailsDiv>
            <div className="cardType">{displayCategory}</div>
            { external && (
                <h3><a href={finalUrl} title={linkTitle} target={target}>{title} <span className="arrow"></span></a></h3>
              )
            }
            { !external && (
              <h3><Link to={url}>{title}</Link></h3>
            )}
          </DetailsDiv>
        ) : (
          <>
            <div className="cardType">{displayCategory}</div>
            { external && (
              <>
                <h3><a href={finalUrl} title={linkTitle} target={target}>{title} <span className="arrow"></span></a></h3>
                <ExternalUrlDiv>{externalUrl}</ExternalUrlDiv>
              </>
              )
            }
            { !external && (
              <h3><Link to={url}>{title}</Link></h3>
            )}
            
          </>
        )}
        
        
        {initialBlock ? (
          <div
            className="excerpt"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          ></div>
        ) : null}
        { tags && (
          <TagList
          className={`tag`}
          items={tags}
          globalSearch
      />
        )}
    </CardWrapper>
  )
}

export default PostCard
