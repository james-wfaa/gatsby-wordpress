import React, { useState, useEffect } from "react"
import styled from "styled-components"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, RefinementList, Configure, connectHits } from "react-instantsearch-dom"
import { colors, sizes, breakpoints } from "../../css-variables"
import AccordianSearchBoxAlgolia from "./AccordianSearchBoxAlgolia"
import SearchPageResults from "./SearchPageResults"
import AlgoliaPagination from "./AlgoliaPagination"

const StyledWrapper = styled.div`

`

const SelectionsWrapper = styled.div`
  padding-top: 58px;
  background-color: ${colors.navcardGrey};
`
const RefinementChoices = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  ul {
    list-style-type: none;
    li {
      margin: 20px;
      text-decoration: none;
      display: inline-block;
    }
  }
`


const AccordianSearchAlgolia = props => {

  // Algolia
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
  //


  return (
    <StyledWrapper>
      <div>
        <InstantSearch
        searchClient={searchClient}
        indexName={props.indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
        >
        <Configure
          // filters={filters}
          hitsPerPage={5}
        />
        <SelectionsWrapper>
          <AccordianSearchBoxAlgolia defaultRefinement={props.searchString} onFocus={() => setFocus(true)} hasFocus={hasFocus} />
          <RefinementChoices>
            <RefinementList attribute="type" />
          </RefinementChoices>
        </SelectionsWrapper>
        <SearchPageResults
        show={query && query.length > 0 && hasFocus}
        indices={props.indices}
        />
        <AlgoliaPagination />
      </InstantSearch>
      </div>
    </StyledWrapper>
  )
}

export default AccordianSearchAlgolia

