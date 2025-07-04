import styled from 'styled-components';

import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../config/products';

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

function NewArrivals() {
  return (
    <NewArrivalsSection>
      <h2>New Arrivals</h2>
      <div>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </NewArrivalsSection>
  );
}

export default NewArrivals;
