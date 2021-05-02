import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../css-variables';
import {
  connectStateResults,
  Index,
  connectHits,
} from 'react-instantsearch-dom';
import Hits from './SearchHits';
import CardHits from './SearchHitsCards';

const CustomHits = connectHits(Hits);
const CustomCardHits = connectHits(CardHits);

const ResultsWrapper = styled.div`
  width: 80%;
  max-width: 760px;
  margin: 0 auto;
  a {
    text-decoration: none;
    span {
      font-family: 'Verlag A', 'Verlag B';
      color: ${colors.bgRed};
    }
  }
`;
const CardResultsWrapper = styled.div`
  width: 80%;
  max-width: 1074px;
  margin: 0 auto;
  a {
    text-decoration: none;
    span {
      font-family: 'Verlag A', 'Verlag B';
      color: ${colors.bgRed};
    }
  }
`;

const HitCounterWrapper = styled.div`
  margin-top: 54px;
  p {
    text-align: center;
  }
`;

const NoResultsDiv = styled.div`
  p {
    width: 50%;
    margin: 48px auto 88px;
    text-align: center;
  }
`

const TotalWrapper = (props) => {
  const [firstHit, setFirstHit] = useState(1);
  const [lastHit, setLastHit] = useState(1);

  const hitHandler = (first, last) => {
    setFirstHit(first);
    setLastHit(last);
  };

  return (
    <>
      {/* <Searching /> */}
      <HitCount firstHit={firstHit} lastHit={lastHit} />
      {props.cardtype === 'ContentCard' ? (
        <CustomCardHits hitHandler={(first, last) => hitHandler(first, last)} card={props.card} filterChange={props.filterChange} />
      ) : (
        <CustomHits hitHandler={(first, last) => hitHandler(first, last)} />
      )}
      <NoResults />
    </>
  );
};

const HitCount = connectStateResults(({ searchState, searchResults, firstHit, lastHit, card, filterChange }) => {
  const hitCount = searchResults && searchResults.nbHits;
  return hitCount > 0 ? (
    <HitCounterWrapper>
      {firstHit === 1 ? (
        <p>
          Displaying{' '}
          {searchResults.hitsPerPage < hitCount
            ? searchResults.hitsPerPage
            : hitCount}{' '}
          of {hitCount} result{hitCount !== 1 ? `s` : ``}
        </p>
      ) : (
        <p>
          Displaying {firstHit}-{lastHit} of {hitCount} result
          {hitCount !== 1 ? `s` : ``}
        </p>
      )}
    </HitCounterWrapper>
  ) : null;
});

const NoResults = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;
  return hitCount === 0 ? (
    <NoResultsDiv>
      <p>We didn’t find anything for that search - please try your search again or use our navigation to browse the site.</p>
    </NoResultsDiv>
  ) : null;
});

// const Searching = connectStateResults(({ searching, searchResults }) => {
//   return searching ? (
//     <HitCounterWrapper><p>Loading...</p></HitCounterWrapper>
//   ) : null;
// });

const HitsInIndex = ({ index, cardtype, card, filterChange }) => {
  return (
    <Index indexName={index.name}>
      <TotalWrapper cardtype={cardtype} card={card} filterChange={filterChange} />
    </Index>
  );
};

const SearchResult = ({ indices, cardtype, card, filterChange }) => {
  return (
    <>
      {cardtype === 'ContentCard' ? (
        <CardResultsWrapper>
          {indices.map((index) => (
            <HitsInIndex index={index} key={index.name} cardtype={cardtype} card={card} filterChange={filterChange} />
          ))}
        </CardResultsWrapper>
      ) : (
        <ResultsWrapper>
          {indices.map((index) => (
            <HitsInIndex index={index} key={index.name} cardtype={cardtype} filterChange={filterChange} />
          ))}
        </ResultsWrapper>
      )}
    </>
  );
};

export default SearchResult;
