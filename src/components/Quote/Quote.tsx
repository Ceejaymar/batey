import styled from 'styled-components';
import { Quotes } from '@phosphor-icons/react';

const QuoteSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-family: 'EB Garamond';
  font-size: 4rem;
  font-weight: 300;
  font-style: italic;
  height: 350px;
  background-color: #284941;
  color: #ede4d8;

  & svg {
    position: relative;
    top: -2rem;
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
