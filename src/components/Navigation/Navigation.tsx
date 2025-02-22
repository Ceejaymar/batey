import { Link, NavLink as NLink } from 'react-router-dom';
import styled from 'styled-components';
import { ShoppingCart } from '@phosphor-icons/react';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Brand = styled.div`
  font-family: 'EB Garamond';
  font-size: 2rem;
  font-weight: 600;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  margin-left: auto;
  list-style: none;
`;

const NavLink = styled(NLink)`
  text-decoration: none;
  font-size: 1.3rem;
  color: black;
  letter-spacing: -0.04rem;
`;

const Navigation = () => {
  return (
    <Nav data-testid="navigation">
      <Brand>Batey</Brand>
      <NavList>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </NavList>
      <div>
        <Link to="cart">
          <ShoppingCart
            aria-label="View shopping cart"
            size={28}
            weight="thin"
            color="black"
          />
        </Link>
      </div>
    </Nav>
  );
};

export default Navigation;
