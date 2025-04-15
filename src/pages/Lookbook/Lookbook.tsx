import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Transition from '../../utils/transition';
import catalogue from '../../config/lookbook';
import placeholderImg from '../../assets/images/general-portrait.png';

const LookbookSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0;
  justify-content: space-between;
  font-size: 2rem;
`;

const ImageWrapper = styled.div`
  width: 33%;
  overflow: hidden;

  & span {
    height: 100%;
    width: 100%;
  }
`;

const StyledLazyLoadImage = styled(LazyLoadImage)`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

function Lookbook() {
  return (
    <Transition>
      <LookbookSection>
        {catalogue.map((product, index) => (
          <ImageWrapper>
            <StyledLazyLoadImage
              key={index}
              src={product}
              effect="blur"
              placeholderSrc={placeholderImg}
            />
          </ImageWrapper>
        ))}
      </LookbookSection>
    </Transition>
  );
}

export default Lookbook;
