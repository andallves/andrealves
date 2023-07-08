import Image from 'next/image';
import styled, { css, keyframes } from 'styled-components';
import { Container as CurriculumContainer } from '@/components/Curriculum/styles';

/* KEYFRAMES ANIMATIONS */
const homeBgText = keyframes`
  0%,
  10%,
  100% {
    background-position: -25rem 0;
  }

  65%,
  85% {
    background-position: 0 0;
  }
`;

const homeBgTextTablet = keyframes`
  0%,
  10%,
  100% {
    background-position: -29rem 0;
  }

  65%,
  85% {
    background-position: 0 0;
  }
`;

const homeBgTextDesktop = keyframes`
  0%,
  10%,
  100% {
    background-position: -39rem 0;
  }

  65%,
  85% {
    background-position: 0 0;
  }
`;

const homeCursorText = keyframes`
  0%,
  10%,
  100% {
    width: 0;
  }

  65%,
  78%,
  85% {
    width: 100%;
    opacity: 1;
  }

  75%,
  81% {
    opacity: 0;
  }
`;

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    min-width: 32rem;
    height: 100vh;
    padding: 0 ${theme.spacings.medium};

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: flex-start;
    align-items: start;
    overflow-y: hidden;
    transition: ${theme.transitions.fast};

    background: ${theme.colors.backgroundColor};


    ${CurriculumContainer} {
      margin-top: ${theme.spacings.xhero};
      position: relative;
      width: 14rem;
      height: 4rem;
      left: 10rem;
    }

    @media ${theme.media.gteOrEqMedium} {
      height: 90vh;
      padding: 0 6rem;
      margin-top: 5rem;
    }
    
    @media ${theme.media.gteOrEqLarge} {
      height: 90vh;
      padding: 0 10rem;
      margin-top: 8rem;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
      position: relative;
      font-size: ${theme.font.sizes.medium};
      font-family: ${theme.font.family.secondary};
      font-style: normal;
      margin-left: 4%;
      font-weight: 700;
      letter-spacing: .1rem;
      color: transparent;
      -webkit-text-stroke: 0.7px ${theme.colors.gradientColor};
      background-image: linear-gradient(${theme.colors.gradientColor}, ${theme.colors.gradientColor});
      background-repeat: no-repeat;
      background-clip: text;
      -webkit-background-clip: text;
      background-position: 2rem 0;

      -webkit-text-stroke: 0.7px ${theme.colors.gradientColor};
      animation: ${homeBgText} 6s linear infinite;
      animation-delay: 2s;

      &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      border-right: 2px solid ${theme.colors.gradientColor};
      animation: ${homeCursorText} 6s linear infinite;
      animation-delay: 2s;
      }

    @media ${theme.media.gteOrEqSmall} {
      font-size: ${theme.font.sizes.large} ;
      animation: ${homeBgTextTablet} 6s linear infinite;
      animation-delay: 2s;


    }

    @media ${theme.media.gteOrEqMedium} {
      font-size: ${theme.font.sizes.xlarge};
      animation: ${homeBgTextDesktop} 6s linear infinite;
      animation-delay: 2s;

    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
      position: relative;
      width: 20rem;
      left: 5%;
  `}
`;

export const Text = styled.h3`
  ${({ theme }) => css`
      left: 50%;
      font-size: ${theme.font.sizes.normal};
      font-family: ${theme.font.family.title};

      font-style: italic;
      letter-spacing: .1rem;
      color: ${theme.colors.whiteColor};

    @media ${theme.media.gteOrEqMedium} {
      font-size: ${theme.font.sizes.medium};
      width: 30rem;
    }

    @media ${theme.media.gteOrEqMedium} {
      font-size: ${theme.font.sizes.madium};
      width: 30rem;
    }
  `};
`;

export const StyledImage = styled(Image)`
  ${({ theme }) => css`
    position: absolute;
    width: 80%;
    max-width: 40rem;
    height: 50rem;
    opacity: 0.1;
    right: 6%;
    transition; ${theme.transitions.fastest};

    @media ${theme.media.gteOrEqMedium} {
      right: 9%
      opacity: .4;
    }

    @media ${theme.media.gteOrEqLarge} {
      right: 12%;
      opacity: .7;
    }

  `}
`;
