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
  textColor?: 'white';
};

interface CardProps {
  textColor?: 'white';
}

const Card = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop != 'textColor',
})<CardProps>`
  flex-basis: 1;
  text-decoration: none;
  color: ${({ textColor }) => (textColor === 'white' ? 'white' : '#284941')};

  & img {
    margin-bottom: 0.5rem;
  }

  & div {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

function ProductCard({ product, textColor }: ProductProps) {
  return (
    <Card
      to={`/product/${product.productId}`}
      state={{ product }}
      textColor={textColor}
    >
      <img src={product.images[0]} alt="Image of product" />

      <div>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
    </Card>
  );
}
export default ProductCard;
