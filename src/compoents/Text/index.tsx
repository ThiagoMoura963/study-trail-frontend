import React from "react";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useTheme } from "@src/theme/ThemeProvider";
import { BaseComponent } from "@src/theme/BaseComponent";
import { ThemeTypographyVariants } from "@src/theme/theme";

interface TextProps {
  ref: any;
  styleSheet?: StyleSheet;
  children: React.ReactNode;
  variant?: ThemeTypographyVariants;
  tag?: 'p' | 'li' | 'span' | 'h1' | 'h2' | 'a' | string;
}

const Text = React.forwardRef(({
  tag,
  variant,
  styleSheet,
  ...props
}: TextProps, ref) => {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];

  return (
    <BaseComponent
      as={tag}
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet
      }}
      ref={ref}
      {...props}
    />
  )
})

Text.defaultProps = {
  tag: 'p',
  variant: 'body2',
}

export default Text;
