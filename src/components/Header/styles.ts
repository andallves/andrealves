import Image from 'next/image';
import styled, { css, keyframes } from 'styled-components';
import { Container as CurriculumContainer } from '@/components/Curriculum/styles';

/* KEYFRAMES ANIMATIONk */
const homeBgText = keyframes`
  0%,
  10%,
  100% {
    background-position: -35rem 0;
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
    height: 100vh;
    padding: 0 ${theme.spacings.medium};

    position: relative;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: flex-start;
    justify-content: center;
    overflow-y: hidden;

    background: ${theme.colors.backgroundColor};



    ${CurriculumContainer} {
      margin-top: ${theme.spacings.xhero};
      position: relative;
      width: 14rem;
      height: 4rem;
    }

  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
      position: relative;
      font-size: ${theme.font.sizes.medium};
      font-family: ${theme.font.family.default};
      font-style: normal;
      font-weight: 400;
      color: ${theme.colors.whiteColor};
    `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
      position: relative;
      width: 20rem;
      left: ${theme.spacings.medium};
  `}
`;

export const Text = styled.h3`
  ${({ theme }) => css`

      font-size: ${theme.font.sizes.normal};
      font-weight: 700;
      font-style: italic;
      letter-spacing: .1rem;
      color: transparent;
      -webkit-text-stroke: 0.7px ${theme.colors.gradientColor};
      background-image: linear-gradient(${theme.colors.gradientColor}, ${theme.colors.gradientColor});
      background-repeat: no-repeat;
      background-clip: text;
      -webkit-background-clip: text;
      background-position: 12rem 0;

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
  `};
`;

export const StyledImage = styled(Image)`
  ${() => css`
    position: absolute;
    width: 26rem;
    height: 50rem;
    opacity: 0.15;
  `}
`;
