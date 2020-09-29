import React, { useState, useEffect } from "react"
import styled from "styled-components"
import CheckBox from "./Checkbox"

const CategoryFilter = props => {
  const [categoryFilters, setCategoryFilters] = useState(props.categories)
  const [selectedCategories, setSelectedCategories] = useState(new Map())

  const CategoryDiv = styled.div`
    input[type="checkbox"] {
      border: 0;
    }
  `
  const handleFilter = e => {
    const item = e.target.name
    const isChecked = e.target.checked
    console.log(selectedCategories)
    if (isChecked) {
      selectedCategories.set(item, isChecked)
    } else {
      selectedCategories.set(item, !isChecked)
    }
  }

  useEffect(() => {
    props.categories.forEach(category => {
      selectedCategories.set(category, true)
    })
  }, [])

  let options = categoryFilters.map((filter, idx) => {
    return (
      <CategoryDiv
        style={{ display: `inline-block`, padding: `5px` }}
        key={`${filter}${idx}`}
      >
        <CheckBox
          label={filter}
          value={filter}
          checked={selectedCategories.get(filter)}
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
