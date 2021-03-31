import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { breakpoints, fonts, colors } from "../../../css-variables"

const CardWrapper = styled.div`
  padding: 0 0 32px 0;
  margin: 0;
  max-width: 716px;
  .cardType {
    font-size: 13px;
    color: ${colors.categoryGrey};
    font-weight: 800;
    @media screen and ${breakpoints.tabletS} {
      font-size: 14px;
    }
  }
  .tags {
    font-size: 14px;
    color: ${colors.categoryGrey};
    font-weight: bold;
    @media screen and ${breakpoints.tabletS} {
      font-size: 15px;
    }
  }
  .datetime,
  .excerpt, .excerpt > * {
    font-size: 16px;
    @media screen and ${breakpoints.tabletS} {
      font-size: 18px;
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
  }
  a:hover, a:visited, a:active, a:link { color: #3c3c3c !important}
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
    padding-bottom: 24px;
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
    & > a > p, div {
      padding-left: 16px;
      padding-right: 16px;
      @media screen and ${breakpoints.tabletS} {
        padding-left: 32px;
        padding-right: 32px;
      }
    }
  }

`

const CardHeader = styled.div`
  background-color: ${colors.cardBorder};
  p {
    color: ${colors.bgWhite};
    font-size: 14px;
    .bestBet {
      color: #00CCFF;
    }
  }
`

const DetailsDiv = styled.div`
  background: ${colors.cardTitleBg};
  padding: 16px 0 0 0;
  margin-bottom: 24px;
`

const PageCard = ({excerpt, hit, title, topResult, url}) => {

  return (
    <CardWrapper className={topResult ? "topResult" : null}>
      <Link to={url}>
        {topResult ?
        <CardHeader>
          <p>BEST BET</p>
        </CardHeader>
        : null}
        {topResult ?
        <DetailsDiv>
          <p><span className="cardType">PAGE</span></p>
          <h3>{title}</h3>
        </DetailsDiv>
        :
        <>
          <p><span className="cardType">PAGE</span></p>
          <h3>{title}</h3>
        </>
        }
        <p><span className="tags">Tag 1, tag 2, tag 3</span></p>
        {excerpt ?
        <div className="excerpt" dangerouslySetInnerHTML={{__html: excerpt}}></div>
        : null}
      </Link>
    </CardWrapper>
  )
}

export default PageCard
