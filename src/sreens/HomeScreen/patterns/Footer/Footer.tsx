import Box from "@src/compoents/Box";
import Text from "@src/compoents/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      tag="footer"
      styleSheet={{
        width: '100%',
        justifyContent: 'center',
        height: '7.5rem',
        paddingHorizontal: '24px',
        paddingVertical: '24px',
        textAlign: 'center',
        color: theme.colors.neutral.x000,
        backgroundColor: theme.colors.neutral.x900,
      }}
    >
      <Text variant="body1">
        &copy; {new Date().getFullYear()} Thiago Moura. Todos os direitos reservados.
      </Text>

    </Box>
  )
}
