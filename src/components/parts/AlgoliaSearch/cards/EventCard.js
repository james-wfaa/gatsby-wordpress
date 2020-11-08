import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const CardWrapper = styled.div`
  padding: 5px;
  border: 1px solid black;
  a {
    cursor: pointer;
  }
`

const EventCard = ({title, url}) => {
  return (
    <CardWrapper>
      <Link to={url}>
        <p>{title}</p>
      </Link>
    </CardWrapper>
  )
}

export default EventCard
