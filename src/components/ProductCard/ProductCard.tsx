import { Link } from 'react-router-dom';
import styled from 'styled-components';

type ProductProps = {
  product: {
    productId: number;
    name: string;
    description: string;
    images: string[];
    price: number;
  };
};

const Card = styled(Link)`
  flex-basis: 1;
  max-width: 17rem;
  text-decoration: none;
  color: #284941;

  /* text-align: center; */

  & img {
    margin-bottom: 1rem;
  }

  & div {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
  }
`;

const Image = styled.img`
  /* border-radius: 0.5rem; */
`;

function ProductCard({ product }: ProductProps) {
  return (
    <Card to={`/product/${product.productId}`} state={{ product }}>
      <Image src={product.images[0]} alt="Image of product" />

      <div>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
    </Card>
  );
}
export default ProductCard;
