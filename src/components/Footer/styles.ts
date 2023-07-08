import styled, { css } from 'styled-components';
import { Container as SocialMidia } from '@/components/SocialMidia/styles'

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 0;
    background-color: ${theme.colors.backgroundColor};

    @media ${theme.media.gteOrEqSmall} {
      flex-direction: row;
    }
  `}
`;

export const ContainerContato = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.medium};
    margin: ${theme.spacings.mediumSmall} 0;

    @media ${theme.media.gteOrEqSmall} {
      flex-direction: row;
    }

    @media ${theme.media.gteOrEqMedium} {
      flex-direction: row;
      gap: ${theme.spacings.large};
    }
  `}
`;

export const ContainerField = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.tiny};
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family.title};

    @media ${theme.media.gteOrEqMedium} {
      font-size: ${theme.font.sizes.normal};
    }
  `}
`;
