import styledMap from "styled-map";

export default styledMap`
  yellow: ${({ theme }) => theme.colors.gray0};
  invert: ${({ theme }) => theme.colors.gray0};
  default: ${({ theme }) => theme.colors.gray8};
`;
