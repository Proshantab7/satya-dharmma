import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Satya-Dharmma. All rights reserved.
        </p>
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="https://www.facebook.com/profile.php?id=100083592430030" target='_blank' className="hover:text-yellow-400">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-400">
                Twitter
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-400">
                Instagram
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-400">
                LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;