import styledMap from "styled-map";

export default styledMap`
  red: ${({ theme }) => theme.colors.red6};
  orange: ${({ theme }) => theme.colors.orange6};
  deepOrange: ${({ theme }) => theme.colors.deepOrange6};
  brown: ${({ theme }) => theme.colors.brown6};
  amber: ${({ theme }) => theme.colors.amber6};
  yellow: ${({ theme }) => theme.colors.yellow6};
  lime: ${({ theme }) => theme.colors.lime6};
  lightGreen: ${({ theme }) => theme.colors.lightGreen6};
  green: ${({ theme }) => theme.colors.green6};
  teal: ${({ theme }) => theme.colors.teal6};
  cyan: ${({ theme }) => theme.colors.cyan6};
  lightBlue: ${({ theme }) => theme.colors.lightBlue6};
  blue: ${({ theme }) => theme.colors.blue6};
  indigo: ${({ theme }) => theme.colors.indigo6};
  deepPurple: ${({ theme }) => theme.colors.deepPurple6};
  purple: ${({ theme }) => theme.colors.purple6};
  pink: ${({ theme }) => theme.colors.pink6};
  invert: ${({ theme }) => theme.colors.gray5};
  default: ${({ theme }) => theme.colors.gray6};
`;
