'use client'
import * as Styled from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  as: 'h1' | 'h2' | 'h3' | 'h4' |'h5' | 'h6';
  uppercase?: boolean;
}

export const Heading = ({
  children,
  as = 'h1',
  uppercase = false,
}: HeadingProps) => {
  return (
    <Styled.Title
      as={as}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
};
