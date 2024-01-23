import Box from "@src/compoents/Box";
import Button from "@src/compoents/Button";
import Icon from "@src/compoents/Icon";
import Image from "@src/compoents/Image";
import Text from "@src/compoents/Text";
import { useTheme } from "@src/theme/ThemeProvider";


export default function SideBar() {
  const theme = useTheme();

  const options = [
    { icon: 'home', text: 'Página Inicial' },
    { icon: 'book', text: 'Matérias' },
    { icon: 'pencil', text: 'Simulados' },
    { icon: 'user', text: 'Perfil' }
  ];

  return (
    <Box
      tag="aside"
      styleSheet={{
        position: 'fixed',
        top: 0,
        width: {
          xs: '5rem',
          md: '15rem'
        },
        height: '100%',
        backgroundColor: theme.colors.neutral.x000,
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        padding: '2.5rem 0.625rem 1.875rem 0.625rem',
        transition: 'all .2s',
      }}
    >
      <Box
        tag="header"
        styleSheet={{
          width: '100%',
          color: theme.colors.primary.x800
        }}
      >
        <Text
          tag="h1"
          variant="heading3"
          styleSheet={{
            display: {
              xs: 'none',
              md: 'flex',
            },
            fontWeight: 800,
            textAlign: 'center',
          }}
        >

          STUDY TRAIL
          <Box styleSheet={{ border: '1px solid', width: '50%', margin: '0 auto' }}></Box>

        </Text>

        <Text
          tag="h1"
          variant="heading2"
          styleSheet={{
            fontWeight: 800,
            textAlign: 'center',
            display: {
              xs: 'flex',
              md: 'none'
            }
          }}
        >
          ST
        </Text>
      </Box>
      <Box
        tag="nav"
        styleSheet={{
          flex: '1 1 auto',
          width: '100%',
          marginTop: '5rem',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          {options.map((option, index) => {
            return (
              <Button
                key={index}
                fullWidth
                variant="ghost"
                size="xl"
                colorVariant="primary"
                styleSheet={{
                  alignItems: {
                    xs: 'center',
                    md: 'flex-start'
                  },
                  textAlign: 'left',
                  marginBottom: '1rem',
                }}
              >
                <Text
                  tag="span"
                  styleSheet={{
                    display: 'inline-flex',
                    flexItems: 'center',
                    flexDirection: 'row',
                    gap: '.75rem',
                    padding: {
                      xs: 0,
                      md: '0 1rem 0 .75rem'
                    },
                    lineHeight: 1,
                  }}>
                  <Icon styleSheet={{ alignSelf: { xs: 'center', md: 'initial' } }} name={option.icon} />
                  <Text styleSheet={{ display: { xs: 'none', md: 'flex' } }}>{option.text}</Text>
                </Text>
              </Button>
            )
          })}
        </Box>
        <Box>
          <Button 
            variant="ghost" 
            colorVariant="primary"
            styleSheet={{ 
              flexDirection: 'row', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '1rem',
              borderRadius: '50px',
            }}
          >
            <Image
              src="https://github.com/ThiagoMoura963.png"
              alt="Foto de perfil do usuário"
              styleSheet={{
                alignSelf: 'center',
                borderRadius: '50%',
                width: '60px'
              }}
            />
            <Text tag="span" styleSheet={{ fontWeight: 600, color: theme.colors.primary.x800 }}>Thiago Moura</Text>


          </Button>
        </Box>
      </Box>
    </Box>
  )
}
