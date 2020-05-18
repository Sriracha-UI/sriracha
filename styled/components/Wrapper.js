import styled from "styled-components";
import { flexColumnBase, wrapperSizeBase } from "../base";

const Wrapper = styled.div`
  ${flexColumnBase}
  ${wrapperSizeBase}
  overflow: ${({ overflow }) => (overflow ? overflow : "hidden")}
`;

export default Wrapper;
