import styled, { css } from 'styled-components';
import { HeadingProps } from '.'

export const Title = styled.h1<HeadingProps>`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family.title};
    font-weight: 500;
    margin: 3rem 0;

    @media ${theme.media.gteOrEqMedium} {
      font-size: ${theme.font.sizes.large};
    }

    @media ${theme.media.gteOrEqLarge} {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;
