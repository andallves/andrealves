import * as Styled from './styles';

export const MenuLink = () => {
  return (
    <Styled.Container>
      <Styled.StyledLink href='#projects'>Projetos</Styled.StyledLink>
      <Styled.StyledLink href='#technologies'>Tecnologias</Styled.StyledLink>
      <Styled.StyledLink href='#about'>Sobre</Styled.StyledLink>
    </Styled.Container>
  )
}
