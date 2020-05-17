import { sideways, boxSize, marg, pad } from "../../maps/index";

export default `
  height: ${(props: { h: string; sqr: string }) =>
    props.h ? props.h : props.sqr ? props.sqr : "auto"};
  width: ${(props: any) =>
    props.w ? props.w : props.sqr ? props.sqr : sideways};
  min-height: ${(props: { minH: string }) =>
    props.minH ? props.minH : "100vh"};
  max-width: ${(props: { maxW: string }) =>
    props.maxW ? props.maxW : "100vw"};
  min-width: ${(props: { minW: string }) => (props.minW ? props.minW : "none")};
  max-height: ${(props: { maxH: string }) =>
    props.maxH ? props.maxH : "none"};
  margin: ${(props: { m: string }) => (props.m ? props.m : marg)};
  padding: ${(props: { p: string }) => (props.p ? props.p : pad)};
  box-sizing: ${(props: { boxSize: string }) =>
    props.boxSize ? props.boxSize : boxSize};
`;
