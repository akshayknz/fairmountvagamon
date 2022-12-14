import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, DefaultMantineColor, Global, MantineProvider } from "@mantine/core";
import HeaderComponent from "../components/header";
import { Noto_Sans } from "@next/font/google";
import { Mrs_Saint_Delafield } from "@next/font/google";
import googleFontTheme from "../styles/themes/";
import FooterLinks from "../components/footer";
import { auth } from "../components/data/firebaseConfig";
import { useRouter } from "next/router";
import { AuthProvider } from "../components/data/AuthProvider";
import { useContext } from "react";
import { AuthContext } from "../components/data/AuthContext";
import { NotificationsProvider } from "@mantine/notifications";
import { Provider } from "react-redux";
import configureStore from "../components/data/configureStore";

const natoSans = Noto_Sans({
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const mrsSaintDelafield = Mrs_Saint_Delafield({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  const { asPath, pathname } = useRouter();
  
  return (
    <Provider store={configureStore}>
    <AuthProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={googleFontTheme}>
        <NotificationsProvider>
          {pathname?.match("admin")?.length || 0 > 0 ? null : <HeaderComponent />}
          <Component {...pageProps} />
          {pathname?.match("admin")?.length || 0 > 0 ? null : (
            <FooterLinks
              data={[
                {
                  title: "About",
                  links: [
                    {
                      label: "Features",
                      link: "#",
                    },
                    {
                      label: "Pricing",
                      link: "#",
                    },
                    {
                      label: "Check Availability",
                      link: "#",
                    },
                  ],
                },
                {
                  title: "Community",
                  links: [
                    {
                      label: "Follow us on Instagram",
                      link: "#",
                    },
                    {
                      label: "Follow us on Facebook",
                      link: "#",
                    },
                    {
                      label: "Email us",
                      link: "#",
                    },
                  ],
                },
              ]}
            />
          )}
          </NotificationsProvider>
        </MantineProvider>
    </AuthProvider>
    </Provider>
  );
}
