import styled, { css } from 'styled-components';

export const LogoText = styled.h2`
  ${({ theme }) => css`
    width: 100%;
    font-family: ${theme.font.family.logo};
    font-style: normal;
    font-weight: 600;
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.gradientColor};
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.8);
    transition: ${theme.transitions.slowest};

    @media ${theme.media.gteOrEqMedium} {
      font-size: ${theme.font.sizes.medium};
      width: 20rem;
    }
  `}
`;
