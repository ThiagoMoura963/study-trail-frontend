import { AppProps } from "next/app";
import GlobalStyle from "@src/theme/GlobalStyle";
import ThemeProvider from "@src/theme/ThemeProvider";
import SideBar from "@src/compoents/SideBar/SideBar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <SideBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
