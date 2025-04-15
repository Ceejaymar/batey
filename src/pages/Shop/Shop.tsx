import styled from 'styled-components';

import ProductCard from '../../components/ProductCard/ProductCard';
import Transition from '../../utils/transition';
import { products } from '../../config/products';

const ProductsContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

function Shop() {
  return (
    <Transition>
      <h1>Shop</h1>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </ProductsContainer>
    </Transition>
  );
}

export default Shop;
