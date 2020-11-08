import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'
import { breakpoints, colors } from "../../css-variables"
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
} from "react-instantsearch-dom"
import ResultCard from './cards/EventCard'

const ResultsWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  a {
    text-decoration: none;
    span {
      font-family: "Verlag A", "Verlag B";
      color: ${colors.bgRed}
    }
  }
`



const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits

  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null
})

const PageHit = ({ hit }) => {

  return (
    <ResultCard
      url={hit.url}
      title={hit.title}
    />
  )
}

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
)

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