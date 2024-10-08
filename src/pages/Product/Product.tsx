import { useLocation } from 'react-router-dom';

const Product = () => {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div>
      <img src={product.images[0]} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default Product;
