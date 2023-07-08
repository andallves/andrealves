import styled, { css } from 'styled-components';

interface LevelPorcentBar {
  readonly porcent: string;
}

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100%;
    margin: 0 auto;

    @media ${theme.media.gteOrEqMedium} {
      width: 85%;
    }

    @media ${theme.media.gteOrEqMedium} {
      width: 78%;
    }
  `}
`;

export const TitleContainer = styled.div`
  ${() => css`
    width: 97%;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    margin: 0 auto;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.font.family.title};
    font-size: ${theme.font.sizes.small};
    font-style: normal;
    font-weight: 400;
    line-height: 5rem;
    color: ${theme.colors.whiteColor};

    @media ${theme.media.gteOrEqMedium} {
      font-size: ${theme.font.sizes.normal};
    }

    @media ${theme.media.gteOrEqLarge} {
      font-size: ${theme.font.sizes.medium};
    }
  `};
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.logo};
    font-style: normal;
    font-weight: 400;
    font-size: ${theme.font.sizes.small};
    line-height: 3.6rem;

    @media ${theme.media.gteOrEqMedium} {
      font-size: ${theme.font.sizes.normal};
    }

    @media ${theme.media.gteOrEqLarge} {
      font-size: ${theme.font.sizes.medium};
    }
  `};
`;

export const Progress = styled.div<LevelPorcentBar>`
  ${({ theme, porcent }) => css`
      position: absolute;
      width: ${porcent};
      height: 1.2rem;
      top: 3.8rem;
      left: 0;

      background: #24c6dc;
      background: -webkit-linear-gradient(to right, #514a9d, #24c6dc);
      background: linear-gradient(to right, #514a9d, #24c6dc);
      border-radius: 8.3rem;
      z-index: 4;

      &:hover {
          box-shadow: 0 0 .5rem .2rem ${theme.colors.gradientColor};
      }

      @media ${theme.media.gteOrEqMedium} {
        height: 1.6rem;
        top: 4rem;
      }

      @media ${theme.media.gteOrEqLarge} {
        height: 2rem;
        top: 4.2rem;
      }
    `}
`;

export const Measure = styled.div`
  ${({ theme }) => css`
      position: absolute;
      width: 100%;
      height: 1.2rem;
      top: 3.8rem;
      background: ${theme.colors.blueColor};
      border-radius: 8.3rem;

      &:hover {
        box-shadow: 0 0 .5rem .2rem ${theme.colors.gradientColor};
      }

      @media ${theme.media.gteOrEqMedium} {
        height: 1.6rem;
        top: 4rem
      }

      @media ${theme.media.gteOrEqLarge} {
        height: 2rem;
        top: 4.2rem;
      }
  `};
`;
