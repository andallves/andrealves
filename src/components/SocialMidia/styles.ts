import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Container = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.large};
    list-style: none;
    transition: ${theme.transitions.slowest};

    @media ${theme.media.gteOrEqMedium} {
      gap: ${theme.spacings.small};
    }

    @media ${theme.media.gteOrEqLarge} {
      gap: ${theme.spacings.huge};
    }
  `}
`;

export const Li = styled.li``;

export const StyledLink = styled(Link)`
  ${({ theme }) => css`

    > svg {
      fill: ${theme.colors.whiteColor};
      width: 3.5rem;
      cursor: pointer;
      transition: all 0.4s;

      &:hover {
        fill: ${theme.colors.gradientColor};
      }

      @media ${theme.media.gteOrEqMedium} {
        width: 3rem;
      }
    }
  `}
`;
