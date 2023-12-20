import "@mantine/core/styles.css";
import "./globals.css";
import { Hind_Siliguri } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { theme } from "@/theme";
import "animate.css";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

const hindi_siliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={hindi_siliguri.className}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
