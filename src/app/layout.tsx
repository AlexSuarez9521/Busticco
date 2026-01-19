import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BUSTICCO | Desarrollo de Software & Servicios Audiovisuales",
  description: "Soluciones innovadoras de desarrollo de software y servicios audiovisuales. Creamos aplicaciones web, móviles, e-commerce, CRM y automatización con IA.",
  keywords: ["desarrollo web", "aplicaciones móviles", "software", "e-commerce", "CRM", "marketing digital", "audiovisual", "Colombia", "Neiva", "Bogotá"],
  authors: [{ name: "BUSTICCO" }],
  openGraph: {
    title: "BUSTICCO | Desarrollo de Software & Servicios Audiovisuales",
    description: "Soluciones innovadoras de desarrollo de software y servicios audiovisuales.",
    url: "https://www.busticco.com",
    siteName: "BUSTICCO",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BUSTICCO | Desarrollo de Software & Servicios Audiovisuales",
    description: "Soluciones innovadoras de desarrollo de software y servicios audiovisuales.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
