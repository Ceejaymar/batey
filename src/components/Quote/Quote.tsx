import styled from 'styled-components';
import { Quotes } from '@phosphor-icons/react';

const QuoteSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-family: 'EB Garamond';
  font-size: 2.5rem;
  font-weight: 300;
  font-style: italic;
  padding: 2.5rem;
  /* height: 350px; */
  background-color: #284941;
  color: #ede4d8;

  & svg {
    position: absolute;
    top: 6rem;
    right: 7rem;
  }
`;

function Quote() {
  return (
    <QuoteSection>
      Fashion is all about feeling good
      <Quotes size={32} weight="fill" />
    </QuoteSection>
  );
}

export default Quote;
