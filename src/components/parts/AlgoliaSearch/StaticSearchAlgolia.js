import React, { useState } from "react"
import styled from "styled-components"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  RefinementList,
  Configure,
  ScrollTo,
} from "react-instantsearch-dom"
import { colors } from "../../css-variables"
import AccordianSearchBoxAlgolia from "./AccordianSearchBoxAlgolia"
import SearchPageResults from "./SearchPageResults"
import AlgoliaPagination from "./AlgoliaPagination"

const StyledWrapper = styled.div`

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
          hitsPerPage={10}
        />
        <ScrollTo>
          <SelectionsWrapper>
              <AccordianSearchBoxAlgolia defaultRefinement={props.searchString} onFocus={() => setFocus(true)} hasFocus={hasFocus} />
            <RefinementChoices>
              <p>Included in Results:</p>
              <RefinementList
              attribute="type"
              defaultRefinement={['Event', 'Post', 'Page']}
              transformItems={items =>
                items.map(item => {
                  let newlabel;
                  switch (item.label) {
                    case "Event":
                      newlabel = "Events"
                      break
                    case "Post":
                      newlabel = "News/Stories"
                      break
                    case "Page":
                      newlabel = "Pages"
                      break
                    default:
                      newlabel = ""
                      break
                  }
                      return ({
                        ...item,
                        label: newlabel,
                      })
                      })
                    }
                    />
            </RefinementChoices>
          </SelectionsWrapper>
        </ScrollTo>
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