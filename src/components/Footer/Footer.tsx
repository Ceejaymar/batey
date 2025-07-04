import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { siteLinks, socialLinks } from '../../config/appData';
import media from '../../utils/mediaQueries';

const FooterSection = styled.footer`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;

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
  width: 400px;
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const FormInput = styled.input`
  margin-top: 1rem;
  padding: 1rem 1.1rem;
  border: 1px solid black;
`;

const FormButton = styled.button`
  margin-top: 1rem;
  padding: 1rem 2rem;
  border: 1px solid black;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const SiteContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  gap: 8rem;
  padding-right: 5rem;
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
  font-size: 7rem;
  text-transform: uppercase;

  ${media.tablet`
    font-size: 15rem;
  `}

  ${media.desktop`
    font-size: 20rem;
  `}
`;

const FooterLink = styled(Link)``;

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
          {siteLinks.map((link) => (
            <FooterLink key={link.name} to={link.path}>
              {link.name}
            </FooterLink>
          ))}
        </AboutContent>
        <ContactContent>
          <h4>follow us</h4>
          {socialLinks.map((link) => (
            <FooterLink key={link.name} to={link.path}>
              {link.name}
            </FooterLink>
          ))}
        </ContactContent>
      </SiteContent>
      <FooterBrand>batéy</FooterBrand>
    </FooterSection>
  );
}

export default Footer;
