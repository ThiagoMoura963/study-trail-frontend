import Card from "./patterns/Card";
import Box from "@src/compoents/Box";
import Footer from "./patterns/Footer/Footer";
import Background from "./patterns/Background";
import MainSection from "./patterns/MainSection";
import { useTheme } from "@src/theme/ThemeProvider";
import type { Option } from "@src/services/options/OptionService";

interface HomeScreenProps {
  options: Option[]
}

export default function HomeScreen(props: HomeScreenProps) {
  const theme = useTheme();
  return (
    <>
      <Box
        tag="main"
        styleSheet={{
          backgroundColor: theme.colors.neutral.x050,
          flex: 1,
          marginLeft: {
            xs: '80px',
            md: '240px',
          },
        }}
      >
        <Background />
        <MainSection />
        <Box
          styleSheet={{
            borderBottom: `1px solid ${theme.colors.neutral.x200}`,
            margin: '1rem 2rem'
          }}
        />
        <Card options={props.options} />
        <Footer />

      </Box>
    </>
  )
}
