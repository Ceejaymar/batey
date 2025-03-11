import styled from 'styled-components';

import Transition from '../../utils/transition';
import catalogue from '../../config/lookbook';

const LookbookSection = styled.section`
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0;
  justify-content: space-between;
  /* align-items: center; */
  font-size: 2rem;
  height: min-content;
`;

const ImageCard = styled.img`
  width: 33%;
  object-fit: cover;
  /* width: 100%; */
  /* height: auto;  */
  /* border-radius: 10px; */
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
