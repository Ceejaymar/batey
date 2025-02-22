import styled from 'styled-components';

import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../config/products';

const ProductsContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </ProductsContainer>
    </div>
  );
};

export default Shop;
