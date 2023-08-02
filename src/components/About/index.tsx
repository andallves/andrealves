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
            Olá! Sou um estudante de desenvolvimento de aplicação em busca de minha primeira oportunidade como desenvolvedor full stack. Estou entusiasmado para compartilhar minhas habilidades e paixão pela área. Com um ano de experiência no desenvolvimento de projetos pessoais, tenho buscado aplicar meus conhecimentos em projetos reais.
          </Styled.Paragraph>
          <Styled.Paragraph>
            Minha principal área de especialização é em React com Next e TypeScript. Essas tecnologias me permitem criar interfaces de usuário atrativas e funcionais, proporcionando uma experiência excepcional aos usuários. Acredito na importância de entregar sistemas e aplicações web modernas, que sejam responsivas e atendam às necessidades dos usuários de forma eficiente.
          </Styled.Paragraph>
          <Styled.Paragraph>
            Tenho um conhecimento sólido em HTML5, CSS3 e JavaScript, que são fundamentais para o desenvolvimento de sites interativos e responsivos. Utilizando essas tecnologias, posso criar interfaces intuitivas e amigáveis, seguindo as melhores práticas de design.
          </Styled.Paragraph>
          <Styled.Paragraph>
            Além disso, adquiri experiência no desenvolvimento de APIs e na integração com bancos de dados MySQL. Isso me permitiu construir sistemas robustos e escaláveis, além de manipular dados de forma eficiente utilizando SQL.
          </Styled.Paragraph>
          <Styled.Paragraph>
            Como um desenvolvedor full stack, também estou familiarizado com o Git, uma ferramenta indispensável para o controle de versionamento de projetos. Minha habilidade em utilizá-lo me permite colaborar com outros desenvolvedores de forma eficaz, garantindo a organização e rastreabilidade do código-fonte.
          </Styled.Paragraph>
          <Styled.Paragraph>
            Como estudante de desenvolvimento de aplicação, estou sempre em busca de aprendizado e atualização contínua. Tenho uma atitude proativa e estou preparado para enfrentar desafios e aprender com eles. Estou comprometido em aprimorar minhas habilidades e conhecimentos para alcançar resultados excepcionais.
          </Styled.Paragraph>
          <Styled.Paragraph>
            Estou animado para aproveitar minhas competências como desenvolvedor full stack e contribuir para projetos inovadores. Se você procura um profissional dedicado, ávido por aprender e com habilidades versáteis, sou a pessoa certa. Estou ansioso para colaborar com profissionais talentosos e juntos alcançarmos resultados incríveis.
          </Styled.Paragraph>
          <Styled.Paragraph>
            Convido você a explorar meu perfil e projetos no GitHub para ter uma visão mais aprofundada das minhas habilidades e realizações. Estou aberto a oportunidades de desenvolvimento de sistemas web e animado para fazer parte de equipes dinâmicas e desafiadoras. Vamos trabalhar juntos para alcançar o sucesso!
          </Styled.Paragraph>
        </Styled.Container>
      </Styled.Section>
    </WrapperSection>
  );
};
