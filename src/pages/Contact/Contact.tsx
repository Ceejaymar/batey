import styled from 'styled-components';
import {
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 5rem 0;
`;

const ContactContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SocialContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
`;

const FormDiv = styled.div`
  flex: 1;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 1rem;
`;

const InputWrapper = styled.div`
  &:first-of-type {
    grid-area: 1 / 1 / 2 / 3;
  }
  &:nth-of-type(2) {
    grid-area: 1 / 3 / 2 / 5;
  }
  &:nth-of-type(3) {
    grid-area: 2 / 1 / 3 / 5;
  }
  &:nth-of-type(4) {
    grid-area: 3 / 1 / 4 / 5;
  }
  &:nth-of-type(5) {
    grid-area: 4 / 1 / 6 / 5;
  }

  position: relative;
  margin-bottom: 1rem;

  label {
    position: absolute;
    top: 40%;
    left: 0.75rem;
    transform: translateY(-50%);
    transition: all 0.2s ease;
    background: transparent;
    padding: 0 0.25rem;
    color: grey;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem 1rem 1rem;
    border: 1px solid #ccc;
    outline: 2px solid transparent;

    &:focus {
      /* outline: 2px solid #000; */
    }
  }

  input:focus + label,
  input:not(:placeholder-shown) + label,
  textarea:focus + label,
  textarea:not(:placeholder-shown) + label {
    top: -0.75rem;
    left: 0.5rem;
    font-size: 0.75rem;
    color: black;
  }
`;

const Button = styled.button`
  color: #ffffff;
  border: 1px solid #f3a047;
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;
  padding: 0.8rem 2rem;
  background-color: #f3a047;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background-color: #284941;
    color: white;
    border-color: #284941;
  }
`;

const Contact = () => {
  return (
    <Section>
      <ContactContent>
        <h1>Contact us</h1>
        <p>info@batey.com</p>
        <p>555-555-5555</p>
        <SocialContainer>
          <InstagramLogo size={32} weight="light" />
          <YoutubeLogo size={32} weight="light" />
          <LinkedinLogo size={32} weight="light" />
        </SocialContainer>
      </ContactContent>
      <FormDiv>
        <Form>
          <InputWrapper>
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder=" "
            />
            <label htmlFor="first-name">First Name</label>
          </InputWrapper>
          <InputWrapper>
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder=" "
            />
            <label htmlFor="last-name">Last Name</label>
          </InputWrapper>
          <InputWrapper>
            <input type="text" name="email" id="email" placeholder=" " />
            <label htmlFor="email">Email</label>
          </InputWrapper>
          <InputWrapper>
            <input type="text" name="subject" id="subject" placeholder=" " />
            <label htmlFor="subject">Subject</label>
          </InputWrapper>
          <InputWrapper>
            <textarea name="message" id="message" placeholder=" " rows={5} />
            <label htmlFor="message">Message</label>
          </InputWrapper>
          <Button type="submit" value="submit">
            send
          </Button>
        </Form>
      </FormDiv>
    </Section>
  );
};

export default Contact;
