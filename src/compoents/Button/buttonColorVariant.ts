import { Theme } from "@src/theme/theme";

export type ColorVariant = 'primary' | 'accent' | 'neutral' | 'success' | 'warning' | 'error';
export type Variant = 'contained' | 'outlined' | 'ghost';

function createVariant(theme: Theme, colorVariant: string) {
  return {
    contained: {
      backgroundColor: theme.colors[colorVariant].x800,
      color: theme.colors.neutral.x000,
      transition: '.2s all',
      hover: {
        backgroundColor: theme.colors[colorVariant].x600,
      },
      focus: {
        backgroundColor: theme.colors[colorVariant].x700,
      },
    },
    outlined: {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.colors[colorVariant].x500}`,
      color: theme.colors[colorVariant].x500,
      transition: '.2s all',
      hover: {
        backgroundColor: theme.colors[colorVariant].x100,
      },
      focus: {
        backgroundColor: theme.colors[colorVariant].x100,
      }
    },
    ghost: {
      backgroundColor: 'transparent',
      color: theme.colors[colorVariant].x800,
      transition: '.2s all',
      hover: {
        backgroundColor: theme.colors[colorVariant].x050,
      },
      focus: {
        backgroundColor: theme.colors[colorVariant].x100,
      }
    },
  }
};

export function colorVariantButton(theme: Theme, colorVariant: string, variant: string) {
  const styles = {
    primary: createVariant(theme, 'primary'),
    accent: createVariant(theme, 'accent'),
    neutral: createVariant(theme, 'neutral'),
    success: createVariant(theme, 'success'),
    warning: createVariant(theme, 'warning'),
    error: createVariant(theme, 'error'),
  }

  return styles[colorVariant][variant];
}
