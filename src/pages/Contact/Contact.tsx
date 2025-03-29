import styled from 'styled-components';
import {
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
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
  /* display: flex;
  flex-direction: column; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
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
`;

// const Label = styled.label`;
//   position: absolute;
//   top: 50%;
//   left: 0.5rem;
//   transform: translateY(-50%);
//   font-size: 1rem;
//   color: #aaa;
//   pointer-events: none;
//   transition: all 0.3s ease;

//   &.focused {
//     top: -0.5rem;
//     font-size: 0.8rem;
//     color: #333;
//   }
// `;

// const InputWrapper = styled.div`
//   position: relative;
//   margin-bottom: 1rem;

//   input,
//   textarea {
//     width: 100%;
//     padding: 0.5rem;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     outline: none;
//     font-size: 1rem;

//     &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
//       top: -0.5rem;
//       font-size: 0.8rem;
//       color: #333;
//     }
//   }

//   textarea {
//     resize: none;
//   }
// `;

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
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="first name"
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="last-name"
              id="lst-name"
              placeholder="last name"
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" placeholder="email" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="message"
              // rows={5}
            />
          </InputWrapper>
          {/* <button type="submit" value="submit">
            send
          </button> */}
        </Form>
      </FormDiv>
    </Section>
  );
};

export default Contact;
