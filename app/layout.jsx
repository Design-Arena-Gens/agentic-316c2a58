import "./globals.css";

export const metadata = {
  title: "Hola",
  description: "Una experiencia interactiva para decir Hola"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
