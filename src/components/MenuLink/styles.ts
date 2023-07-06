import styled, { css } from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.5rem;
    transition: ${theme.transitions.slowest};

    @media ${theme.media.gteOrEqMedium} {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: ${theme.spacings.xhero};
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
    font-family: ${theme.font.family.default};
    font-style: normal;
    font-weight: 500;
    font-size: ${theme.font.sizes.large};
    color${theme.colors.whiteColor};
    transition: ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.gradientColor};
    }

    @media ${theme.media.gteOrEqMedium} {
      font-size: ${theme.font.sizes.normal};
    }

    @media ${theme.media.gteOrEqLarge} {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
