import { Link, NavLink as NLink } from 'react-router-dom';
import styled from 'styled-components';
import { ShoppingCart } from '@phosphor-icons/react';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 0;
`;

const Brand = styled.span`
  font-family: 'EB Garamond';
  font-size: 2rem;
  font-weight: 500;
  line-height: 30px;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-left: auto;
  list-style: none;
`;

const NavLink = styled(NLink)`
  text-decoration: none;
  text-transform: capitalize;
  font-size: 1.1rem;
  color: black;
  letter-spacing: -0.04rem;
`;

function Navigation() {
  return (
    <Nav data-testid="navigation">
      <NavLink to="/">
        <Brand>Batéy</Brand>
      </NavLink>
      <NavList>
        {/* <li>
          <NavLink to="/">Home</NavLink>
        </li> */}
        <li>
          <NavLink to="lookbook">lookbook</NavLink>
        </li>
        <li>
          <NavLink to="about">our story</NavLink>
        </li>
        <li>
          <NavLink to="contact">contact</NavLink>
        </li>
        <li>
          <NavLink to="shop">shop</NavLink>
        </li>
      </NavList>
      <div>
        <Link to="cart">
          <ShoppingCart
            aria-label="View shopping cart"
            size={24}
            weight="regular"
            color="black"
          />
        </Link>
      </div>
    </Nav>
  );
}

export default Navigation;
