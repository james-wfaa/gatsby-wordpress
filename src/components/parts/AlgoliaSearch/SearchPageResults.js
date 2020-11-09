import React, {useState, useEffect} from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'
import { breakpoints, colors } from "../../css-variables"
import {
  connectStateResults,
  Highlight,
  Index,
  Snippet,
  connectHits
} from "react-instantsearch-dom"
import Hits from './SearchHits'

const CustomHits = connectHits(Hits)

const ResultsWrapper = styled.div`
  width: 80%;
  max-width: 760px;
  margin: 0 auto;
  a {
    text-decoration: none;
    span {
      font-family: "Verlag A", "Verlag B";
      color: ${colors.bgRed}
    }
  }
`

const HitCounterWrapper = styled.div`
  margin-top: 54px;
  p {
    text-align: center;
  }
`



const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits
  return hitCount > 0 ? (
    <HitCounterWrapper>
      <p>Displaying 10 of {hitCount} result{hitCount !== 1 ? `s` : ``}</p>
    </HitCounterWrapper>
  ) : null
})



const HitsInIndex = ({ index }) => {
  return (
    <Index indexName={index.name}>
      <HitCount />
      <CustomHits />
    </Index>
  )
}

const SearchResult = ({ indices, className }) => {
  return (
  <ResultsWrapper>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </ResultsWrapper>

  )
}

export default SearchResult