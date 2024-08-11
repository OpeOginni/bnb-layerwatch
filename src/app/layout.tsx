import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "@/providers/ReactQueryProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Layer Watch",
  description:
    "Get more data and information about the BSC Network Layer2 Chains",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryClientProvider>
          {" "}
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-grow pb-6">{children}</main>
            <Footer />
          </div>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
