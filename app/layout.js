import { Cormorant_Garamond, Inter, Allura, Playfair_Display } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"]
});


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300","200","400","500","600"]
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400","500","600"],
});

export const metadata = {
  title: "Diwali Hampers - Patisserie'22",
  description: "Make diwali sweeter with our handcrafted hampers.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${playfair.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        {children}
      </body>

    </html>
  );
}