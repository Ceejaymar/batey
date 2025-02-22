import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../components/Button/Button';

const SizeButton = styled(Button)<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>`
  background-color: white;
`;

const Product = () => {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div>
      <img src={product.images[0]} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>

      {Object.keys(product.stock).map((key) => {
        return (
          <SizeButton key={key} onClick={() => {}}>
            {key.toLocaleUpperCase()}
          </SizeButton>
        );
      })}
    </div>
  );
};

export default Product;
