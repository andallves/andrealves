import styled, { css } from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    transition: ${theme.transitions.slowest};

    @media ${theme.media.gteOrEqMedium} {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: ${theme.spacings.huge};
    }

    @media ${theme.media.gteOrEqLarge} {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: ${theme.spacings.xxhero};
    }
  `}
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    font-family: ${theme.font.family.title};
    font-style: normal;
    font-weight: 500;
    font-size: ${theme.font.sizes.medium};
    color${theme.colors.whiteColor};
    transition: ${theme.transitions.fast};


    @media ${theme.media.gteOrEqMedium} {
      font-size: ${theme.font.sizes.normal};
    }

    @media ${theme.media.gteOrEqLarge} {
      font-size: ${theme.font.sizes.normal};
    }

    &:hover {
      color: ${theme.colors.gradientColor};
    }
  `}
`;
