import React, { useState, useEffect } from "react"
import styled from "styled-components"
import CheckBox from "../Checkbox"

const LocationFilter = props => {
  const [locationFilters, setLocationFilters] = useState(props.locations)
  const [selectedLocations, setSelectedLocations] = useState({})

  const LocationDiv = styled.div`
    input[type="checkbox"] {
      border: 0;
    }
  `
  const handleFilter = e => {
    const item = e.target.name
    const newObject = { ...selectedLocations }
    newObject[item] = !selectedLocations[item]
    setSelectedLocations(newObject)
  }

  useEffect(() => {
    let updatedObject = {}
    props.locations.forEach(location => {
      updatedObject[`${location}`] = true
    })
    setSelectedLocations(updatedObject)
  }, [])

  useEffect(() => {
    props.handleLocationFilters(selectedLocations)
  }, [selectedLocations])

  let options = locationFilters.map((filter, idx) => {
    return (
      <LocationDiv
        style={{ display: `inline-block`, padding: `5px` }}
        key={`${filter}${idx}`}
      >
        <CheckBox
          label={filter}
          value={filter}
          checked={selectedLocations[`${filter}`]}
          onChange={e => {
            handleFilter(e)
          }}
        />
      </LocationDiv>
    )
  })

  return <div>{options}</div>
}

export default LocationFilter
