import "@/app/_styles/globals.css";
import { Inter, Poppins } from "next/font/google";
import Navigation from "@/app/_components/Navigation";
import Footer from "@/app/_components/Footer";
import { Toaster } from "react-hot-toast";
import { getCurrentUser } from "@/app/_lib/auth";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "SKY | RESERVE",
  description: "Find and book flights with ease.",
};

export default async function RootLayout({ children }) {
  const user = await getCurrentUser();

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Navigation user={user} />
        {children}
        <Footer />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              marginTop: "50px",
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-bg)",
              color: "var(--color-brand-dark)",
            },
          }}
        />
      </body>
    </html>
  );
}
