import Box from "@src/compoents/Box";
import Text from "@src/compoents/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Background() {
  const theme = useTheme
  const imageUrl = 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <Box
      styleSheet={{
        alignItems: 'flex-end',
        opacity: 0.8,
        justifyContent: 'center',
        width: '100%',
        height: '20rem',
        backgroundImage: `url("${imageUrl}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    
      }}
    >
      <Box styleSheet={{ marginRight: '3rem' }}>
        <Text variant="body1" styleSheet={{ fontWeight: 600 }}>Bem vindo à plataforma</Text>
        <Text variant="display1">STUDY TRAIL</Text>
      </Box>
    </Box>
  )
}
