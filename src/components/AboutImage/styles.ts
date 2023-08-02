import Image from 'next/image';
import styled, { css, keyframes } from 'styled-components';

const aboutSpinner = keyframes`
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export const StyledImage = styled(Image)`
  border-radius: 50%;
  border: 0.2rem solid ${({theme}) => theme.colors.gradientColor};
`;

export const Spinner = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border-top: 0.2rem solid ${theme.colors.backgroundColor};
    border-bottom: 0.2rem solid ${theme.colors.backgroundColor};
    border-left: 0.2rem solid ${theme.colors.gradientColor};
    border-right: 0.2rem solid ${theme.colors.gradientColor};
    animation: ${aboutSpinner} 8s linear infinite;
  `}
`;
