import Box from "@src/compoents/Box";
import Text from "@src/compoents/Text";
import Image from "@src/compoents/Image";
import Button from "@src/compoents/Button";
import SideBar from "../../compoents/SideBar/SideBar";
import { useTheme } from "@src/theme/ThemeProvider";
import Icon from "@src/compoents/Icon";
import Footer from "./patterns/Footer/Footer";
import Background from "./patterns/Background";
import MainSection from "./patterns/MainSection";
import Card from "./patterns/Card";

export default function HomeScreen() {
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
        <Card />
        <Footer />

      </Box>
    </>
  )
}
