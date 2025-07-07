import { Link } from 'react-router-dom';
import styled from 'styled-components';

import breakpoints from '../../config/breakpoints';
import headerImage from '../../assets/images/home/fd-garden.jpg';

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  /* height: 700px; */
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;
  border-image: linear-gradient(hsla(0, 0%, 0%, 0.3), hsla(0, 0%, 0%, 0.3)) fill
    1;
  font-family: 'eb garamond';

  & span {
    font-style: italic;
    font-weight: 300;
    text-shadow: 2px 2px 2px #00000011;
  }

  @media (max-width: ${breakpoints.tablet}) {
    /* width: 80%; */
  }
`;

const HeaderH2 = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  /* width: 40%; */

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 4rem;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: white;
  color: black;
  font-size: 1.2rem;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  text-transform: capitalize;
  border: 2px solid white;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'eb garamond';

  &:hover {
    background-color: white;
    color: black;
  }
`;

function Header() {
  return (
    <HeaderSection>
      <HeaderH2>Cultivated Cloth, Crafted for Comfort.</HeaderH2>
      <Button to="/shop">Shop All</Button>
    </HeaderSection>
  );
}

export default Header;
