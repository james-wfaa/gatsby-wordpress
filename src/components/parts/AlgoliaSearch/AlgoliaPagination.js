import React from 'react'
import styled from 'styled-components'
import { Pagination } from 'react-instantsearch-dom'
import { colors } from '../../css-variables'

const PaginationWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  ul {
    list-style-type: none;
    li {
      display: inline-flex;
      margin: 4px;
      &.ais-Pagination-item--page {
        border: 1px solid ${colors.bgRed};
        background-color: ${colors.bgRed};
      }
      a {
        text-decoration: none;
        color: ${colors.bgWhite};
        width: 20px;
        text-align: center;
      }
    }
  }
`


const AlgoliaPagination = () => {
  return (
    <PaginationWrapper>
      <Pagination />
    </PaginationWrapper>
  )
}

export default AlgoliaPagination
