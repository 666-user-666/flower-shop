export default function About() {
  return (
    <section id="about" className="bg-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center">О нас</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
          "Цветочный рай" — это ваш надежный партнер для создания незабываемых моментов.
          Мы предлагаем свежие цветы, быструю доставку и индивидуальный подход к каждому клиенту.
          Закажите через Telegram и убедитесь сами!
        </p>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-pink-600 mb-4">Наш адрес</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.717174134259!2d39.2006!3d51.6609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM5JzQzLjIiTiAzOcKwMTInMDQuMiJF!5e0!3m2!1sru!2sru!4v1624178400000!5m2!1sru!2sru&markers=51.6609,39.2006"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="mx-auto"
            title="Местоположение цветочного магазина в Воронеже"
          ></iframe>
        </div>
      </div>
    </section>
  );
}