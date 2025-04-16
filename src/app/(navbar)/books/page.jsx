import React from 'react';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'The Path to Enlightenment',
      description: 'A guide to finding inner peace and wisdom.',
      image: '/images/book1.jpg',
    },
    {
      id: 2,
      title: 'Mindfulness in Daily Life',
      description: 'Practical tips for incorporating mindfulness into your routine.',
      image: '/images/book2.jpg',
    },
    {
      id: 3,
      title: 'The Art of Compassion',
      description: 'Learn how to cultivate compassion and kindness.',
      image: '/images/book3.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Books</h1>
          <p className="mt-2 text-lg">Explore our collection of spiritual and philosophical books.</p>
        </div>
      </header>

      <main className="container mx-auto py-10 px-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-4">{book.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Books;