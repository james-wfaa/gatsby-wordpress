import React, { useState } from 'react'
import styled from 'styled-components'
import algoliasearch from 'algoliasearch/lite'
import {
    InstantSearch,
    RefinementList,
    Configure,
    ScrollTo,
} from 'react-instantsearch-dom'
import { colors, sizes } from '../../css-variables'
import AccordianSearchBoxAlgolia from './AccordianSearchBoxAlgolia'
import SearchPageResults from './SearchPageResults'
import AlgoliaPagination from './AlgoliaPagination'
import Button from '../../parts/Button'

const StyledWrapper = styled.div`
  .ais-Pagination--noRefinement {
    display: none;
  }
`

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
const QueryDiv = styled.div`

`

const FilterText = styled.p`

`

const FilterButton = styled.button`
  position: relative;
  text-align: left;
  padding-left: ${sizes.s36};
  color: ${colors.titleWhite};
  width: 150px;
  background-color: ${colors.buttonRed};
  height: 48px;
  border: none;
  font-weight:bold;
  &:focus {
    outline: none;
  }
  cursor: pointer;
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
                {(props.queryString.filter || props.queryString.pub || props.queryString.product) && 
                <QueryDiv>
                  {props.queryString.filter &&
                    <FilterText><span>Results filtered by:</span> filter={props.queryString.filter}</FilterText>
                  }
                  {props.queryString.pub &&
                    <FilterText><span>Results filtered by:</span> publication={props.queryString.pub}</FilterText>
                  }
                  {props.queryString.product &&
                    <FilterText><span>Results filtered by:</span> product={props.queryString.product}</FilterText>
                  }
                  <FilterButton onClick={props.clearFilters}>Clear Filters</FilterButton>
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
