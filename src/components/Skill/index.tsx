'use client'
import * as Styled from './styles';

interface SkillProps {
  technology: string;
  level: string;
  porcent: string;

}
export const Skill = ({ technology, level, porcent }: SkillProps) => {
  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <Styled.Title>{technology}</Styled.Title>
        <Styled.Paragraph>{level}</Styled.Paragraph>
      </Styled.TitleContainer>

      <Styled.Measure></Styled.Measure>
      <Styled.Progress porcent={porcent}></Styled.Progress>
    </Styled.Container>
  );
};
