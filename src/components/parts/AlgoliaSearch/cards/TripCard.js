import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import TagList from "../../TagList"

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
  p {
    margin: 0;
    color: ${colors.offBlack};
  }
  p:not(:last-child) {
    padding-bottom: 16px;
  }
  a {
    cursor: pointer;
    text-decoration: underline;
    color: ${colors.bgRed};
    
  }
  a:hover, a:visited, a:active { 
    color: ${colors.linkTextHover};
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

const TripCard = ({startDate, longStartDate, excerpt, hit, city, state, title, topResult, type, tags, url}) => {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let parsedDate = longStartDate || new Date(parseInt(startDate)).toLocaleDateString('en-US', options)
  let locationString = city && state ? `| ${city}, ${state}` : ''

  return (
    <CardWrapper className={topResult ? "topResult" : null}>
        {topResult ?
        <CardHeader>
          <p>BEST BET</p>
        </CardHeader>
        : null}
        {topResult ?
        <DetailsDiv>
          <p><span className="cardType">TRIP</span></p>
          <h3><Link to={url}>{title}</Link></h3>
          <p className="datetime">{parsedDate} {locationString}</p>
        </DetailsDiv>
        :
        <>
          <p><span className="cardType">TRIP</span></p>
          <h3><Link to={url}>{title}</Link></h3>
          <p className="datetime">{parsedDate} {locationString}</p>
        </>
        }
        {excerpt ?
        <div className="excerpt" dangerouslySetInnerHTML={{__html: excerpt}}></div>
        : null}
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

export default TripCard
