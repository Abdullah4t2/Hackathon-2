import Image from "next/image";

export default function TopCategories() {
  const products = [
    { id: 1, name: "Product 1", image: "/Top (4).png" },
    { id: 2, name: "Product 2", image: "/Top (5).png" },
    { id: 3, name: "Product 3", image: "/Top (6).png" },
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">TopCategories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-md">
            {/* Product Image */}
            <div className="relative w-full h-56 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                width="230"
                height="200"
                className="rounded-lg"
              />
            </div>

            {/* Product Name */}
            <h3 className="text-center text-lg font-medium">{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
