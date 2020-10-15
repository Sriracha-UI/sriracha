// declare module "styled-map";
import "styled-components";
import { theme } from "./src/styled/theme";

declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {
    pr: string;
  }
}
