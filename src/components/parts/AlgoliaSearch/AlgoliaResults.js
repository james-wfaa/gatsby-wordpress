import { Link } from "gatsby"
import { default as React } from "react"
import styled from 'styled-components'
import { breakpoints, colors } from "../../css-variables"
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
} from "react-instantsearch-dom"

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
  ul {
    list-style-type: none;
    li {
      margin-top: 4px;
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
    <div>
    <Link to={hit.url}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
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