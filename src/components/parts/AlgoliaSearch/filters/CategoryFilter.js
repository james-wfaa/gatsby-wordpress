import React, { useState, useEffect } from "react"
import styled from "styled-components"
import CheckBox from "../../Checkbox"

const CategoryFilter = props => {
  const [categoryFilters, setCategoryFilters] = useState(props.categories)
  const [selectedCategories, setSelectedCategories] = useState({})

  const CategoryDiv = styled.div`
    input[type="checkbox"] {
      border: 0;
    }
  `
  const handleFilter = e => {
    const item = e.target.name
    const newObject = { ...selectedCategories }
    newObject[item] = !selectedCategories[item]
    setSelectedCategories(newObject)
  }

  useEffect(() => {
    let updatedObject = {}
    props.categories.forEach(category => {
      updatedObject[`${category}`] = true
    })
    setSelectedCategories(updatedObject)
  }, [])

  useEffect(() => {
    props.handleCategoryFilters(selectedCategories)
  }, [selectedCategories])

  let options = categoryFilters.map((filter, idx) => {
    return (
      <CategoryDiv
        style={{ display: `inline-block`, padding: `5px` }}
        key={`${filter}${idx}`}
      >
        <CheckBox
          label={filter}
          value={filter}
          checked={selectedCategories[`${filter}`]}
          onChange={e => {
            handleFilter(e)
          }}
        />
      </CategoryDiv>
    )
  })

  return <div>{options}</div>
}

export default CategoryFilter
