import {Roboto} from "next/font/google"
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";


const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
})


export const metadata = {
  title: "Expense Tracker",
  description: "Make and track your expenses easily",
  icons:{
    icon:"/images.png"
   
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={roboto.className} >
      <head>
       
      </head>
      <body
       
      >
         <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
