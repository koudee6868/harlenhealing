// app/layout.tsx

import type { Metadata } from "next";
// 1. Import font "Kanit" từ Google Fonts
import { Kanit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CDock } from "@/components/custom/c-dock";
import { FooterCustom } from "@/components/custom/c-footer";

// 2. Cấu hình font Kanit làm font mặc định
const fontSans = Kanit({
  subsets: ["latin", "vietnamese"], // Thêm subset tiếng Việt
  weight: ['300', '400', '500', '700'], // Chọn các độ đậm bạn muốn sử dụng
  variable: "--font-sans", // Đặt tên biến CSS là --font-sans
});

export const metadata: Metadata = {
  title: "Healing With Harlen",
  description: "Bạn là ai trong vũ trụ này?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 3. Áp dụng biến font mới vào thẻ body */}
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Component Dock được đặt cố định ở cuối trang */}
          <section className="fixed bottom-10 inset-x-0 z-50 flex justify-center">
            <CDock />
          </section>

          {/* Nội dung chính của các trang sẽ được render ở đây */}
          <main>{children}</main>

          <footer className="text-center p-4 m-auto w-[80%]">
            <FooterCustom></FooterCustom>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
