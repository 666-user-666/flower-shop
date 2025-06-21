import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Цветочный магазин - Закажите цветы онлайн",
  description: "Свежие цветы с доставкой. Закажите через нашего Telegram-бота!",
  keywords: ["цветы", "доставка цветов", "цветочный магазин", "заказ цветов"],
  openGraph: {
    title: "Цветочный магазин",
    description: "Свежие цветы с доставкой. Закажите через Telegram!",
    url: "https://flower-shop-gu5o.onrender.com",
    images: ["/images/flower1.jpg"],
  },
  metadataBase: new URL("https://flower-shop-gu5o.onrender.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="font-sans">
        <header className="bg-pink-100 shadow">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-pink-600">Цветочный рай</h1>
              <div className="space-x-4 sm:space-x-4 xs:space-x-2">
                <a href="#catalog" className="text-pink-600 hover:text-pink-800 whitespace-nowrap">Каталог</a>
                <a href="#about" className="text-pink-600 hover:text-pink-800 whitespace-nowrap">О нас</a>
                <a href="#reviews" className="text-pink-600 hover:text-pink-800 whitespace-nowrap">Отзывы</a>
                <a href="#contact" className="text-pink-600 hover:text-pink-800 whitespace-nowrap">Контакты</a>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-pink-100 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-pink-600">© 2025 Цветочный рай. Все права защищены.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}