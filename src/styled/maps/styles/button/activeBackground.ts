import styledMap from "styled-map";

export default styledMap`
  red: ${({ theme }) => theme.colors.red9};
  orange: ${({ theme }) => theme.colors.orange9};
  deepOrange: ${({ theme }) => theme.colors.deepOrange9};
  amber: ${({ theme }) => theme.colors.amber9};
  yellow: ${({ theme }) => theme.colors.yellow9};
  brown: ${({ theme }) => theme.colors.brown9};
  lime: ${({ theme }) => theme.colors.lime9};
  lightGreen: ${({ theme }) => theme.colors.lightGreen9};
  green: ${({ theme }) => theme.colors.green9};
  teal: ${({ theme }) => theme.colors.teal9};
  cyan: ${({ theme }) => theme.colors.cyan9};
  lightBlue: ${({ theme }) => theme.colors.lightBlue9};
  blue: ${({ theme }) => theme.colors.blue9};
  indigo: ${({ theme }) => theme.colors.indigo9};
  deepPurple: ${({ theme }) => theme.colors.deepPurple9};
  purple: ${({ theme }) => theme.colors.purple9};
  pink: ${({ theme }) => theme.colors.pink9};
  invert: ${({ theme }) => theme.colors.gray3};
  default: ${({ theme }) => theme.colors.gray9};
`;
