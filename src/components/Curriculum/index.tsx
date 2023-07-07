import * as Styled from './styles';

export const Curriculum = () => {
  return (
    <Styled.Container>
      <Styled.A
        href='../../assets/Andre_Alves_Pereira_CV.pdf'
        download='André_Alves_Pereira._CV.pdf'
        type='application.pdf'
      >
        <Styled.P className='btnText'>Saiba mais CV</Styled.P>
      </Styled.A>
    </Styled.Container>
  );
};
