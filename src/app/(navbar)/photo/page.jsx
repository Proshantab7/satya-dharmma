import React from 'react';
import Image from 'next/image';
import gurudev from '@/assets/images/gurunath_sengupta.jpg';
import nibaran from '@/assets/images/nibaran.jpg';
import gurudevi from '@/assets/images/adormoni_devi.jpg';
import jatin from '@/assets/images/Jatin.jpg';


const Photo = () => {
  const photos = [
    { id: 1, src: gurudev, alt: 'Mahatma Gurunath Sengupta' },
    { id: 2, src: nibaran, alt: 'Mahatma Nibaran' },
    { id: 3, src: gurudevi, alt: 'Mahatma Adormoni Devi' },
    { id: 4, src: jatin, alt: 'Mahatma Jatin and his wife' },
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
              <Image
                width={300}
                height= {250}
                src={photo.src}
                alt={photo.alt}
                className="w-full h-[450px] object-cover"
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Photo;