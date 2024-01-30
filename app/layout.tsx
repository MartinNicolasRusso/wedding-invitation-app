import "./globals.css";
import { TogetherComponent } from "./togetherComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
      <TogetherComponent/>
    </html>
  );
}
