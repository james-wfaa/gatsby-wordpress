import React, { useState } from 'react'
import styled from 'styled-components'
import algoliasearch from 'algoliasearch/lite'
import {
    InstantSearch,
    RefinementList,
    Configure,
    ScrollTo,
} from 'react-instantsearch-dom'
import { colors } from '../../css-variables'
import AccordianSearchBoxAlgolia from './AccordianSearchBoxAlgolia'
import SearchPageResults from './SearchPageResults'
import AlgoliaPagination from './AlgoliaPagination'

const StyledWrapper = styled.div``

const SelectionsWrapper = styled.div`
    padding-top: 58px;
    padding-bottom: 58px;
    background-color: ${colors.navcardGrey};
`
const RefinementChoices = styled.div`
    width: 80%;
    max-width: 760px;
    margin: 0 auto;
    display: grid;
    p {
        text-align: center;
    }
    ul {
        list-style-type: none;
        margin-left: 0;
        margin-bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        li {
            margin-left: 24px;
            margin-bottom: 0;
            text-decoration: none;
            display: inline-block;
            .ais-RefinementList-labelText {
                margin-left: 12px;
            }
            .ais-RefinementList-count {
                display: none;
            }
        }
    }
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
