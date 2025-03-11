import styled from 'styled-components';

import Transition from '../../utils/transition';

const Section = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const PageNotFound = () => {
  return (
    <Transition>
      <Section>Nothing here!</Section>
    </Transition>
  );
};

export default PageNotFound;
