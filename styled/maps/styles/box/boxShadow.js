import styledMap from "styled-map";
import { theme } from "../../../theme";

export default styledMap`
  shade: ${theme.shadows[3]};
  backlight: ${theme.glows[3]};
  default: none;
`;
