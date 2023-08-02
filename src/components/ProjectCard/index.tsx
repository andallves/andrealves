'use client';
import { useState } from 'react';
import { Button } from '../Button';
import { Heading } from '../Heading';
import * as Styled from './styles';

interface ProjectCardProps {
  srcImg: string;
  altText: string;
  title: string;
  description: string;
  link: string;
}
export const ProjectCard = ({
  srcImg,
  altText,
  title,
  description,
  link,
}: ProjectCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Styled.Container onClick={() => setOpen(!open)} >
      <Styled.StyledImage src={srcImg} alt={altText} width={400} height={400} />
      <Heading as="h3">{title}</Heading>
      <Styled.Bar></Styled.Bar>
      <Styled.Paragraph>{description}</Styled.Paragraph>
      <Styled.ContainerButton>
        <Button type={'button'} link={link}>
          Ir
        </Button>
      </Styled.ContainerButton>
    </Styled.Container>
  );
};
