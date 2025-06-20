export default function Contact() {
  return (
    <section id="contact" className="bg-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-8">Свяжитесь с нами</h2>
        <p className="text-lg text-gray-600 mb-4">Телефон: +7 (999) 123-45-67</p>
        <p className="text-lg text-gray-600 mb-8">Email: info@flowerparadise.ru</p>
        <a
          href="https://t.me/flowerShopLanding_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition"
        >
          Написать в Telegram
        </a>
      </div>
    </section>
  );
}