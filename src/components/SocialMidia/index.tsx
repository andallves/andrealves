import * as Styled from './styles';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';

export const SocialMidia = () => {
  return (
    <Styled.Container>
      <Styled.Li>
        <Styled.StyledLink href="https://github.com/andallves" target="_blank">
          <Github />
        </Styled.StyledLink>
      </Styled.Li>

      <Styled.Li>
        <Styled.StyledLink
          href="https://www.linkedin.com/in/andre-alves-pereira-02738114b/"
          target="_blank"
        >
          <Linkedin />
        </Styled.StyledLink>
      </Styled.Li>

      <Styled.Li>
        <Styled.StyledLink
          href="https://www.instagram.com/andallves/"
          target="_blank"
        >
          <Instagram />
        </Styled.StyledLink>
      </Styled.Li>
    </Styled.Container>
  );
};
