import { Roboto } from "next/font/google";
import "./globals.css";

const slack = Roboto({
  weight: '100',
  subsets: ['latin'],
})

export const metadata = {
  title: "Sanjay Sugumar",
  description: "Jchips the dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={slack.className}>{children}</body>

    </html>
  );
}
