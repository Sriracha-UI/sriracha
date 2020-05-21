import styledMap from "styled-map";
import { theme } from "../../../theme";

export default styledMap`
  shade: ${theme.shadows[5]};
  sink: ${theme.shadows[5]};
  backlight: ${theme.glows[5]};
  default: none;
`;
