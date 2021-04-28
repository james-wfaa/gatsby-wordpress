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

//console.log(CardHits)

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

const TotalWrapper = (props) => {
  const [firstHit, setFirstHit] = useState(1);
  const [lastHit, setLastHit] = useState(1);

  const hitHandler = (first, last) => {
    setFirstHit(first);
    setLastHit(last);
  };
  //console.log(props.cardtype)
  return (
    <>
      <HitCount firstHit={firstHit} lastHit={lastHit} />
      {props.cardtype === 'ContentCard' ? (
        <CustomCardHits hitHandler={(first, last) => hitHandler(first, last)} card={props.card} filterChange={props.filterChange} />
      ) : (
        <CustomHits hitHandler={(first, last) => hitHandler(first, last)} />
      )}
    </>
  );
};

const HitCount = connectStateResults(({ searchResults, firstHit, lastHit, card, filterChange }) => {
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
