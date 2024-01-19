import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";

interface Inputprops {
  name: string;
  placeholder?: string;
  styleSheet?: StyleSheet;
}

export default function Input({
  name,
  styleSheet,
  placeholder,
  ...props
}: Inputprops) {
  return (
    <BaseComponent 
      as="input"
      styleSheet={{
        border: '1px solid rgb(195, 195, 195)',
        borderRadius: '10px',
        padding: '.75rem',
        width: '100%',
        ...styleSheet,
      }}
      {...props}
    />
  )
}

