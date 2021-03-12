import React, { useState } from "react"
import styled from 'styled-components'
import { colors } from "../../css-variables"
import {
  connectStateResults,
  Index,
  connectHits,
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

const TotalWrapper = (props) => {
  const [firstHit, setFirstHit] = useState(1)
  const [lastHit, setLastHit] = useState(1)

  const hitHandler = (first, last) => {
    setFirstHit(first);
    setLastHit(last);
  }

  return (
    <>
      <HitCount firstHit={firstHit} lastHit={lastHit} />
      <CustomHits hitHandler={(first, last) => hitHandler(first, last)} />
    </>
  )
}

const HitCount = connectStateResults(({ searchResults, firstHit, lastHit }) => {
  const hitCount = searchResults && searchResults.nbHits
  return hitCount > 0 ? (
    <HitCounterWrapper>
      {firstHit === 1 ?
        <p>Displaying {searchResults.hitsPerPage < hitCount ? searchResults.hitsPerPage : hitCount} of {hitCount} result{hitCount !== 1 ? `s` : ``}</p>
        :
        <p>Displaying {firstHit}-{lastHit} of {hitCount} result{hitCount !== 1 ? `s` : ``}</p>
      }
    </HitCounterWrapper>
  ) : null
})



const HitsInIndex = ({ index }) => {
  return (
    <Index indexName={index.name}>
      <TotalWrapper />

    </Index>
  )
}

const SearchResult = ({ indices }) => {
  return (
    <ResultsWrapper>
      {indices.map(index => (
        <HitsInIndex index={index} key={index.name} />
      ))}
    </ResultsWrapper>
  )
}

export default SearchResult