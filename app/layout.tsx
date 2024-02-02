import { CountDownComponent } from "./countDownComponent";
import "./globals.css";
import { OurMoments } from "./ourMoments";
import { PicturesWedding } from "./picturesWedding";
import { TogetherComponent } from "./togetherComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <>
      <body >{children}</body>
      <TogetherComponent/>
      <CountDownComponent/>
      <OurMoments/>
      <PicturesWedding />
    </>
    </html>
  );
}
