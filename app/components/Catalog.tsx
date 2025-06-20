import Image from "next/image";

export default function Catalog() {
  const flowers = [
    { id: 1, name: "Розовый сон", price: "2500 ₽", image: "/images/flower1.jpg" },
    { id: 2, name: "Солнечный микс", price: "3500 ₽", image: "/images/flower2.jpg" },
    { id: 3, name: "Нежность", price: "2000 ₽", image: "/images/flower3.jpg" },
    { id: 4, name: "Вечерний шарм", price: "2800 ₽", image: "/images/flower4.jpg" },
    { id: 5, name: "Одна роза", price: "100 ₽", image: "/images/rose.jpg" },
    { id: 6, name: "Один тюльпан", price: "80 ₽", image: "/images/tulip.jpg" },
  ];

  return (
    <section id="catalog" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center">Наш каталог</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {flowers.map((flower) => (
            <div key={flower.id} className="bg-white shadow rounded-lg overflow-hidden">
              <Image
                src={flower.image}
                alt={flower.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{flower.name}</h3>
                <p className="text-pink-600 font-bold">{flower.price}</p>
                <a
                  href="https://t.me/flowerShopLanding_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700"
                >
                  Заказать
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}