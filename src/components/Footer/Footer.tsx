import { Link } from 'react-router-dom';
import styled from 'styled-components';

import media from '../../utils/mediaQueries';
import { siteLinks, socialLinks } from '../../config/appData';

const FooterSection = styled.footer`
  display: flex;
  flex-wrap: wrap;
  /* margin-top: 5rem; */
  padding: 3rem 2rem;

  & h4 {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  & a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: 0.9rem;
  }
`;

const SubscribeContent = styled.div`
  /* width: 400px; */
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
`;

const FormInput = styled.input`
  /* margin-top: 1rem; */
  padding: 1rem 1rem;
  border: 1px solid black;
  font-size: 1rem;
`;

const FormButton = styled.button`
  /* margin-top: 1rem; */
  padding: 1rem 2rem;
  border: 1px solid #284941;
  background-color: #284941;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  color: white;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const SiteContent = styled.div`
  margin-top: 2rem;
  padding: 0 1rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
  /* justify-content: end; */
  /* gap: 8rem;  */
  /* padding-right: 5rem; */
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterBrand = styled.p`
  font-family: 'EB Garamond';
  font-size: 6rem;
  text-transform: uppercase;
  line-height: 1;
  position: relative;
  top: 2rem;

  ${media.tablet`
    font-size: 15rem;
  `}

  ${media.desktop`
    font-size: 20rem;
  `}
`;

function Footer() {
  return (
    <FooterSection data-testid="footer">
      <SubscribeContent>
        <h4>Subscribe to our newsletter</h4>
        <p>Sign up and receive news, updates and product information.</p>
        <Form>
          <FormInput type="email" placeholder="Email address" />
          <FormButton>Subscribe</FormButton>
        </Form>
      </SubscribeContent>
      <SiteContent>
        <AboutContent>
          <h4>site map</h4>
          <ul>
            {siteLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </AboutContent>
        <ContactContent>
          <h4>follow us</h4>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </ContactContent>
      </SiteContent>
      <FooterBrand>batéy</FooterBrand>
    </FooterSection>
  );
}

export default Footer;
