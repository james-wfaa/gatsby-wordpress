import React, { useState, useEffect } from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch } from "react-instantsearch-dom"
import AlgoliaSearchBox from './AlgoliaSearchBox'
import AlgoliaResults from './AlgoliaResults'
import styled from "styled-components"
import { breakpoints, colors } from "../css-variables"
import { useLockBodyScroll } from "../hooks"


const StyledDiv = styled.div`
  width: 80%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 30px;
  border: 1px solid grey;
  @media screen and ${breakpoints.tabletS} {
    position: absolute;
    width: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const StyledInput = styled.input`
  width: 96% !important;
  border: none !important;
  background: none !important;
  padding-left: 7px !important;
  padding: 4px;
  border: none;
  &:focus {
    outline: none;
  }
`

const SearchModal = ({ topOffset, isMobile }) => {
  const [searchText, setSearchText] = useState("")

  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )

  const searchHandler = e => {
    setSearchText(e.target.value)
  }

  const indices = [{name: 'Events'}]

  useLockBodyScroll()

  return (
    <div>
      <StyledDiv
        style={{  top: isMobile ? `10%` : `calc(50% - ${topOffset}px)`  }}
      >
        <StyledInput
          type="text"
          placeholder="Search.."
          value={searchText}
          onChange={e => searchHandler(e)}
          className="st-default-search-input"
        />
        <span className="search">
          <a style={{ backgroundColor: `${colors.buttonRed}` }}></a>
        </span>
      </StyledDiv>
      <div>
        {/* <InstantSearch
            searchClient={searchClient}
            indexName={indices[0].name}
            onSearchStateChange={({ query }) => setQuery(query)}
          >
            <AlgoliaSearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
            <AlgoliaResults
              show={query && query.length > 0 && hasFocus}
              indices={indices}
            />
          </InstantSearch> */}
      </div>
    </div>
  )
}

export default SearchModal
