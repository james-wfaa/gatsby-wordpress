import React from 'react'
import styled from 'styled-components'
import { Pagination } from 'react-instantsearch-dom'
import { fonts, colors } from '../../css-variables'

const PaginationWrapper = styled.div`
  width: 760px;
  margin: 0 auto;
  text-align: center;
  ul {
    list-style-type: none;
    margin: 58px 0;
    font-size: 26px;
    li {
      display: inline-block;
      margin: 8px;
      &.ais-Pagination-item--previousPage,
      &.ais-Pagination-item--nextPage,
      &.ais-Pagination-item--firstPage,
      &.ais-Pagination-item--lastPage {
        font-size: 40px;
        span, a {
          color: ${colors.bgRed};
        }
      }
      a {
        text-decoration: none;
        color: ${colors.buttonActiveGrey};
        width: 20px;
        text-align: center;
        &.ais-Pagination-link--selected {
          color: ${colors.bgRed};
        }
        &.ais-Pagination-item--disabled {
          color: ${colors.cardTitleBg};
        }

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
