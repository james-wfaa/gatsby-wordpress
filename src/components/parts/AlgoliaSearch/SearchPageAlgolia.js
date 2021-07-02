import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Configure } from "react-instantsearch-dom"
import { colors } from "../../css-variables"
import { AppContext } from "../../../context/AppContext"
import AccordianSearchBoxAlgolia from "./AccordianSearchBoxAlgolia"
import AlgoliaResults from "./AlgoliaResults"
import AlgoliaPagination from "./AlgoliaPagination"


const StyledWrapper = styled.div`
  background-color: ${colors.navcardGrey};
  /* margin-bottom: 88px; */
`


const StyledButtonWrapper = styled.div`
  padding-bottom: 58px;
`

const ResultsBoxWrapper = styled.div`
  margin-top: 20px;
`


const SearchPageAlgolia = props => {

  const { state, dispatch, actions } = useContext(AppContext);
  const { setSearchString } = actions;

  // Algolia
  const [query, setQuery] = useState(state.searchstring)
  const [hasFocus, setFocus] = useState(false)
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
  const indices = props.indices
  //

  // initial startDate set for 01/01/2020
  const [startDate, setStartDate] = useState(1577836800)
  // initial endDate set for 01/01/2030
  const [endDate, setEndDate] = useState(1893456000)



  const dateString = `startDate >= ${startDate} AND endDate <= ${endDate}`
  let typeString = ``

  if (props.typeFilter) {
    typeString = ` AND (type:${props.typeFilter})`
  }

  const filters = dateString.concat(typeString)


  // Hits Return if rendering results outside of Accordian
  useEffect(() => {
    if (!props.results) {
      let index = searchClient.initIndex('All')
      console.log(index)
      index.search(query).then(({hits}) => {
        const returnedHits = hits.filter(hit => hit.type === "Event")
        props.callback(returnedHits)
      })
    }
  }, [query])
  //


  return (
    <StyledWrapper>
        <StyledButtonWrapper>
          <InstantSearch
          searchClient={searchClient}
          indexName={indices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
          >
            <Configure
              filters={filters}
              hitsPerPage={1}
            />
            <AccordianSearchBoxAlgolia defaultRefinement={state.searchstring} onFocus={() => setFocus(true)} hasFocus={hasFocus} />

            {props.results ?
              <>
                <ResultsBoxWrapper>
                <AlgoliaResults
                  show={query && query.length > 0 && hasFocus}
                  indices={indices}
                />
              </ResultsBoxWrapper>
              <AlgoliaPagination />
              </>
            : null}

          </InstantSearch>
        </StyledButtonWrapper>
    </StyledWrapper>
  )
}

export default SearchPageAlgolia

