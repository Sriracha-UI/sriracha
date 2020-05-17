import { theme } from "../../theme/index";
import { marg, pad } from "../../maps/index";

export default `
  background: ${(props: { bg: string }) =>
    props.bg ? props.bg : theme.colors.gray2};
  font-family: ${(props: any) =>
    props.font ? props.font : '"Open Sans", sans-serif'};
  min-height: ${(props: { minH: string }) =>
    props.minH ? props.minH : "none"};
  max-width: ${(props: { maxW: string }) => (props.maxW ? props.maxW : "none")};
  min-width: ${(props: { minW: string }) => (props.minW ? props.minW : "none")};
  max-height: ${(props: { maxH: string }) =>
    props.maxH ? props.maxH : "none"};
  margin: ${(props: { m: string }) => (props.m ? props.m : marg)};
  padding: ${(props: { p: string }) => (props.p ? props.p : pad)};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props: { headFont: string }) =>
      props.headFont ? props.headFont : '"Bellota", cursive'};
    line-height: 1.2;
    margin: 1.6rem;
  }
`;
