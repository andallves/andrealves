'use client'
import * as Styled from './styles';
import { WrapperSection } from '../WrapperSection';
import { Heading } from '../Heading';
import { Skill } from '../Skill';

export const Technologies = () => {
  return (
    <WrapperSection>
      <Styled.Section id="technologies">
        <Heading as="h3">Tecnologias</Heading>

        <Styled.ContainerSkills>
          <Skill technology={'HTML5'} level={'Advanced'} porcent={'90%'} />
          <Skill technology={'CSS3'} level={'Advanced'} porcent={'80%'} />
          <Skill
            technology={'JavaScript'}
            level={'Intermediate'}
            porcent={'70%'}
          />
          <Skill
            technology={'TypeScript'}
            level={'Intermediate'}
            porcent={'50%'}
          />
          <Skill technology={'React'} level={'Intermediate'} porcent={'70%'} />
          <Skill
            technology={'Styled-Components'}
            level={'Intermediate'}
            porcent={'50%'}
          />
          <Skill technology={'Jest'} level={'Intermediate'} porcent={'50%'} />
          <Skill technology={'Node'} level={'Intermediate'} porcent={'40%'} />
          <Skill
            technology={'BootStrap'}
            level={'Intermediate'}
            porcent={'60%'}
          />
          <Skill technology={'Python'} level={'Beginner'} porcent={'30%'} />
          <Skill technology={'MySQL'} level={'Beginner'} porcent={'30%'} />
        </Styled.ContainerSkills>

        <Styled.ContainerAdditionalSkills>
          <Heading as="h3">Habilidades e Tecnologias adicionais</Heading>
          <Styled.StyledList>
            <Styled.StyledItem>Git</Styled.StyledItem>
            <Styled.StyledItem>npm</Styled.StyledItem>
            <Styled.StyledItem>Storybook</Styled.StyledItem>
            <Styled.StyledItem>Testing-library</Styled.StyledItem>
          </Styled.StyledList>
        </Styled.ContainerAdditionalSkills>
      </Styled.Section>
    </WrapperSection>
  );
};
