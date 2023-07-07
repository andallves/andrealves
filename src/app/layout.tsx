'use client'

import StyledComponentsRegistry from '../lib/registry';
import { GlobalStyles } from '@/styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

export const metadata = {
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
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            {children}
            <GlobalStyles />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>s
    </html>
  );
}
