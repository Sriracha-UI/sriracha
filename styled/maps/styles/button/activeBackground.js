import styledMap from "styled-map";

export default styledMap`
  red: ${({ theme }) => theme.red9};
  orange: ${({ theme }) => theme.orange9};
  deepOrange: ${({ theme }) => theme.deepOrange9};
  amber: ${({ theme }) => theme.amber9};
  yellow: ${({ theme }) => theme.yellow9};
  brown: ${({ theme }) => theme.brown9};
  lime: ${({ theme }) => theme.lime9};
  lightGreen: ${({ theme }) => theme.lightGreen9};
  green: ${({ theme }) => theme.green9};
  teal: ${({ theme }) => theme.teal9};
  cyan: ${({ theme }) => theme.cyan9};
  lightBlue: ${({ theme }) => theme.lightBlue9};
  blue: ${({ theme }) => theme.blue9};
  indigo: ${({ theme }) => theme.indigo9};
  deepPurple: ${({ theme }) => theme.deepPurple9};
  purple: ${({ theme }) => theme.purple9};
  pink: ${({ theme }) => theme.pink9};
  invert: ${({ theme }) => theme.gray3};
  default: ${({ theme }) => theme.gray9};
`;
