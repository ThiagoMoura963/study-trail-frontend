import React from "react";
import styled from "styled-components"
import { StyleSheet } from "@src/theme/StyleSheet";
import { parseStyleSheet } from "@displaykit/responsive_styles";

interface StyledBaseComponentProps {
  styleSheet: StyleSheet;
  ref: any
}

const StyledBaseComponent = styled.div<StyledBaseComponentProps>`
  display: flex;
  flex-direction: column;
  flex-direction: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)};
`;

interface BaseComponentProps {
  styleSheet: StyleSheet;
  [key: string]: any;
}

export const BaseComponent = React.forwardRef<unknown, BaseComponentProps>((props: any, ref) => {
  return (
    <StyledBaseComponent ref={ref} {...props} />
  )
})

BaseComponent.defaultProps = {
  styleSheet: {}
}
