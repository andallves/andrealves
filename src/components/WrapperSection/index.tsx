import * as Styled from './styles';


interface WrapperSectionProps {
  children: React.ReactNode,
};
export const WrapperSection = ({ children }: WrapperSectionProps) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};
