import "./globals.css";
import { Inter, Oswald } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { FitlogProvider } from "./context/FitlogContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "FitLog",
  description: "Workout Library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable}`}
      >
        <FitlogProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#15181d",
                color: "#ffffff",
                border: "1px solid #242830",
              },
            }}
          />
        </FitlogProvider>
      </body>
    </html>
  );
}