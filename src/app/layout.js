import Link from "next/link";
import "./globals.css";
import Profile from "./profile/page";
import Nav from "./nav";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
