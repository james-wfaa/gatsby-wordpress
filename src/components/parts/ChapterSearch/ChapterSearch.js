import React, { useState, useEffect, useMemo } from "react"
import styled from "styled-components"
import { colors, sizes, breakpoints } from "../../css-variables"
import PageSection from "../../page-sections/PageSection"
import AllChaptersData from "../../page-sections/AllChapters"
// import countryList from "react-select-country-list"
import ChapterCard from "./ChapterCard"

const ChapterSearch = () => {
  const [selectedCountry, setSelectedCountry] = useState("All Countries")
  const [selectedState, setSelectedState] = useState("All U.S. States")
  const [chapterData, setChapterData] = useState(AllChaptersData().nodes)
  const [filteredChapters, setFilteredChapters] = useState([])

  const getCountryOptions = chapterData => {
    let valueArr = []
    chapterData.forEach(chapter => {
      valueArr.push(chapter.chapterDetails.csCountry)
    })
    return [...new Set(valueArr)].sort()
  }

  const stateoptions = [
    { LABEL: "Alabama", VALUE: "AL" },
    { LABEL: "Alaska", VALUE: "AK" },
    { LABEL: "Alberta", VALUE: "AB" },
    { LABEL: "American Samoa", VALUE: "AS" },
    { LABEL: "Arizona", VALUE: "AZ" },
    { LABEL: "Arkansas", VALUE: "AR" },
    { LABEL: "Armed Forces (AE)", VALUE: "AE" },
    { LABEL: "Armed Forces Americas", VALUE: "AA" },
    { LABEL: "Armed Forces Pacific", VALUE: "AP" },
    { LABEL: "British Columbia", VALUE: "BC" },
    { LABEL: "California", VALUE: "CA" },
    { LABEL: "Colorado", VALUE: "CO" },
    { LABEL: "Connecticut", VALUE: "CT" },
    { LABEL: "Delaware", VALUE: "DE" },
    { LABEL: "District Of Columbia", VALUE: "DC" },
    { LABEL: "Florida", VALUE: "FL" },
    { LABEL: "Georgia", VALUE: "GA" },
    { LABEL: "Guam", VALUE: "GU" },
    { LABEL: "Hawaii", VALUE: "HI" },
    { LABEL: "Idaho", VALUE: "ID" },
    { LABEL: "Illinois", VALUE: "IL" },
    { LABEL: "Indiana", VALUE: "IN" },
    { LABEL: "Iowa", VALUE: "IA" },
    { LABEL: "Kansas", VALUE: "KS" },
    { LABEL: "Kentucky", VALUE: "KY" },
    { LABEL: "Louisiana", VALUE: "LA" },
    { LABEL: "Maine", VALUE: "ME" },
    { LABEL: "Manitoba", VALUE: "MB" },
    { LABEL: "Maryland", VALUE: "MD" },
    { LABEL: "Massachusetts", VALUE: "MA" },
    { LABEL: "Michigan", VALUE: "MI" },
    { LABEL: "Minnesota", VALUE: "MN" },
    { LABEL: "Mississippi", VALUE: "MS" },
    { LABEL: "Missouri", VALUE: "MO" },
    { LABEL: "Montana", VALUE: "MT" },
    { LABEL: "Nebraska", VALUE: "NE" },
    { LABEL: "Nevada", VALUE: "NV" },
    { LABEL: "New Brunswick", VALUE: "NB" },
    { LABEL: "New Hampshire", VALUE: "NH" },
    { LABEL: "New Jersey", VALUE: "NJ" },
    { LABEL: "New Mexico", VALUE: "NM" },
    { LABEL: "New York", VALUE: "NY" },
    { LABEL: "Newfoundland", VALUE: "NF" },
    { LABEL: "North Carolina", VALUE: "NC" },
    { LABEL: "North Dakota", VALUE: "ND" },
    { LABEL: "Northwest Territories", VALUE: "NT" },
    { LABEL: "Nova Scotia", VALUE: "NS" },
    { LABEL: "Nunavut", VALUE: "NU" },
    { LABEL: "Ohio", VALUE: "OH" },
    { LABEL: "Oklahoma", VALUE: "OK" },
    { LABEL: "Ontario", VALUE: "ON" },
    { LABEL: "Oregon", VALUE: "OR" },
    { LABEL: "Pennsylvania", VALUE: "PA" },
    { LABEL: "Prince Edward Island", VALUE: "PE" },
    { LABEL: "Puerto Rico", VALUE: "PR" },
    { LABEL: "Quebec", VALUE: "PQ" },
    { LABEL: "Rhode Island", VALUE: "RI" },
    { LABEL: "Saskatchewan", VALUE: "SK" },
    { LABEL: "South Carolina", VALUE: "SC" },
    { LABEL: "South Dakota", VALUE: "SD" },
    { LABEL: "Tennessee", VALUE: "TN" },
    { LABEL: "Texas", VALUE: "TX" },
    { LABEL: "Utah", VALUE: "UT" },
    { LABEL: "Vermont", VALUE: "VT" },
    { LABEL: "Virgin Islands", VALUE: "VI" },
    { LABEL: "Virginia", VALUE: "VA" },
    { LABEL: "Washington", VALUE: "WA" },
    { LABEL: "West Virginia", VALUE: "WV" },
    { LABEL: "Wisconsin", VALUE: "WI" },
    { LABEL: "Wyoming", VALUE: "WY" },
    { LABEL: "Yukon Territory", VALUE: "YT" },
  ]

  const StyledWrapper = styled.div`
    /* background-color: ${colors.navcardGrey}; */
    /* margin-bottom: 88px; */
  `

  const StyledButtonWrapper = styled.div`
    padding-bottom: 58px;
  `

  const FilterBox = styled.div`
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 1fr;
    justify-items: center;
    width: 50%;
    margin: 0 auto;
    @media screen and ${breakpoints.tablet} {
      grid-template-columns: 1fr 1fr;
      width: 530px;
    }
  `

  const FilteredDiv = styled.div`
    position: relative;
    width: 252px;
    color: ${colors.titleWhite};
    
   
  `
  const FilteredSelect = styled.select`
    position: relative;
    text-align: left;
    padding-left: ${sizes.s36};
    color: ${colors.titleWhite};
    width: 100%;
    background-color: ${colors.buttonRed};
    height: 48px;
    border: none;
    appearance: none;
    &:focus {
      outline: none;
    }
    cursor: pointer;
  `

  const ResultsBoxWrapper = styled.div`
    max-width: 760px;
    margin: 0 auto;
    a {
      text-decoration: none;
      span {
        font-family: "Verlag A", "Verlag B";
        color: ${colors.bgRed};
      }
    }
    ul {
      list-style-type: none;
      li {
        margin-top: 4px;
      }
    }
  `

  useEffect(() => {
    if (
      selectedCountry !== "All Countries" &&
      selectedCountry !== "United States"
    ) {
      setSelectedState("All U.S. States")
      let filteredChapters = chapterData.filter(chapter => {
        return chapter.chapterDetails.csCountry === selectedCountry
      })
      setFilteredChapters(filteredChapters)
    }
  }, [selectedCountry])

  useEffect(() => {
    if (selectedState !== "All U.S. States") {
      setSelectedCountry("United States")
      let filteredChapters = chapterData.filter(chapter => {
        return chapter.chapterDetails.csState === selectedState
      })
      setFilteredChapters(filteredChapters)
    }
  }, [selectedState])

  return (
    <StyledWrapper>
      <PageSection
        id="chapter-search"
        topBorder
        heading="Find Badgers Near You"
        excerpt="Use the filters below to find a chapter in your country or U.S. State"
      >
         <StyledButtonWrapper>
        <FilterBox>
          <FilteredDiv>
            <FilteredSelect
              name="countries"
              id="countries"
              onChange={e => setSelectedCountry(e.target.value)}
              value={selectedCountry}
            >
              <option value="All Countries" disabled>
                All Countries
              </option>
              {getCountryOptions(chapterData).map(country => {
                return <option value={country}>{country}</option>
              })}
            </FilteredSelect>
          </FilteredDiv>
          <FilteredDiv>
            <FilteredSelect
              name="states"
              id="states"
              onChange={e => setSelectedState(e.target.value)}
              value={selectedState}
            >
              <option className="titleOption" value="All U.S. States" disabled>
                All U.S. States
              </option>
              {stateoptions.map(state => {
                return <option value={state.VALUE}>{state.LABEL}</option>
              })}
            </FilteredSelect>
          </FilteredDiv>
        </FilterBox>
      </StyledButtonWrapper>
      <ResultsBoxWrapper>
        {filteredChapters.length == 0 ? (
          <div>
            {selectedCountry !== "All Countries" ||
            selectedState !== "All U.S. States" ? (
              <p style={{ width: `100%`, textAlign: `center` }}>
                No chapters in this location
              </p>
            ) : null}
          </div>
        ) : (
          filteredChapters.map(chapter => <ChapterCard chapter={chapter} />)
        )}
      </ResultsBoxWrapper>
      </PageSection>
     
    </StyledWrapper>
  )
}

export default ChapterSearch
