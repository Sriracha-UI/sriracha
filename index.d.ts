// declare module "styled-map";
import "styled-components";
import { theme } from "./src/styled/theme";

declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {
    pr: any;
  }
  export interface ThemeProps<T> {
    theme: T;
    p?: string | number;
    pt?: string | number;
    pr?: string | number;
    pb?: string | number;
    pl?: string | number;
    m?: string | number;
    mt?: string | number;
    mr?: string | number;
    mb?: string | number;
    ml?: string | number;
    w?: string | number;
    h?: string | number;
    minW?: string | number;
    maxW?: string | number;
    minH?: string | number;
    maxH?: string | number;
    sqr?: string | number;
  }
}
