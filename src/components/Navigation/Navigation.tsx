import { Link, NavLink as NLink } from 'react-router-dom';
import styled from 'styled-components';
import { ShoppingCart } from '@phosphor-icons/react';

import media from '../../utils/mediaQueries';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 0;
  position: relative;

  ${media.tablet`
    flex-direction: row;
    padding: 1.5rem 2rem;
  `}
`;

const Brand = styled.span`
  font-family: 'EB Garamond';
  font-size: 2.5rem;
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
  /* margin-left: auto; */
  padding: 0;
  list-style: none;

  ${media.tablet`
    margin-left: auto;
  `}
`;

const NavLink = styled(NLink)`
  text-decoration: none;
  text-transform: capitalize;
  font-size: 1.1rem;
  color: black;
  letter-spacing: -0.04rem;
`;

const CartContainer = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.8rem;

  ${media.tablet`
    position: relative;
    right: 0;
    top: 0;
  `}
`;

const links = [
  // { name: 'Home', path: '/' },
  { name: 'lookbook', path: 'lookbook' },
  { name: 'about', path: 'about' },
  { name: 'contact', path: 'contact' },
  { name: 'shop', path: 'shop' },
];

function Navigation() {
  return (
    <Nav data-testid="navigation">
      <NavLink to="/">
        <Brand>Batéy</Brand>
      </NavLink>
      <NavList>
        {links.map((link) => (
          <li key={link.name}>
            <NavLink to={`${link.path}`}>{link.name}</NavLink>
          </li>
        ))}
      </NavList>
      <CartContainer>
        <Link to="cart">
          <ShoppingCart
            aria-label="View shopping cart"
            size={24}
            weight="regular"
            color="black"
          />
        </Link>
      </CartContainer>
    </Nav>
  );
}

export default Navigation;
