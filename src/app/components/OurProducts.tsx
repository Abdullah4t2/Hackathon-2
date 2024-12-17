// pages/products.js
import Image from "next/image";

export default function OurProducts() {
  
  const products = [
    { id: 1, name: "Products 1", image: "/our1.jpg" },
    { id: 2, name: "Products 2", image: "/our2.jpeg" },
    { id: 3, name: "Products 3", image: "/our3.jpeg" },
    { id: 4, name: "Products 4", image: "/our4.jpeg" },
    { id: 5, name: "Products 5", image: "/our5.webp" },
    { id: 6, name: "Products 6", image: "/our6.jpg" },
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-lg shadow-md text-center"
          >
            {/* Optimized Image Component */}
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-md object-cover"
            />
            <h3 className="mt-2 text-lg font-medium">{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
