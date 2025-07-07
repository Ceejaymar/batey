import { css, type CSSProp } from 'styled-components';
import breakpoints from '../config/breakpoints';

const media = Object.keys(breakpoints).reduce(
  (acc, label) => {
    acc[label] = (styles: CSSProp) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${styles}
      }
    `;
    return acc;
  },
  {} as { [key: string]: any }
);

export default media;
