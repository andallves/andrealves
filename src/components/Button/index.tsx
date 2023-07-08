import * as Styled from './styles';

interface ButtonProps {
  children: React.ReactNode | string;
  type: 'button' | 'submit' | 'reset';
  link: string;
}

export const Button = ({ children, type, link }: ButtonProps) => {
  return (
    <Styled.Button type={type} >
      <Styled.A href={link} target='_blank'>{children}</Styled.A>
    </Styled.Button>
  );
};
