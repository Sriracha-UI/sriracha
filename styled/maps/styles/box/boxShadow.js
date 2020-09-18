import styledMap from "styled-map";

export default styledMap`
  shade: ${({ theme }) => theme.shadows[5]};
  sink: ${({ theme }) => theme.shadows[5]};
  default: none;
`;
