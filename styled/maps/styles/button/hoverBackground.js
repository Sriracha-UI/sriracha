import styledMap from `styled-map`;

export default styledMap`
  red: ${({ theme }) => `rgba(${theme.colors.red6}, 1.5)`};
  orange: ${({ theme }) => `rgba(${theme.colors.orange6}, 1.5)`};
  deepOrange: ${({ theme }) => `rgba(${theme.colors.deepOrange6}, 1.5)`};
  brown: ${({ theme }) => `rgba(${theme.colors.brown6}, 1.5)`};
  amber: ${({ theme }) => `rgba(${theme.colors.amber6}, 1.5)`};
  yellow: ${({ theme }) => `rgba(${theme.colors.yellow6}, 1.5)`};
  lime: ${({ theme }) => `rgba(${theme.colors.lime6}, 1.5)`};
  lightGreen: ${({ theme }) => `rgba(${theme.colors.lightGreen6}, 1.5)`};
  green: ${({ theme }) => `rgba(${theme.colors.green6}, 1.5)`};
  teal: ${({ theme }) => `rgba(${theme.colors.teal6}, 1.5)`};
  cyan: ${({ theme }) => `rgba(${theme.colors.cyan6}, 1.5)`};
  lightBlue: ${({ theme }) => `rgba(${theme.colors.lightBlue6}, 1.5)`};
  blue: ${({ theme }) => `rgba(${theme.colors.blue6}, 1.5)`};
  indigo: ${({ theme }) => `rgba(${theme.colors.indigo6}, 1.5)`};
  deepPurple: ${({ theme }) => `rgba(${theme.colors.deepPurple6}, 1.5)`};
  purple: ${({ theme }) => `rgba(${theme.colors.purple6}, 1.5)`};
  pink: ${({ theme }) => `rgba(${theme.colors.pink6}, 1.5)`};
  invert: ${({ theme }) => `rgba(${theme.colors.gray5}, 1.5)`};
  default: ${({ theme }) => `rgba(${theme.colors.gray6}, 1.5)`};
`;
