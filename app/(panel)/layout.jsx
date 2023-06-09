import roboto from "../../constants/localFonts";
import "../../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${roboto.variable} font-sans bg-gray-200`}>
        {children}
      </body>
    </html>
  );
}
