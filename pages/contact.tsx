import 'tailwindcss/tailwind.css';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import styles from "../components/contact.module.css"
export default function Contact() {
  return (
    <div className={styles.contact}> 
    <Header />
    <div className="container mx-auto py-12" >
      <h1 className="text-2xl font-bold mb-4 py-12 my-7">Contact Us</h1>
      <form className="mb-8">
        <div className="mb-4">
          <label className="block text-gray-300 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
            rows={6}
          />
        </div>
        <div className="mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
    <Footer />
    </div>
  );
}
