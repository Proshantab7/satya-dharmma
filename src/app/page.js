import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to Satya-Dharmma</h1>
          <p className="mt-2 text-lg">Discover the path to wisdom and peace</p>
        </div>
      </header>

      <main className="container mx-auto py-10 px-6">
        <section className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At Satya-Dharmma, we aim to provide resources and guidance to help
            individuals find inner peace and enlightenment.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Books</h3>
            <p className="text-gray-600 mb-4">
              Explore our collection of spiritual and philosophical books.
            </p>
            <Link
              href="/books"
              className="text-blue-600 hover:underline"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Photo Gallery</h3>
            <p className="text-gray-600 mb-4">
              View inspiring photos that capture the essence of our teachings.
            </p>
            <Link
              href="/photo"
              className="text-blue-600 hover:underline"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Services</h3>
            <p className="text-gray-600 mb-4">
              Discover the services we offer to support your spiritual journey.
            </p>
            <Link
              href="/services"
              className="text-blue-600 hover:underline"
            >
              Learn More
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
