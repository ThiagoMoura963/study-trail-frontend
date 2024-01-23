import Box from "@src/compoents/Box";
import Text from "@src/compoents/Text";
import Image from "@src/compoents/Image";
import { useTheme } from "@src/theme/ThemeProvider";

export default function MainSection() {
  const theme = useTheme();
  const IMAGE_URL = 'images/image_home.png';
  return (
    <Box tag="section" styleSheet={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <Box>
        <Text tag="h2" variant="heading3" styleSheet={{ marginBottom: '1rem', color: theme.colors.neutral.x700 }}>Página Inicial</Text>
        <Text variant="body1" styleSheet={{ width: '600px', textAlign: 'justify' }}>
          Você está prestes a embarcar em uma jornada
          educacional transformadora, onde o conhecimento é a
          chave para abrir portas para um futuro brilhante.
          O Study Trail é mais do que um site;
          é um guia personalizado para estudantes que buscam dominar
          os desafios do vestibular e aprimorar suas habilidades
          acadêmicas.
        </Text>
      </Box>
      <Box>
        <Image
          src={IMAGE_URL}
          alt="Área de estudos"
          styleSheet={{
            alignSelf: 'center',
            width: '500px',
          }}
        />
      </Box>
    </Box>
  )
}
