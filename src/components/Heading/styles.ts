import styled, { css } from 'styled-components';
import { HeadingProps } from '.'

export const Title = styled.h1<HeadingProps>`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family.title};
    font-weight: 500;
    margin: 3rem 0;
  `}
`;
