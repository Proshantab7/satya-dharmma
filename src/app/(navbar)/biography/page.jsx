import React from 'react';

const Biography = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Biography</h1>
          <p className="mt-2 text-lg">Learn about the life and journey of Satya-Dharmma.</p>
        </div>
      </header>

      <main className="container mx-auto py-10 px-6">
        <section className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-4">Early Life</h2>
          <p className="text-gray-700">
            Satya-Dharmma was born in a small village, surrounded by nature and tranquility. From an early age, they
            showed a deep interest in understanding the truths of life and the universe.
          </p>
        </section>

        <section className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-4">Journey to Enlightenment</h2>
          <p className="text-gray-700">
            Through years of study, meditation, and self-reflection, Satya-Dharmma embarked on a journey to discover
            inner peace and enlightenment. Their teachings are rooted in compassion, mindfulness, and truth.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Legacy</h2>
          <p className="text-gray-700">
            Today, Satya-Dharmma's teachings continue to inspire countless individuals around the world. Their legacy
            lives on through the community they built and the wisdom they shared.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Biography;