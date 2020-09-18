import styledMap from "styled-map";

export default styledMap`
  invert: ${({ theme }) => theme.colors.gray9};
  mid: ${({ theme }) => theme.colors.blackAlpha6};
  default: ${({ theme }) => theme.colors.gray0};
`;
