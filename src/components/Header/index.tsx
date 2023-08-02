'use client';
import * as Styled from './styles';
import { Curriculum } from '@/components/Curriculum';

export const Header = () => {
  return (
    <Styled.Container>
      <Styled.Title>Olá, Eu sou Andre Alves!</Styled.Title>

      <Styled.TextContainer>
        <Styled.Text>Fullstack Developer.</Styled.Text>
      </Styled.TextContainer>

      <Styled.StyledImage
        src="/img/header_bg.png"
        alt="Imagem abstrata"
        width={500}
        height={300}
      ></Styled.StyledImage>

      <Curriculum />
    </Styled.Container>
  );
};
