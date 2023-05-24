// use font with googleFont
// import { Abel } from "next/font/google";
// const abel = Abel({
//   subsets: ["latin"],
//   weight: ["400"],
// });

//use font with localFont
import localFont from "next/font/local";

const roboto = localFont({
    src: [
        {
            path: "../public/fonts/roboto/Roboto-Light.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../public/fonts/roboto/Roboto-Regular.ttf",
            weight: "300",
            style: "normal",
        },
    ],
    //this variable used in tailwind
    variable: "--font-roboto",
    style: "normal",
    display: "block",
});

export default roboto