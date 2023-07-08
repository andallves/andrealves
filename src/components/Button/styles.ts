import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    width: 13rem;
    height: 4rem;
    background: #24c6dc;
    background: -webkit-linear-gradient(to right, #514a9d, #24c6dc);
    background: linear-gradient(to right, #514a9d, #24c6dc);
    border-radius: 5rem;
    font-family: ${theme.font.family.title};
    font-style: normal;
    font-weight: 400;
    font-size: ${theme.font.sizes.xsmall};
    line-height: 4.2rem;
    color: ${theme.colors.whiteColor};
    transition: ${theme.transitions.normal};
    cursor: pointer;

    &:hover {
      opacity: .8;
    }
  `}
`;

export const A = styled.a``;
