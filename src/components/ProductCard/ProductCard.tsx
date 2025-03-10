import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ProductProps {
  product: {
    productId: number;
    name: string;
    description: string;
    images: string[];
    price: number;
  };
}

const Card = styled(Link)`
  flex-basis: 1;
  max-width: 17rem;
`;

const Image = styled.img`
  /* border-radius: 0.5rem; */
`;

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card to={`/product/${product.productId}`} state={{ product }}>
      <Image src={product.images[0]} alt="Image of product" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </Card>
  );
};
export default ProductCard;
