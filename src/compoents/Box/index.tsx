import React from "react";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseComponent } from "@src/theme/BaseComponent";

interface BoxProps {
  styleSheet?: StyleSheet;
  children?: React.ReactNode,
  tag?: 'div' | 'section' | 'main' | 'ul' | 'article' | string;
}

export default function Box({ 
  children, 
  tag,
  styleSheet,
  ...props
}: BoxProps) {
  const Tag = tag || 'div';

  return (
    <BaseComponent
      as={Tag}
      styleSheet={styleSheet}
      {...props}
    >
      {children}
    </BaseComponent>
  )
}
