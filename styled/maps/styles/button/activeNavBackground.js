import styledMap from "styled-map";

export default styledMap`
  red: ${({ theme }) => theme.red4};
  orange: ${({ theme }) => theme.orange4};
  amber: ${({ theme }) => theme.amber4};
  yellow: ${({ theme }) => theme.yellow4};
  brown: ${({ theme }) => theme.brown4};
  lightGreen: ${({ theme }) => theme.lightGreen4};
  green: ${({ theme }) => theme.green4};
  teal: ${({ theme }) => theme.teal4};
  cyan: ${({ theme }) => theme.cyan4};
  lightBlue: ${({ theme }) => theme.lightBlue4};
  blue: ${({ theme }) => theme.blue4};
  indigo: ${({ theme }) => theme.indigo4};
  deepPurple: ${({ theme }) => theme.deepPurple4};
  purple: ${({ theme }) => theme.purple4};
  pink: ${({ theme }) => theme.pink4};
  invert: ${({ theme }) => theme.gray6};
  default: ${({ theme }) => theme.gray4};
`;
