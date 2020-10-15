import styledMap from "styled-map";

export default styledMap`
  red: ${({ theme }) => theme.colors.red4};
  orange: ${({ theme }) => theme.colors.orange4};
  amber: ${({ theme }) => theme.colors.amber4};
  yellow: ${({ theme }) => theme.colors.yellow4};
  brown: ${({ theme }) => theme.colors.brown4};
  lightGreen: ${({ theme }) => theme.colors.lightGreen4};
  green: ${({ theme }) => theme.colors.green4};
  teal: ${({ theme }) => theme.colors.teal4};
  cyan: ${({ theme }) => theme.colors.cyan4};
  lightBlue: ${({ theme }) => theme.colors.lightBlue4};
  blue: ${({ theme }) => theme.colors.blue4};
  indigo: ${({ theme }) => theme.colors.indigo4};
  deepPurple: ${({ theme }) => theme.colors.deepPurple4};
  purple: ${({ theme }) => theme.colors.purple4};
  pink: ${({ theme }) => theme.colors.pink4};
  invert: ${({ theme }) => theme.colors.gray6};
  default: ${({ theme }) => theme.colors.gray4};
`;
