import styled from "styled-components";
import { flexColumnBase, cardSizeBase, cardStyleBase } from "../base";

const Card = styled.div`
  ${flexColumnBase}
  ${cardSizeBase}
  ${cardStyleBase}
  text-align: center;
`;

export default Card;
