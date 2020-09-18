import styledMap from "styled-map";

export default styledMap`
  red: ${({ theme }) => theme.colors.red8};
  orange: ${({ theme }) => theme.colors.orange8};
  deepOrange: ${({ theme }) => theme.colors.deepOrange8};
  brown: ${({ theme }) => theme.colors.brown8};
  amber: ${({ theme }) => theme.colors.amber8};
  yellow: ${({ theme }) => theme.colors.yellow8};
  lime: ${({ theme }) => theme.colors.lime8};
  lightGreen: ${({ theme }) => theme.colors.lightGreen8};
  green: ${({ theme }) => theme.colors.green8};
  teal: ${({ theme }) => theme.colors.teal8};
  cyan: ${({ theme }) => theme.colors.cyan8};
  lightBlue: ${({ theme }) => theme.colors.lightBlue8};
  blue: ${({ theme }) => theme.colors.blue8};
  indigo: ${({ theme }) => theme.colors.indigo8};
  deepPurple: ${({ theme }) => theme.colors.deepPurple8};
  purple: ${({ theme }) => theme.colors.purple8};
  pink: ${({ theme }) => theme.colors.pink8};
  invert: ${({ theme }) => theme.colors.gray4};
  default: ${({ theme }) => theme.colors.gray8};
`;
