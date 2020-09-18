import styledMap from "styled-map";

export default styledMap`
  yellow: ${({ theme }) => theme.colors.deepOrange8};
  default: ${({ theme }) => theme.colors.gray0};
`;
