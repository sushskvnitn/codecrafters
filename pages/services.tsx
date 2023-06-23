import React from 'react';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import 'tailwindcss/tailwind.css';
import styles from "../components/contact.module.css";

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
              Coding Tutorial Sessions
            </h2>
            <p className="text-gray-600 mb-4">
              Enhance your coding skills with our tutorial sessions. We offer one-on-one coding tutorials where our experienced instructors will guide you through various programming concepts and help you improve your problem-solving skills.
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
              Code Review and Feedback
            </h2>
            <p className="text-gray-600 mb-4">
              Get valuable feedback on your code from our expert developers. We offer code review services where we thoroughly analyze your code, provide suggestions for improvement, and offer insights into best coding practices.
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
              Competitive Coding Training
            </h2>
            <p className="text-gray-600 mb-4">
              Prepare for coding competitions and improve your algorithmic problem-solving skills. Our competitive coding training program covers various algorithms, data structures, and coding techniques to help you excel in competitive programming contests.
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
              Code Refactoring Services
            </h2>
            <p className="text-gray-600 mb-4">
              Improve the quality and efficiency of your existing codebase with our code refactoring services. Our experienced developers will review your code, identify areas for improvement, and refactor the code to enhance readability, maintainability, and performance.
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
