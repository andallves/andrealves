'use client'
import * as Styled from './styles';
import { SocialMidia } from '@/components/SocialMidia';

export const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.ContainerContato>
        <Styled.ContainerField>
          <Styled.Paragraph>Whatsapp:</Styled.Paragraph>
          <Styled.Paragraph>(85) 99279 - 4032</Styled.Paragraph>
        </Styled.ContainerField>

        <Styled.ContainerField>
          <Styled.Paragraph>Email:</Styled.Paragraph>
          <Styled.Paragraph>andrealves10a@gmail.com</Styled.Paragraph>
        </Styled.ContainerField>
      </Styled.ContainerContato>

      <SocialMidia />
    </Styled.Footer>
  );
};
