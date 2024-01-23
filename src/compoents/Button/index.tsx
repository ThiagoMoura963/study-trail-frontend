import React from "react";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useTheme } from "@src/theme/ThemeProvider";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { ColorVariant, Variant, colorVariantButton } from "./buttonColorVariant";
import { ButtonSize, buttonSize } from "./buttonSize";

interface ButtonProps extends ButtonBaseProps {
  variant?: Variant;
  size?: ButtonSize;
  fullWidth?: boolean;
  styleSheet?: StyleSheet;
  children: React.ReactNode;
  colorVariant?: ColorVariant;
}

export default function Button({ 
  size,
  variant,
  children,
  fullWidth,
  styleSheet,
  colorVariant,
  ...props
}: ButtonProps) {
  const theme = useTheme();
  return (
    <ButtonBase
    styleSheet={{
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-start',
      ...(fullWidth && {
        alignSelf: 'initial',
      }),
      ...buttonSize[size],
      ...colorVariantButton(theme, colorVariant, variant),
      ...styleSheet
    }}
      {...props}
    >
      {children}
    </ButtonBase>
  )
}

Button.Base = ButtonBase;

Button.defaultProps = {
  size: 'md',
  variant: 'contained',
  fullWidth: false,
  colorVariant: 'primary',
}

