import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Transition from '../../utils/transition';

const CartSection = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  font-size: 1.2rem;
  color: black;
  letter-spacing: -0.04rem;
`;

function Cart() {
  return (
    <Transition>
      <CartSection>
        Your shopping cart in empty!
        <NavLink to="/shop">View the collection</NavLink>
      </CartSection>
    </Transition>
  );
}

export default Cart;
