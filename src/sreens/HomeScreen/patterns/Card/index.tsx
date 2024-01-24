import Box from "@src/compoents/Box";
import Button from "@src/compoents/Button";
import Image from "@src/compoents/Image";
import Text from "@src/compoents/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import type { Option } from "@src/services/options/OptionService";

interface CardOptionsProps {
  options: Option[];
}

export default function Card({ options }: CardOptionsProps) {
  const theme = useTheme();
  const headerImageUrl = 'images/header_card.png';
  return (
    <Box styleSheet={{ flexDirection: 'row', justifyContent: 'center',                 flexWrap: 'wrap',
  }}>
      {
        options.map(({ slug, content, metadata }) => {
          const { title, url } = metadata;
          return (
            <Box
              key={slug}
              styleSheet={{
                position: 'relative',
                width: '300px',
                backgroundColor: theme.colors.neutral.x800,
                color: theme.colors.neutral.x100,
                textAlign: 'center',
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
                <Box>
                  <Text variant="heading3" styleSheet={{ textAlign: 'center', color: theme.colors.primary.x500 }}>{title}</Text>
                  <Text styleSheet={{ marginBottom: '2rem' }}>{content}</Text>
                  <Button size="lg" styleSheet={{ alignSelf: 'center', fontWeight: 600 }}>
                    {"acessar".toUpperCase()}
                  </Button>
                </Box>
              </Box>
            </Box>
          )
        })
      }
    </Box>
  )
}
