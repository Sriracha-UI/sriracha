import React from "react";
import styled from "styled-components";
import Box from "../../../styled/components/Box";

interface ImgProps {
  src: string;
  alt: string;
}

export default function Img({ src, alt, ...rest }: ImgProps) {
  return (
    <ImgWrapper {...rest}>
      <img src={src} alt={alt} />
    </ImgWrapper>
  );
}

const ImgWrapper = styled(Box)`
  img {
    width: 100%;
    height: auto;
  }
`;
