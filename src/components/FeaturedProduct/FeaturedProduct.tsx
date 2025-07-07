import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ProductCard from '../ProductCard/ProductCard';
import lcFeatured from '../../assets/images/home/lc-featured.jpg';
import { products } from '../../config/products';

const FeaturedProductSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  /* justify-content: center; */
  align-items: center;
  /* height: 700px; */
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
  /* justify-content: space-between; */

  align-items: center;
  /* align-items: start; */
  gap: 3rem;
  height: 75%;
  max-width: 500px;
  text-align: center;

  & h4 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 2rem;
  }
`;

const ProductDiv = styled.div`
  max-width: 300px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 5px;
  /* margin-right: 3rem; */
`;

const StyledPCard = styled(ProductCard)`
  color: white;
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
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'eb garamond';

  &:hover {
    background-color: white;
    color: black;
  }
`;

function FeaturedProduct() {
  return (
    <FeaturedProductSection>
      <FeaturedDesc>
        <div>
          <h4>Effortless pieces, timeless style</h4>
          <p>
            Locally sourced, designed for legacy: our collections are crafted to
            endure, reducing environmental impact and our footprint for
            generations to come.
          </p>
        </div>
        <Button to="/shop">Shop Now</Button>
      </FeaturedDesc>
      <ProductDiv>
        <StyledPCard product={products[9]} />
      </ProductDiv>
    </FeaturedProductSection>
  );
}

export default FeaturedProduct;
