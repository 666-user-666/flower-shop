export default function Hero() {
  return (
    <section className="bg-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
          Свежие цветы для любого повода
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Закажите букеты с доставкой через нашего Telegram-бота!
        </p>
        <a
          href="https://t.me/FlOwErSHopLaNding_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition"
        >
          Заказать в Telegram
        </a>
      </div>
    </section>
  );
}