import { CountDownComponent } from "./countDownComponent";
import "./globals.css";
import { OurMoments } from "./ourMoments";
import { InstagramFilter } from "./instagramFilter";
import { TogetherComponent } from "./togetherComponent";
import { SloganPhrase } from "./sloganPhrase";
import { ConfirmDate } from "./confirmDate";
import { Schedule } from "./schedule";
import { Location } from "./location";
import { LodgingRecommendation } from "./lodgingRecommendation";
import { DressingCode } from "./dressingCode";

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
      <InstagramFilter />
      <SloganPhrase/>
      <ConfirmDate/>
      <Schedule/>
      <Location/>
      <LodgingRecommendation/>
      <DressingCode/>
    </>
    </html>
  );
}
