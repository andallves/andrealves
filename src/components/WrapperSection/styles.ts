import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-width: 32rem;
    height: 100%;
    min-height: 100vh;

    padding: ${theme.spacings.medium} 0rem;
    background: ${theme.colors.backgroundColor};

    /* @media ${theme.media} */
  `}
`;
