import styledMap from "styled-map";

export default styledMap`
  yellow: ${({ theme }) => theme.gray0};
  invert: ${({ theme }) => theme.gray0};
  default: ${({ theme }) => theme.gray8};
`;
