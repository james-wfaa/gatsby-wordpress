import React, { useState } from 'react'
import styled from 'styled-components'
import algoliasearch from 'algoliasearch/lite'
import {
    InstantSearch,
    Configure,
    ScrollTo,
} from 'react-instantsearch-dom'
import { colors, sizes, mixins } from '../../css-variables'
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
const QueryDiv = styled.div`

`

const FilterText = styled.div`
margin-bottom: ${sizes.s32};
`

const FilterButton = styled.button`
  ${mixins.buttons}
  
  background-color: transparent !important;
  //padding-left: ${sizes.s36};
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow: none;
    background-color: inherit !important;
  }
  cursor: pointer;
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
                {(props?.queryString?.filter || props?.queryString?.pub || props?.queryString?.product) && 
                <QueryDiv>
                  {props?.queryString?.filter &&
                    <FilterText><span>Results filtered by:</span> "{props.queryString.filter.replace('-',' ')}"</FilterText>
                  }
                  {props?.queryString?.pub &&
                    <FilterText><span>Results filtered by:</span> "{props.queryString.pub.replace('-',' ')}"</FilterText>
                  }
                  {props?.queryString?.product &&
                    <FilterText><span>Results filtered by:</span> "{props.queryString.product.replace('-',' ')}"</FilterText>
                  }
                  <FilterButton className="alt altborder" onClick={props.clearFilters}>Clear Filter</FilterButton>
                </QueryDiv>
                }
                
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
