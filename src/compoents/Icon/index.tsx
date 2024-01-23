import * as iconSet from "@fortawesome/free-solid-svg-icons";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseComponent } from "@src/theme/BaseComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconSizes = {
  xs: '12px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '36px',
} as const;

interface IconProps {
  styleSheet?: StyleSheet;
  name: string;
  size?: keyof typeof iconSizes;
  icon?: keyof typeof iconSet; 
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Icon({
  size,
  name,
  icon,
  styleSheet,
  ...props
}: IconProps) {

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
      {...props}
    >
        <FontAwesomeIcon 
           icon={iconSet[`fa${capitalize(name)}`]}
        />
    </BaseComponent>
  )
}

Icon.defaultProps = {
  size: 'md',
  colorVariant: 'primary',
}
