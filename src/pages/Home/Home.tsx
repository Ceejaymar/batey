import styled from 'styled-components';

import ProductCard from '../../components/ProductCard/ProductCard';
import headerImage from '../../assets/images/home/fd-garden.jpg';
import lcFeatured from '../../assets/images/home/lc-featured.jpg';

import Transition from '../../utils/transition';
import { products } from '../../config/products';

const HeaderSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;

  border-image: linear-gradient(hsla(0, 0%, 0%, 0.3), hsla(0, 0%, 0%, 0.3)) fill
    1;
`;

const HeaderH2 = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
  color: white;
  width: 50%;
`;

const ItalicSpan = styled.span`
  font-style: italic;
  font-weight: 300;
  text-shadow: 2px 2px 2px #00000011;
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  text-transform: capitalize;
  border: 2px solid white;
  padding: 1rem 4rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const QuoteSection = styled.section`
  height: 350px;
  background-color: #fff;
`;

const FeaturedProductSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 700px;
  padding: 3rem;
  background-image: url(${lcFeatured});
  background-size: cover;
  background-position: center;
  border-image: linear-gradient(hsla(0, 0%, 0%, 0.4), hsla(0, 0%, 0%, 0.4)) fill
    1;
  color: white;
`;

const FeaturedDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 75%;
  max-width: 500px;

  & h4 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 2rem;
  }
`;

const FeaturedProduct = styled.div`
  max-width: 300px;
  margin-right: 3rem;
`;

const Home: React.FC = () => {
  return (
    <Transition>
      <HeaderSection>
        <HeaderH2>
          Cultivated Cloth, Crafted for <ItalicSpan>Comfort</ItalicSpan>.
          <Button>Shop All</Button>
        </HeaderH2>
      </HeaderSection>
      <QuoteSection> </QuoteSection>

      <FeaturedProductSection>
        <FeaturedDesc>
          <div>
            <h4>Effortless pieces, timeless style</h4>
            <p>
              Locally sourced, designed for legacy: our collections are crafted
              to endure, reducing environmental impact and our footprint for
              generations to come.
            </p>
          </div>
          <Button>Shop Now</Button>
        </FeaturedDesc>

        <FeaturedProduct>
          <ProductCard product={products[0]} />
        </FeaturedProduct>
      </FeaturedProductSection>

      <QuoteSection> </QuoteSection>
    </Transition>
  );
};

export default Home;
