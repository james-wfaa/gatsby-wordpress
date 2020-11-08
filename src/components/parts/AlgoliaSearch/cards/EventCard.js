import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { breakpoints, fonts, colors } from "../../../css-variables"

const CardWrapper = styled.div`
  padding: 0;
  margin: 0;
  a {
    cursor: pointer;
    p {
      color: ${colors.offBlack};
      span {
        color: #777777;
      }
    }
  }
  a:hover, a:visited, a:active, a:link { color: #3c3c3c !important}
  h3 {
    color: ${colors.bgRed};
    font-weight: normal;
    font-family: ${fonts.eaves};
    font-size: 26px;
  }

`

const EventCard = ({excerpt, hit, title, type, url}) => {
  return (
    <CardWrapper>
      <Link to={url}>
        <p>{type}</p>
        <h3>{title}</h3>
        {type === "Event" ?
         <p>DATE, TIME | LOCATION</p>
        : null}
        <p><span>Tag 1, tag 2, tag 3</span></p>
        {excerpt ?
        <div dangerouslySetInnerHTML={{__html: excerpt}}></div>
        : null}
      </Link>
    </CardWrapper>
  )
}

export default EventCard
