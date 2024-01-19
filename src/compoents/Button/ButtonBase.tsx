import Text from "../Text"
import React, { useRef } from "react";
import styled from "styled-components"
import { useRouter } from "next/router";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useTheme } from "@src/theme/ThemeProvider";
import { useRipple } from '@songmg/react-use-ripple';
import { ThemeTypographyVariants } from "@src/theme/theme";

const StyleButton = styled(Text)<any>``;

export interface ButtonBaseProps {
  href?: string;
  styleSheet?: StyleSheet;
  children: React.ReactNode;
  textVariant?: ThemeTypographyVariants;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBase({
  children,
  textVariant,
  styleSheet,
  href,
  ...props
}: ButtonBaseProps) {
  const theme = useTheme();
  const isLink = Boolean(href);
  const Tag = isLink ? 'a' : 'button';
  const ref = useRef();
  const router = useRouter();

  useRipple(ref, {
    rippleColor: 'rgba(255, 255, 255, 0.7)',
    animationLength: 600,
  })

  const variant = theme.typography.variants[textVariant];

  return (
    <StyleButton
      tag={Tag}
      href={href}
      ref={ref}
      styleSheet={{
        border: '0',
        outline: '0',
        color: 'inherit',
        cursor: 'pointer',
        textDecoration: 'none',
        backgroundColor: 'transparent',
        ...variant,
        ...styleSheet,
      }}
      onClick={(event: any) => {
        isLink && event.preventDefault();
        isLink && router.push(href);
        !isLink && props.onClick && props.onClick(event);
      }}
      {...props}
    >
      {children}
    </StyleButton>
  )
}
