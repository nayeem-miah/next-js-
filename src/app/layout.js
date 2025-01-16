import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "next hero",
    template: "%s | next hero"
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <Navbar/> 
        <div className="min-h-screen px-2 py-2">{children}</div>
       <div>
       {/* footer */}
       <Footer/>
       </div>
      </body>
    </html>
  );
}
