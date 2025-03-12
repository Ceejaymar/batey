import styled from 'styled-components';

import Transition from '../../utils/transition';
import catalogue from '../../config/lookbook';

const LookbookSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0;
  justify-content: space-between;
  font-size: 2rem;
`;

const ImageCard = styled.img`
  width: 33%;
  object-fit: cover;
`;

const Lookbook = () => {
  return (
    <Transition>
      <LookbookSection>
        {catalogue.map((product, index) => (
          <ImageCard key={index} src={product} />
        ))}
      </LookbookSection>
    </Transition>
  );
};

export default Lookbook;
