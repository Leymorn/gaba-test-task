import type { Metadata } from "next";
import "./styles/main.css";
import { geistSans, geistMono } from "./styles/fonts";
import { Header } from "./widgets/header";
import { I18nProvider } from "./shared/i18n/I18nProvider";
import { getLocale } from "./shared/i18n/server";

export const metadata: Metadata = {
  title: "Пользователи | Главная",
  description: "Тестовое задание для GABA Соловьев Георгий",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <I18nProvider initialLocale={locale}>
          <Header />
          <main className="w-full flex-1">{children}</main>
        </I18nProvider>
      </body>
    </html>
  );
}
