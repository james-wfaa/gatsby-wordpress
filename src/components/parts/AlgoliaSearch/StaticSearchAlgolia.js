import React, { useState, useEffect } from "react"
import styled from "styled-components"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, RefinementList, Configure, connectHits } from "react-instantsearch-dom"
import { colors, sizes, breakpoints } from "../../css-variables"
import AccordianSearchBoxAlgolia from "./AccordianSearchBoxAlgolia"
import SearchPageResults from "./SearchPageResults"
import AlgoliaPagination from "./AlgoliaPagination"

const StyledWrapper = styled.div`
  background-color: ${colors.navcardGrey};
  /* margin-bottom: 88px; */
`


const StyledButtonWrapper = styled.div`
padding-top: 58px;
padding-bottom: 58px;
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
        <StyledButtonWrapper>
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
            <AccordianSearchBoxAlgolia defaultRefinement={props.searchString} onFocus={() => setFocus(true)} hasFocus={hasFocus} />
            <SearchPageResults
            show={query && query.length > 0 && hasFocus}
            indices={props.indices}
            />
            <AlgoliaPagination />
          </InstantSearch>
          </div>
        </StyledButtonWrapper>
    </StyledWrapper>
  )
}

export default AccordianSearchAlgolia

