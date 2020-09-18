import styledMap from "styled-map";

export default styledMap`
  invert: ${({ theme }) => theme.colors.gray8};
  default: ${({ theme }) => theme.colors.gray1};
`;
