import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/component/common/NavBar";
import { dbConnect } from "@/service/mongo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stay Swift",
  description: "Stay Swift - Find your next stay",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
