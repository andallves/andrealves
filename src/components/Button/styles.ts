import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    width: 13rem;
    height: 4rem;
    background: #24c6dc;
    background: -webkit-linear-gradient(to right, #514a9d, #24c6dc);
    background: linear-gradient(to right, #514a9d, #24c6dc);
    border-radius: 5rem;
    font-family: ${theme.font.family.default};
    font-style: normal;
    font-weight: 400;
    font-size: ${theme.font.sizes.xsmall};
    line-height: 4.2rem;
    color: ${theme.colors.whiteColor};
    cursor: pointer;
    transition: all .5s;

    &:hover {
      opacity: .8;
    }
  `}
`;

export const A = styled.a``;
