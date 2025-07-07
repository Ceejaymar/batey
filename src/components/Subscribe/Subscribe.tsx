import styled from 'styled-components';

import breakpoints from '../../config/breakpoints';
import shirtsOnDisplay from '../../assets/images/home/kh-shirts-display.jpg';

const SubscribeSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 350px;
  padding: 2rem;
  background-color: #ede4d8;
  color: #284941;

  & h3 {
    font-family: 'EB Garamond';
    font-size: 3rem;
    font-weight: 300;
    line-height: 1;
    margin-bottom: 1.5rem;
  }

  & form {
    margin-top: 3rem;
  }
`;

const ImgContainer = styled.div`
  display: none;
  width: 350px;
  height: 250px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SubscribeInput = styled.input`
  /* padding: 0.8rem 1.1rem; */
  padding: 1rem 1rem;
  border: 1px solid #284941;
  /* margin-right: 1rem; */
  font-size: 1rem;
`;

const SubscribeButton = styled.button`
  /* display: flex; */
  /* align-items: center; */
  color: #ffffff;
  border: 1px solid #f3a047;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 1.5rem;
  background-color: #f3a047;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background-color: #284941;
    color: white;
    border-color: #284941;
  }
`;

function Subscribe() {
  return (
    <SubscribeSection>
      <ImgContainer>
        <img src={shirtsOnDisplay} alt="Shirts on display" />
      </ImgContainer>
      <div>
        <h3>Join our community</h3>
        <p>Get notified when our next collection drops.</p>
        <Form>
          <SubscribeInput type="email" placeholder="Email address" />
          <SubscribeButton type="submit">Join</SubscribeButton>
        </Form>
      </div>
    </SubscribeSection>
  );
}

export default Subscribe;
