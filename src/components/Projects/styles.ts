import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({theme}) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${theme.media.gteOrEqMedium} {
      padding: 3%;
    }
`}
`;

export const WrapperProjects = styled.div`
  ${({ theme }) => css`
    max-width: 70rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media ${theme.media.gteOrEqMedium} {
      max-width: 80rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 2%;
    }

    @media ${theme.media.gteOrEqLarge} {
      max-width: 130rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 5rem;
    }
  `}
`;
