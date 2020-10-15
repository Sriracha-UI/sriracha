import styledMap from "styled-map";

const justifyCenter: (props: any) => string = styledMap`
  jce: flex-end;
  jcs: flex-start;
  jcb: space-between;
  jca: space-around;
  jcv: space-evenly;
  default: center;
`;

export default justifyCenter;
