import styled, { css } from 'styled-components';

type MenuShowed = {
  showMenu?: boolean;
};

const menuShowed = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.nav<MenuShowed>`
  ${({ theme, showMenu }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    visibility: hidden;
    opacity: 0;
    ${showMenu && menuShowed()}
    background-color: ${theme.colors.backgroundColor};
    transition: ${theme.transitions.fast};

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    overflow-y: auto;
    gap: ${theme.spacings.xxhero};

    @media ${theme.media.gteOrEqMedium} {
      height: 5rem;
      display: flex;
      align-items: center;
    }
  `}
`;

export const Navbar = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: ${theme.spacings.xlarge} 0;
    transition: ${theme.transitions.slowest};
    gap: ${theme.spacings.hero};

    @media ${theme.media.gteOrEqMedium} {
      display: flex;
      width: ;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 ${theme.spacings.xlarge};
      height: 7rem;
    }

    @media ${theme.media.gteOrEqLarge} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem ${theme.spacings.xxhero};
      height: 9rem;
    }
  `};
`;

export const Button = styled.button<MenuShowed>`
  ${({ theme, showMenu }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.backgroundColor};
    color: ${theme.colors.blueColor};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: ${showMenu ? 'none' : 'all'};

    @media ${theme.media.gteOrEqMedium} {
      display: none;
    }

    > svg {
      width: 3rem;
      height: 3rem;
    }
  `}
`;
