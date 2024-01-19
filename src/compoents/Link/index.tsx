import React from "react";
import NextLink from "next/link";
import Text from "@src/compoents/Text"
import { ThemeTypographyVariants } from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useTheme } from "@src/theme/ThemeProvider";

interface LinkProps {
  ref: any;
  children: React.ReactNode;
  href?: string;
  textVariant?: ThemeTypographyVariants;
  colorVariant?: 'primary' | 'accent' | 'neutral' | 'success' | 'warning' | 'error';
  colorVariantEnabled?: boolean;
  styleSheet?: StyleSheet;
}

const Link = React.forwardRef(({ 
  ref,
  href,
  children,
  styleSheet,
  textVariant,
  colorVariant,
  colorVariantEnabled, 
  ...props 
}: LinkProps) => {
  const theme = useTheme();
  const isExternalLink = href.startsWith('http');

  const setCurrentColor = {
    color: theme.colors[colorVariant].x500,
    transtion: '.2s all',
    hover: {
      color: theme.colors[colorVariant].x400
    },
    focus: {
      color: theme.colors[colorVariant].x600,
    }
  }

  const linkProps = {
    ref,
    href,
    styleSheet: {
      textDecoration: 'none',
      ...colorVariantEnabled && {
        color: setCurrentColor.color,
      },
      ...styleSheet,
      hover: {
        ...styleSheet?.hover,
        ...colorVariantEnabled && {
          color: setCurrentColor.hover.color,
        },
      },
      focus: {
        ...styleSheet?.focus,
        ...colorVariantEnabled && {
          color: setCurrentColor.focus.color,
        },
      },

    },
    children,
    ...props,
  }

  if(isExternalLink) return <Text {...{
    tag: 'a',
    target: '_blank',
    ...linkProps,
  }}/>

  return (
    <NextLink href={href} passHref>
      <Text tag="span" {...linkProps} />
    </NextLink>
  )
});

export default Link;

Link.defaultProps = {
  colorVariant: 'primary',
  colorVariantEnabled: true,
}
