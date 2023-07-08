import styled, { css } from 'styled-components';
import Image from 'next/image';
import { Title } from '@/components/Heading/styles';
import { Button } from '@/components/Button/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 25rem;
    height: 34rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    border-top-left-radius: 3rem;
    border-bottom-right-radius: 3rem;
    box-shadow: 0 0 0.9rem 0.1rem #00d2ff;
    padding: 0 2rem;
    margin: 2rem;
    transition: ${theme.transitions.fast};

    ${Title} {
      margin: 0;
      font-size: ${theme.font.sizes.small};
      font-weight: bold;
      letter-spacing: .1rem;
    }

    ${Button} {
      margin-top: 1rem;
      font-size: ${theme.font.sizes.small};
    }

    &:hover {
      box-shadow: 0 0 1rem 0.5rem #00d2ff;
      transform: scale(1.1);

    }

    @media ${theme.media.gteOrEqMedium} {
      width: 30rem;
      height: 44rem;

      ${Title} {
        margin: 0;
        font-size: ${theme.font.sizes.normal};
        font-weight: bold;
        letter-spacing: .1rem;
      }

      ${Button} {
        margin-top: 2rem;
        font-size: ${theme.font.sizes.small};
      }
    }
  `}
`;

export const StyledImage = styled(Image)`
  ${({ theme }) => css`
    width:  22rem;
    height: 14rem;
    border-radius: .5rem;

    @media ${theme.media.gteOrEqMedium} {
      width: 26rem;
      height: 18rem;
    }
  `}
`;

export const Bar = styled.div`
  ${({ theme }) => css`
  width: 20rem;
  height: 0.4rem;
  background: #24c6dc;
  background: -webkit-linear-gradient(to right, #514a9d, #24c6dc);
  background: linear-gradient(to right, #514a9d, #24c6dc);
  border-radius: 8.3rem;

    @media ${theme.media.gteOrEqMedium} {
      width: 22rem;
      height: .5rem;
    }
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};

    @media ${theme.media.gteOrEqMedium} {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export const ContainerButton = styled.div`
  width: 100%;
  align-items: flex-start;
`;
