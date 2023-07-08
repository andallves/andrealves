'use client';
import { AboutImage } from '../AboutImage';
import { Heading } from '../Heading';
import { WrapperSection } from '../WrapperSection';
import * as Styled from './styles';

export const About = () => {
  return (
    <WrapperSection>
      <Styled.Section id="about">
        <Heading as="h2">Sobre mim</Heading>

        <Styled.Container>
          <AboutImage srcImg="/img/about.png" altText="Foto de perfil" />

          <Styled.Paragraph>
            Olá, Eu me chamo Andre, tenho 23 anos, sou estudande de Ciência da
            Computação no IFCE - Instituto Federal do Ceará, e com estudos
            paralelo em desenvolvimento web fullstack, quando eu tive o primeiro
            contato com a programação foi 'amor a primeira vista' rsrs, me
            identifiquei muito, e desde então venho buscando aprender novas
            tecnologias e praticando diariamente, no meu perfil do Github há
            diversos projetos desenvolvidos por mim ou inspirados em cursos que
            participei.
          </Styled.Paragraph>
        </Styled.Container>
      </Styled.Section>
    </WrapperSection>
  );
};
