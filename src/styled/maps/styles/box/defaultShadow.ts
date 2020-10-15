import styledMap from "styled-map";

export default styledMap`
  shade: ${({ theme }) => `0 0.3rem 1rem ${theme.colors.gray7}`};
  backlight: ${({ theme }) => `0 0.3rem 1rem ${theme.colors.gray0}`};
  default: none;
`;
