import styledMap from "styled-map";

export default styledMap`
  red: ${({ theme }) => theme.red6};
  orange: ${({ theme }) => theme.orange6};
  deepOrange: ${({ theme }) => theme.deepOrange6};
  brown: ${({ theme }) => theme.brown6};
  amber: ${({ theme }) => theme.amber6};
  yellow: ${({ theme }) => theme.yellow6};
  lime: ${({ theme }) => theme.lime6};
  lightGreen: ${({ theme }) => theme.lightGreen6};
  green: ${({ theme }) => theme.green6};
  teal: ${({ theme }) => theme.teal6};
  cyan: ${({ theme }) => theme.cyan6};
  lightBlue: ${({ theme }) => theme.lightBlue6};
  blue: ${({ theme }) => theme.blue6};
  indigo: ${({ theme }) => theme.indigo6};
  deepPurple: ${({ theme }) => theme.deepPurple6};
  purple: ${({ theme }) => theme.purple6};
  pink: ${({ theme }) => theme.pink6};
  invert: ${({ theme }) => theme.gray5};
  default: ${({ theme }) => theme.gray6};
`;
