import styled from "styled-components";
import {
  sizeBase,
  styleBase,
  shapeBase,
  fontBase,
  flexRowBase,
  toolTipBase,
} from "../base";

const Tooltip = styled.div`
  ${flexRowBase}
  ${sizeBase}
  ${styleBase}
  ${shapeBase}
  ${fontBase} 
  ${toolTipBase}
`;

export default Tooltip;
