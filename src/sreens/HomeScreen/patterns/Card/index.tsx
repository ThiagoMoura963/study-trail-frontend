import Box from "@src/compoents/Box";
import Button from "@src/compoents/Button";
import Image from "@src/compoents/Image";
import Text from "@src/compoents/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Card() {
  const theme = useTheme();
  const headerImageUrl = 'images/header_card.png';
  return (
    <Box
      styleSheet={{
        position: 'relative',
        width: '300px',
        backgroundColor: theme.colors.neutral.x800,
        color: theme.colors.neutral.x100,
        textAlign: 'justify',
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
        margin: '2rem 2rem',
        padding: '1rem',
        borderRadius: '5px',
        transition: '.2s all ease-in-out',
        hover: {
          transform: 'translate(0, -1rem)',
        },
      }}
    >
      <Box
        styleSheet={{
          height: '20px',
          width: '20px',
          borderRadius: '5px',
          border: '20px solid transparent',
          borderTop: `20px solid ${theme.colors.primary.x700}`,
          borderRight: `20px solid ${theme.colors.primary.x700}`,
          position: 'absolute',
          top: 0,
          right: 0,
        }}

      />
      <Box 
        styleSheet={{ 
          alignItems: 'center', 
          marginBottom: '2rem', 
          borderBottom: `1px solid ${theme.colors.neutral.x500}`,
          padding: '1rem 0'
        }}>
        <Image
          src={headerImageUrl}
          alt="Imagem do header do card"
          styleSheet={{
            width: '150px',
          }}
        />
      </Box>
      <Box>
        <Box 
          tag="h3"
          styleSheet={{

          }}
        >
          <Text styleSheet={{ marginBottom: '2rem' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquam reiciendis delectus officia quod facilis aliquid
            voluptatum aperiam in magnam rem. Labore, consequuntur
            earum. Repudiandae tempore vitae, quaerat ullam accusamus
            vero.
          </Text>
          <Button styleSheet={{ alignSelf: 'center' }}>
            {"acessar".toUpperCase()}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
