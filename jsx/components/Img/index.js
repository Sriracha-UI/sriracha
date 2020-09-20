import React from "react";
import styled from "styled-components";
import Box from "../../../styled/components/Box";

export default function Img({ src, alt, ...rest }) {
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
