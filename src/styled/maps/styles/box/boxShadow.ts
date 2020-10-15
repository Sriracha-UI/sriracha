import styledMap from "styled-map";

export default styledMap`
  shade: ${({ theme }) => theme.shadows[3]};
  sink: ${({ theme }) => theme.shadows[3]};
  default: none;
`;
