'use client'

import StyledComponentsRegistry from '../lib/registry';
import { GlobalStyles } from '@/styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { Metadata } from 'next';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

export const metadata: Metadata = {
  title: 'Portfolio - Andre Alves',
  description: 'Develop using NextJs by Andre Alves',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Raleway:wght@300;400&family=Ysabeau+Office:ital,wght@1,200&display=swap" rel="stylesheet" />
        <title>Andre Alves - Portfolio</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <StyleSheetManager shouldForwardProp={isPropValid}>
          <ThemeProvider theme={theme}>
            {children}
            <GlobalStyles />
          </ThemeProvider>
          </StyleSheetManager>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
