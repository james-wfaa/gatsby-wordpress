import React from 'react'
import styled from 'styled-components'
import { Pagination } from 'react-instantsearch-dom'
import { colors, breakpoints } from '../../css-variables'

const PaginationWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  &.globalsearch {
    margin-bottom: 88px;
    @media screen and ${breakpoints.tabletS} {
      margin-bottom: 128px;
    }
  }

  @media screen and ${breakpoints.tabletS} {
    max-width: 536px;
  }
  @media screen and ${breakpoints.laptopS} {
      max-width: 712px;
  }
  ul {
    list-style-type: none;
    margin: 58px 0 0;
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


const AlgoliaPagination = ({ globalsearch }) => {
  const globalClass = globalsearch
    ? 'globalsearch'
    : ''
  return (
    <PaginationWrapper className={globalClass}>
      <Pagination showLast />
    </PaginationWrapper>
  )
}

export default AlgoliaPagination
