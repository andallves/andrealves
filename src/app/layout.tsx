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
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            {children}
            <GlobalStyles />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
