import * as Styled from './styles';

type AboutImageProps = {
  srcImg: string;
  altText: string;
};

export const AboutImage = ({ srcImg, altText }: AboutImageProps) => {
  return (
    <Styled.Container>
      <Styled.StyledImage
        src={srcImg}
        alt={altText}
        width={180}
        height={180}
      ></Styled.StyledImage>
      <Styled.Spinner></Styled.Spinner>
    </Styled.Container>
  );
};
