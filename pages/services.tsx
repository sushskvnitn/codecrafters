import React from 'react';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import 'tailwindcss/tailwind.css';
import styles from "../components/contact.module.css"
const Services = () => {
  return (
    <div className={styles.contact}>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter mb-8 py-10 my-5">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-md shadow-md p-6">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Service 1
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fringilla, nulla vel tincidunt pulvinar, orci neque mattis mauris,
              sit amet tincidunt nulla dolor ac nunc.
            </p>
            <a
              href="#"
              className="text-purple-600 font-medium hover:text-purple-700 transition duration-150 ease-in-out"
            >
              Learn More &rarr;
            </a>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Service 2
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fringilla, nulla vel tincidunt pulvinar, orci neque mattis mauris,
              sit amet tincidunt nulla dolor ac nunc.
            </p>
            <a
              href="#"
              className="text-purple-600 font-medium hover:text-purple-700 transition duration-150 ease-in-out"
            >
              Learn More &rarr;
            </a>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Service 3
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fringilla, nulla vel tincidunt pulvinar, orci neque mattis mauris,
              sit amet tincidunt nulla dolor ac nunc.
            </p>
            <a
              href="#"
              className="text-purple-600 font-medium hover:text-purple-700 transition duration-150 ease-in-out"
            >
              Learn More &rarr;
            </a>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Service 4
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fringilla, nulla vel tincidunt pulvinar, orci neque mattis mauris,
              sit amet tincidunt nulla dolor ac nunc.
            </p>
            <a
              href="#"
              className="text-purple-600 font-medium hover:text-purple-700 transition duration-150 ease-in-out"
            >
              Learn More &rarr;
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;