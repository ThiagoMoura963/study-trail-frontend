import Box from "@src/compoents/Box";
import Text from "@src/compoents/Text";
import Image from "@src/compoents/Image";
import Button from "@src/compoents/Button";

export default function HomeScreen() {
  return (
    <Box>
      <Text variant="heading1" tag="h1">
        Testando
      </Text>
      <Button.Base>
        <Image 
          styleSheet={{
            borderRadius: '50%',
            width: '150px',
          }}
          src="https://github.com/ThiagoMoura963.png"
          alt="Minha foto de perfil"
        />
      </Button.Base>
      
      <Box styleSheet={{ margin: '16px 160px' }}>
        <Button 
          variant="contained" 
          colorVariant="primary" 
          size="xl"
        >
          Clique aqui
        </Button>
      </Box>
    </Box>
  )
}
