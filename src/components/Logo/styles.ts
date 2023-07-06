import styled, { css } from 'styled-components';

export const H2 = styled.h2`
  ${({ theme }) => css`
    font-family: 'Satisfy', cursive;
    font-style: normal;
    font-weight: 600;
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gradientColor};
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.8);
    transition: ${theme.transitions.slowest};

    @media ${theme.media.gteOrEqMedium} {
      font-size: ${theme.font.sizes.medium};
      width: 100rem;
    }

    @media ${theme.media.gteOrEqLarge} {
      font-size: ${theme.font.sizes.large};
    }
  `}
`;
