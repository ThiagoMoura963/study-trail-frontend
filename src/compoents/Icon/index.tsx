import * as icons from "./svgs/_index";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseComponent } from "@src/theme/BaseComponent";

const iconSizes = {
  xs: '12px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '36px',
} as const;

interface IconProps {
  styleSheet?: StyleSheet;
  name: keyof typeof icons;
  size?: keyof typeof iconSizes;
}

export default function Icon({
  size,
  name,
  styleSheet,
  ...props
}: IconProps) {
  const CurrentIcon = icons[name] || icons['default_icon'];

  return (
    <BaseComponent 
      as="svg"
      styleSheet={{
        width: iconSizes[size],
        height: iconSizes[size],
        ...styleSheet,
      }}
      color="inherit"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <CurrentIcon />
    </BaseComponent>
  )
}

Icon.defaultProps = {
  size: 'md',
  name: 'default_icons',
}
