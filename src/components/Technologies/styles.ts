import styled, { css } from 'styled-components';
import { Title } from '@/components/Heading/styles';

export const Section = styled.section`
  ${() => css`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 2rem;
  `}
`;

export const ContainerSkills = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    gap: 2rem;
  `}
`;

export const ContainerAdditionalSkills = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: flex-start;
    margin: 5rem auto;
    padding: 0 2rem;

    ${Title} {
      font-size: ${theme.font.sizes.normal};
      font-weight: 500;
    }

    @media ${theme.media.gteOrEqMedium} {
      ${Title} {
        font-size: ${theme.font.sizes.medium};
        font-weight: 500;
      }
    }

    @media ${theme.media.gteOrEqLarge} {
      ${Title} {
        font-size: ${theme.font.sizes.medium};
        font-weight: 500;
      }
    }
  `}
`;

export const StyledList = styled.ul`
  ${({ theme }) => css`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: start;
    gap: 1.5rem;
    padding: 1rem 2rem;
    margin: 2rem 0;

    @media ${theme.media.gteOrEqSmall} {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

  `}
`;

export const StyledItem = styled.li`
  ${({ theme }) => css`
    align-items: start;
    font-size: ${theme.font.sizes.small};

    @media ${theme.media.gteOrEqMedium} {
      font-size: ${theme.font.sizes.medium};
      font-weight: 500;
    }

    @media ${theme.media.gteOrEqLarge} {
      font-size: ${theme.font.sizes.medium};
      font-weight: 500;
    }
  `}
`;
