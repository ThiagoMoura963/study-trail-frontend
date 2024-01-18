import { Breakpoints } from "@displaykit/responsive_styles";

type ResponsiveProperty<T> =  Partial<Record<Breakpoints, T>>;

export interface StyleSheet {
  fontFamily?: ResponsiveProperty<string>;
  backgroundColor?: ResponsiveProperty<string>;
  [key: string]: any;  
}
