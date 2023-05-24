import "../../styles/globals.css";
import MainNavigation from "./MainNavigation";
import roboto from "../../constants/localFonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      {/* (font-sans) is tath font that we added in tailwind */}
      <body className={`${roboto.variable} font-sans`}>
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
