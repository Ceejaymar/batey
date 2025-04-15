import styled from 'styled-components';

import Transition from '../../utils/transition';

const AboutSection = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

function About() {
  return (
    <Transition>
      <AboutSection>Check back in soon!</AboutSection>
    </Transition>
  );
}

export default About;
