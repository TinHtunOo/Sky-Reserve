import "@/app/_styles/globals.css";

export const metadata = {
  title: "Admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-screen h-screen bg-surface flex justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
