import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 2rem 0;
  `}
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 2rem 0;
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    position: relative;
    margin: 2rem 0;
    text-align: justify;
    color: ${theme.colors.grayColor};
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family.title};
    text-indent: ${theme.spacings.mediumLarge};

    @media ${theme.media.gteOrEqMedium} {
      font-size: ${theme.font.sizes.normal};
      text-indent: ${theme.spacings.large};
    }

    @media ${theme.media.gteOrEqMedium} {
      text-indent: ${theme.spacings.xlarge};
    }
  `}
`;
