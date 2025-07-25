export default function Gallery() {
  const images = Array.from({ length: 10 }, (_, i) => `/images/image${i + 1}.jpg`);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Image Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Image ${idx + 1}`}
            className="rounded shadow hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  );
}
