'use client'
import StyledComponentsRegistry from '../lib/registry';
import { GlobalStyles } from '@/styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Andre Alves - Portfolio</title>
      </head>
      <body>
          <StyleSheetManager shouldForwardProp={isPropValid}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            {children}
            <GlobalStyles />
          </ThemeProvider>
        </StyledComponentsRegistry>
          </StyleSheetManager>
      </body>
    </html>
  );
}
