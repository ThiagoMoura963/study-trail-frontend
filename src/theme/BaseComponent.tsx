import React from "react";
import styled from "styled-components"
import { StyleSheet } from "@src/theme/StyleSheet";
import { parseStyleSheet } from "@displaykit/responsive_styles";

interface StyledBaseComponentProps {
  styleSheet: StyleSheet;
}

const StyledBaseComponent = styled.div<StyledBaseComponentProps>`
  display: flex;
  flex-direction: column;
  flex-direction: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)};
`;

export const BaseComponent = (props: any) => {
  return (
    <StyledBaseComponent  {...props} />
  )
}

BaseComponent.defaultProps = {
  styleSheet: {}
}
