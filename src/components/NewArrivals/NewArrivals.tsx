import styled from 'styled-components';

import ProductCard from '../ProductCard/ProductCard';
import breakpoints from '../../config/breakpoints';
import { products } from '../../config/products';

const NewArrivalsSection = styled.section`
  padding: 3rem 3rem 5rem 3rem;
  background-color: #ede4d8;

  & h2 {
    line-height: 1;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;

    @media (min-width: ${breakpoints.tablet}) {
      flex-direction: row;
    }
  }

  & a {
    color: #284941;

    display: flex;
    flex-direction: column;
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
