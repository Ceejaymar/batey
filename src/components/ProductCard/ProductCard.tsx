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

const Card = styled(Link)<CardProps>`
  flex-basis: 1;
  /* max-width: 17rem; */
  text-decoration: none;
  color: ${({ textColor }) => (textColor === 'white' ? 'white' : '#284941')};

  /* text-align: center; */

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

const Image = styled.img`
  /* border-radius: 0.5rem; */
`;

function ProductCard({ product, textColor }: ProductProps) {
  return (
    <Card
      to={`/product/${product.productId}`}
      state={{ product }}
      textColor={textColor}
    >
      <Image src={product.images[0]} alt="Image of product" />

      <div>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
    </Card>
  );
}
export default ProductCard;
