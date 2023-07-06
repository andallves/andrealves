'use client'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.font.family.default};
    color: ${({ theme }) => theme.colors.whiteColor};
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }
`;
