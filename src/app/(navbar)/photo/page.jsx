import React from 'react';

const Photo = () => {
  const photos = [
    { id: 1, src: '/images/photo1.jpg', alt: 'Photo 1' },
    { id: 2, src: '/images/photo2.jpg', alt: 'Photo 2' },
    { id: 3, src: '/images/photo3.jpg', alt: 'Photo 3' },
    { id: 4, src: '/images/photo4.jpg', alt: 'Photo 4' },
    { id: 5, src: '/images/photo5.jpg', alt: 'Photo 5' },
    { id: 6, src: '/images/photo6.jpg', alt: 'Photo 6' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Photo Gallery</h1>
          <p className="mt-2 text-lg">Explore our collection of inspiring photos.</p>
        </div>
      </header>

      <main className="container mx-auto py-10 px-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Photo;