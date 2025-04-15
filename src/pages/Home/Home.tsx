import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Quotes } from '@phosphor-icons/react';

import ProductCard from '../../components/ProductCard/ProductCard';
import headerImage from '../../assets/images/home/fd-garden.jpg';
import lcFeatured from '../../assets/images/home/lc-featured.jpg';
import shirtsOnDisplay from '../../assets/images/home/kh-shirts-display.jpg';

import Transition from '../../utils/transition';
import { products } from '../../config/products';

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;
  border-image: linear-gradient(hsla(0, 0%, 0%, 0.3), hsla(0, 0%, 0%, 0.3)) fill
    1;
  font-family: 'eb garamond';

  & span {
    font-style: italic;
    font-weight: 300;
    text-shadow: 2px 2px 2px #00000011;
  }
`;

const HeaderH2 = styled.h2`
  font-size: 4rem;
  font-weight: 300;
  text-align: center;
  color: white;
  width: 40%;
  margin-bottom: 2rem;
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: transparent;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  font-style: normal;
  text-decoration: none;
  text-transform: capitalize;
  border: 2px solid white;
  padding: 1rem 4rem;
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'eb garamond';

  &:hover {
    background-color: white;
    color: black;
  }
`;

const NewArrivalsSection = styled.section`
  padding: 3rem 3rem 5rem 3rem;
  background-color: #ede4d8;

  & h2 {
    line-height: 1;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  & a {
    color: #284941;
    max-width: 30%;
    display: flex;
    flex-direction: column;
  }

  & p {
    /* display: inline-block; */
    /* text-align: start; */
  }
`;

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

const SubscribeSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 350px;
  background-color: #ede4d8;
  color: #284941;

  & h3 {
    font-family: 'EB Garamond';
    font-size: 3rem;
    font-weight: 300;
    line-height: 1;
    margin-bottom: 1.5rem;
  }

  & form {
    margin-top: 3rem;
  }
`;

const ImgContainer = styled.div`
  width: 350px;
  height: 250px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SubscribeInput = styled.input`
  padding: 0.8rem 1.1rem;
  border: 1px solid #284941;
  margin-right: 1rem;
`;

const SubscribeButton = styled.button`
  color: #ffffff;
  border: 1px solid #f3a047;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.8rem 2rem;
  background-color: #f3a047;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background-color: #284941;
    color: white;
    border-color: #284941;
  }
`;

function Home() {
  return (
    <Transition>
      <HeaderSection>
        <HeaderH2>
          <span>Cultivated</span> Cloth, Crafted for <span>Comfort</span>.
        </HeaderH2>
        <Button to="/shop">Shop All</Button>
      </HeaderSection>
      <NewArrivalsSection>
        <h2>New Arrivals</h2>
        <div>
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      </NewArrivalsSection>
      <QuoteSection>
        Fashion is all about feeling good
        <Quotes size={32} weight="fill" />
      </QuoteSection>

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
          <Button to="/shop">Shop Now</Button>
        </FeaturedDesc>

        <FeaturedProduct>
          <ProductCard product={products[9]} />
        </FeaturedProduct>
      </FeaturedProductSection>
      <SubscribeSection>
        <ImgContainer>
          <img src={shirtsOnDisplay} />
        </ImgContainer>
        <div>
          <h3>Join our community</h3>
          <p>Get notified when our next collection drops.</p>
          <form>
            <SubscribeInput type="email" placeholder="Email address" />
            <SubscribeButton type="submit">Subscribe</SubscribeButton>
          </form>
        </div>
      </SubscribeSection>
    </Transition>
  );
}

export default Home;
