import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-2 text-lg">Explore the services we offer to support your journey.</p>
        </div>
      </header>

      <main className="container mx-auto py-10 px-6">
        <section className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <p className="text-gray-700">
            At Satya-Dharmma, we provide a range of services to help you on your path to inner peace and enlightenment.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Meditation Sessions</h3>
            <p className="text-gray-600 mb-4">
              Join our guided meditation sessions to find calm and clarity in your life.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Workshops</h3>
            <p className="text-gray-600 mb-4">
              Participate in workshops focused on mindfulness, self-discovery, and personal growth.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">One-on-One Guidance</h3>
            <p className="text-gray-600 mb-4">
              Receive personalized guidance to help you navigate your spiritual journey.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;