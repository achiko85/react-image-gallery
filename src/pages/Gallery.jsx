export default function Gallery() {
  const images = Array.from({ length: 10 }, (_, i) => `/images/image${i + 1}.jpg`);

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <section aria-labelledby="gallery-heading" className="max-w-6xl mx-auto">
        <h1 id="gallery-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Image Gallery
        </h1>
        <p className="text-gray-500 mb-8">Browse the collection — hover to preview.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                loading="lazy"
                className="aspect-square w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
