export default function Contact() {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-screen-md text-center">
        <h1 className="text-4xl font-bold text-azureBlue">Contact Us</h1>
        <p className="mt-4 text-lg">Let’s collaborate to achieve your mission-critical goals.</p>
        <form className="mt-8">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 border border-gray-300 rounded w-full mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 border border-gray-300 rounded w-full mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 border border-gray-300 rounded w-full mb-4"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="bg-azureBlue py-3 px-6 rounded text-light hover:bg-orbitBlue transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}