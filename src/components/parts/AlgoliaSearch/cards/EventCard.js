import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { breakpoints, fonts, colors } from "../../../css-variables"

const CardWrapper = styled.div`
  padding: 0 0 32px 0;
  margin: 0;
  max-width: 716px;
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
    p, h3 {
      padding-left: 32px;
      padding-right: 32px;
    }
  }
`

const CardHeader = styled.div`
  background-color: ${colors.cardBorder};
  margin-bottom: 32px;
  p {
    color: ${colors.bgWhite};
    font-size: 14px;
    padding-left: 32px;
    .bestBet {
      color: #00CCFF;
    }
  }
`

const EventCard = ({date, excerpt, hit, location, title, topResult, type, url}) => {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let parsedDate = new Date(date * 1000).toLocaleDateString('en-US', options)
  let parsedTime = new Date(date * 1000).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})

  return (
    <CardWrapper className={topResult ? "topResult" : null}>
      <Link to={url}>
        {topResult ?
        <CardHeader>
          <p>BEST BET <span className="bestBet">(TOP SEARCH RESULT)</span></p>
        </CardHeader>
        : null}
        <p><span>{type.toUpperCase()}</span></p>
        <h3>{title}</h3>
        <p className="datetime">{parsedDate}, {parsedTime} | {location}</p>
        <p><span>Tag 1, tag 2, tag 3</span></p>
        {excerpt ?
        <div dangerouslySetInnerHTML={{__html: excerpt}}></div>
        : null}
      </Link>
    </CardWrapper>
  )
}

export default EventCard
