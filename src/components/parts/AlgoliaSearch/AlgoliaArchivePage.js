import React, { useState } from 'react'
import styled from 'styled-components'
import algoliasearch from 'algoliasearch/lite'
import {
    InstantSearch,
    Configure,
    ScrollTo,
} from 'react-instantsearch-dom'
import { colors } from '../../css-variables'
import AccordianSearchBoxAlgolia from './AccordianSearchBoxAlgolia'
import SearchPageResults from './SearchPageResults'
import AlgoliaPagination from './AlgoliaPagination'

const StyledWrapper = styled.div`
  .ais-Pagination--noRefinement {
    display: none;
  }
  .ais-Pagination-item--disabled {
    display: none;
  }
`

const SelectionsWrapper = styled.div`
    padding-top: 58px;
    padding-bottom: 58px;
    background-color: ${colors.navcardGrey};
`

const AlgoliaArchivePage = props => {
    // Algolia
    const [query, setQuery] = useState()
    const [hasFocus, setFocus] = useState(false)
    const searchClient = algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY,
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
            <Configure filters={props.filters} hitsPerPage={9} />
            <ScrollTo>
              <SelectionsWrapper>
                <AccordianSearchBoxAlgolia
                  defaultRefinement={props.searchString}
                  onFocus={() => setFocus(true)}
                  hasFocus={hasFocus}
                />
              </SelectionsWrapper>
            </ScrollTo>
            <SearchPageResults
              show={query && query.length > 0 && hasFocus}
              indices={props.indices}
              cardtype='ContentCard'
              card={props.card}
              filterChange={props.filterChange}
            />
            <AlgoliaPagination />
          </InstantSearch>
        </div>
      </StyledWrapper>
    );
}

export default AlgoliaArchivePage
