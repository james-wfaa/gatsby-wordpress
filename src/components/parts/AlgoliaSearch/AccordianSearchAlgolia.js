import React, { useState } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch } from "react-instantsearch-dom"
import { RefinementList } from "react-instantsearch-dom"
import { Configure } from "react-instantsearch-dom"
import { colors, sizes, breakpoints } from "../../css-variables"
import AccordianSearchBoxAlgolia from "./AccordianSearchBoxAlgolia"
import AlgoliaResults from "./AlgoliaResults"
import DateFilter from "./filters/DateFilter"
import CategoryFilter from "./filters/CategoryFilter"
import LocationFilter from "./filters/LocationFilter"
import FiltersFilter from "./filters/FiltersFilter"
import WcIcon from "../../../svg/wechat_icon_gray.svg"
import CategoryImg from "../../../assets/images/accordian_category.png"
import FiltersImg from "../../../assets/images/accordian_filters.png"
import LocationImg from "../../../assets/images/accordian_location.png"
import DateImg from "../../../assets/images/accordian_date.png"

const StyledWrapper = styled.div`
  background-color: ${colors.navcardGrey};
  /* margin-bottom: 88px; */
`

const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
  width: 200px;
  margin: 0 auto;
  align-items: center;
  h4 {
    justify-self: center;
    font-family: "Verlag A", "Verlag B";
    font-weight: bold;
    padding-top: ${sizes.s24};
    padding-bottom: ${sizes.s24};
    margin-bottom: 0;
    color: ${colors.linkText};
    cursor: pointer;
  }
  p {
    font-family: "Verlag A", "Verlag B";
    font-weight: bold;
    text-align: center;
    padding-top: ${sizes.s24};
    padding-bottom: ${sizes.s24};
    margin-bottom: 0;
    color: ${colors.linkText};
    cursor: pointer;
    span {
      font-size: 1.25em;
      display: inline-block;
      transition: 0.25s ease-in-out;
    }
  }
`

const StyledButtonWrapper = styled.div`
  padding-bottom: 58px;
`

const FilterBox = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr;
  width: 80%;
  margin: 0 auto;
  @media screen and ${breakpoints.tablet} {
    grid-template-columns: 1fr;
    grid-template-columns: repeat(4, 1fr);
  }
`

const FilteredDiv = styled.div`
  position: relative;
`
const FilterButton = styled.button`
  position: relative;
  text-align: left;
  padding-left: ${sizes.s36};
  color: ${colors.titleWhite};
  width: 100%;
  background-color: ${colors.buttonRed};
  height: 48px;
  border: none;
  &:focus {
    outline: none;
  }
  cursor: pointer;
  &.date:before {
        content: url(${DateImg});
    }
    &.category:before {
        content: url(${CategoryImg});
    }
    &.filters:before {
        content: url(${FiltersImg});
    }
    &.location:before {
        content: url(${LocationImg});
    }
  &:before {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
  }
  span {
    width: 20px;
    height: 20px;
    mask: url(${WcIcon});
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
  const indices = [{name: 'Events'}]
  //
  const [open, setOpen] = useState(false)
  const [dateopen, setDateOpen] = useState(false);
  const [locationopen, setLocationOpen] = useState(false);
  const [categoryopen, setCategoryOpen] = useState(false);
  const [filtersopen, setFiltersOpen] = useState(false);

  // initial startDate set for 01/01/2020
  const [startDate, setStartDate] = useState(1577836800)
  // initial endDate set for 01/01/2030
  const [endDate, setEndDate] = useState(1893456000)

  const searchstyles = useSpring({ opacity: open ? 1 : 0 })

  const clickHandler = () => {
    setOpen(!open)
  }

  const filters = `startDate >= ${startDate} AND endDate <= ${endDate}`

  const handleStartDate = (date) => {
    let startDateTimestamp = new Date(date).getTime() / 1000
    setStartDate(startDateTimestamp)
  }
  const handleEndDate = (date) => {
    let endDateTimestamp = new Date(date).getTime() / 1000
    setEndDate(endDateTimestamp)
  }

  return (
    <StyledWrapper>
      <StyledInputWrapper>
        <h4 onClick={() => clickHandler()}>
          {!open ? `Expand Event Search` : `Close Search`}
        </h4>
        <p>
          <span
            style={{
              transform: !open
                ? `rotate(-180deg) scale(1.5, 1)`
                : `scale(1.5, 1)`,
            }}
          >
            &#94;
          </span>
        </p>
      </StyledInputWrapper>
      {open ? (
        <StyledButtonWrapper>
          <animated.div style={searchstyles}>
            <InstantSearch
            searchClient={searchClient}
            indexName={indices[0].name}
            onSearchStateChange={({ query }) => setQuery(query)}
            >
            <Configure
              filters={filters}
            />
            <AccordianSearchBoxAlgolia onFocus={() => setFocus(true)} hasFocus={hasFocus} />
            <FilterBox>
              <FilteredDiv>
                <FilterButton
                  className="date"
                  onClick={() => setDateOpen(!dateopen)}
                >
                  Date
                </FilterButton>
                {dateopen ? (
                  <DateFilter
                    className="date"
                    handleStartDate={(date) => handleStartDate(date)}
                    handleEndDate={(date) => handleEndDate(date)}
                  />
                ) : null}
              </FilteredDiv>
              <FilteredDiv>
                <FilterButton
                  className="location"
                  onClick={() => setLocationOpen(!locationopen)}
                >
                  Location
                </FilterButton>
                {locationopen ? (
                  <LocationFilter>
                    <RefinementList attribute="venue.address" />
                  </LocationFilter>
                ) : null}
              </FilteredDiv>
              <FilteredDiv>
                <FilterButton
                  className="category"
                  onClick={() => setCategoryOpen(!categoryopen)}
                >
                  Category
                </FilterButton>
                {categoryopen ? (
                  <CategoryFilter>
                    <RefinementList attribute="categories.name" />
                  </CategoryFilter>
                ) : null}
              </FilteredDiv>
              <FilteredDiv>
                <FilterButton
                  className="filters"
                  onClick={() => setFiltersOpen(!filtersopen)}
                >
                  Filters
                </FilterButton>
                {filtersopen ? (
                  <FiltersFilter>
                    <RefinementList attribute="filters" />
                  </FiltersFilter>
                ) : null}
              </FilteredDiv>
            </FilterBox>
            <AlgoliaResults
              show={query && query.length > 0 && hasFocus}
              indices={indices}
            />
          </InstantSearch>

          </animated.div>
        </StyledButtonWrapper>
      ) : null}
    </StyledWrapper>
  )
}

export default AccordianSearchAlgolia
