import { Breakpoints } from "@displaykit/responsive_styles";

type ResponsiveProperty<T> =  Partial<Record<Breakpoints, T>>;

export interface StyleSheet {
  fontFamily?: ResponsiveProperty<string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;
  [key: string]: any;  
}
