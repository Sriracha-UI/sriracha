import styledMap from "styled-map";

export default styledMap`
  red: ${({ theme }) => theme.red8};
  orange: ${({ theme }) => theme.orange8};
  deepOrange: ${({ theme }) => theme.deepOrange8};
  brown: ${({ theme }) => theme.brown8};
  amber: ${({ theme }) => theme.amber8};
  yellow: ${({ theme }) => theme.yellow8};
  lime: ${({ theme }) => theme.lime8};
  lightGreen: ${({ theme }) => theme.lightGreen8};
  green: ${({ theme }) => theme.green8};
  teal: ${({ theme }) => theme.teal8};
  cyan: ${({ theme }) => theme.cyan8};
  lightBlue: ${({ theme }) => theme.lightBlue8};
  blue: ${({ theme }) => theme.blue8};
  indigo: ${({ theme }) => theme.indigo8};
  deepPurple: ${({ theme }) => theme.deepPurple8};
  purple: ${({ theme }) => theme.purple8};
  pink: ${({ theme }) => theme.pink8};
  invert: ${({ theme }) => theme.gray4};
  default: ${({ theme }) => theme.gray8};
`;
