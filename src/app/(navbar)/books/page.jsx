import PdfViewer from "@/components/PdfViewer";
import Link from "next/link";
import React from "react";
// import order from '@/assets/pdfs/orders.pdf'

const Books = () => {
  const books = [
    {
      id: 1,
      title: "উপদেশ-মালা",
      description: "A guide to finding inner peace and wisdom.",
      image: "/images/book1.jpg",
      url: "/orders.pdf",
    },
    {
      id: 2,
      title: "Mindfulness in Daily Life (ধ্যান)",
      description:
        "Practical tips for incorporating mindfulness into your routine.",
      image: "/images/book2.jpg",
      url: "/meditation.pdf",
    },
    {
      id: 3,
      title: "দম্পতির ধর্ম্মালাপ",
      description: "Learn how to cultivate compassion and kindness.",
      image: "/images/book3.jpg",
      url: "/dampotir-dharmma-alap.pdf",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Books</h1>
          <p className="mt-2 text-lg">
            Explore our collection of spiritual and philosophical books.
          </p>
        </div>
      </header>

      <main className="container mx-auto py-10 px-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <Link href={book.url}>
                  <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                </Link>
                <p className="text-gray-600 mb-4">{book.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Link href="/orders.pdf">DownLoad Pdf</Link>

      {/* <PdfViewer/> */}
    </div>
  );
};

export default Books;
