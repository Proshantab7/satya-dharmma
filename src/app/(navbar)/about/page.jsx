import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg">Learn more about Satya-Dharmma</p>
        </div>
      </header>

      <main className="container mx-auto py-10 px-6">
        <section className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700">
            Satya-Dharmma is dedicated to guiding individuals on their journey
            toward inner peace, wisdom, and enlightenment. We provide resources,
            teachings, and a supportive community to help you discover your
            true self.
          </p>
        </section>

        <section className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to inspire and empower individuals to live a life of
            truth, compassion, and mindfulness. We believe in the transformative
            power of spiritual growth and self-discovery.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
          <p className="text-gray-700">
            Become a part of our community and embark on a journey of
            self-discovery and spiritual growth. Together, we can create a
            world filled with peace and understanding.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;