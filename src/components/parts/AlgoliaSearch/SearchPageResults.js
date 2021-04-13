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

const TotalWrapper = (props) => {
  const [firstHit, setFirstHit] = useState(1);
  const [lastHit, setLastHit] = useState(1);

  const hitHandler = (first, last) => {
    setFirstHit(first);
    setLastHit(last);
  };
  return (
    <>
      <HitCount firstHit={firstHit} lastHit={lastHit} />
      {props.cardtype === 'ContentCard' ? (
        <CustomCardHits hitHandler={(first, last) => hitHandler(first, last)} card={props.card} />
      ) : (
        <CustomHits hitHandler={(first, last) => hitHandler(first, last)} />
      )}
    </>
  );
};

const HitCount = connectStateResults(({ searchResults, firstHit, lastHit, card }) => {
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

const HitsInIndex = ({ index, cardtype, card }) => {
  return (
    <Index indexName={index.name}>
      <TotalWrapper cardtype={cardtype} card={card} />
    </Index>
  );
};

const SearchResult = ({ indices, cardtype, card }) => {
  return (
    <>
      {cardtype === 'ContentCard' ? (
        <CardResultsWrapper>
          {indices.map((index) => (
            <HitsInIndex index={index} key={index.name} cardtype={cardtype} card={card} />
          ))}
        </CardResultsWrapper>
      ) : (
        <ResultsWrapper>
          {indices.map((index) => (
            <HitsInIndex index={index} key={index.name} cardtype={cardtype} />
          ))}
        </ResultsWrapper>
      )}
    </>
  );
};

export default SearchResult;
