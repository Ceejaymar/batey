import styled from 'styled-components';
import Transition from '../../utils/transition';

const CartSection = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const Cart = () => {
  return (
    <Transition>
      <CartSection>Your shopping cart in empty!</CartSection>
    </Transition>
  );
};

export default Cart;
