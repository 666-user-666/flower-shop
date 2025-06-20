export default function Reviews() {
  const reviews = [
    { id: 1, name: "Анна", text: "Прекрасные букеты, доставка вовремя!" },
    { id: 2, name: "Михаил", text: "Заказал через Telegram, очень удобно." },
    { id: 3, name: "Елена", text: "Цветы свежие, цены доступные." },
  ];

  return (
    <section id="reviews" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center">Отзывы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white shadow rounded-lg p-6">
              <p className="text-gray-600 italic">"{review.text}"</p>
              <p className="mt-4 font-semibold text-pink-600">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}