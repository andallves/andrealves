'use client'
import * as Styled from './styles';
import { WrapperSection } from '@/components/WrapperSection';
import { Heading } from '@/components/Heading';
import { ProjectCard } from '@/components/ProjectCard';

export const Projects = () => {
  return (
    <WrapperSection>
      <Styled.Container id="projects">
        <Heading as="h2" uppercase>
          Projetos
        </Heading>

        <Styled.WrapperProjects>
          <ProjectCard
            srcImg="/img/project-todo.png"
            altText="Projeto ToDo"
            title={'Todo'}
            description={
              'Uma lista de afazeres, onde é possível fazer um CRUD completo.'
            }
            link={'https://github.com/andallves/todo'}
          />
          <ProjectCard
            srcImg="/img/project-multistepform.png"
            altText="Projeto Formulário MultiStep"
            title={'Formulário MultiStep'}
            description={
              'Um formulário com várias etapas e só no final ele é enviado.'
            }
            link={'https://github.com/andallves/challenge_MultStepForm'}
          />
          <ProjectCard
            srcImg="/img/project-agenda.png"
            altText="Projeto Agenda"
            title="Agenda"
            description={
              'Uma agenda onde você faz o cadastro, depois acessa seu login para poder fazer o CRUD.'
            }
            link={'https://github.com/andallves/projetoagenda'}
          />
        </Styled.WrapperProjects>
      </Styled.Container>
    </WrapperSection>
  );
};
