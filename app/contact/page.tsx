export default function Contact() {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-screen-md text-center">
        <h1 className="text-4xl font-bold text-azureBlue">Contact Us</h1>
        <p className="mt-4 text-lg">
          Let&apos;s collaborate to achieve your mission-critical goals.
        </p>
        <form
          className="mt-8"
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            alert("Your message has been sent!"); // Placeholder for form submission logic
          }}
        >
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="p-4 border border-gray-300 rounded w-full mb-4"
            required
            aria-required="true"
          />

          <label htmlFor="email" className="sr-only">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="p-4 border border-gray-300 rounded w-full mb-4"
            required
            aria-required="true"
          />

          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="p-4 border border-gray-300 rounded w-full mb-4"
            rows={5}
            required
            aria-required="true"
          ></textarea>

          <button
            type="submit"
            className="bg-azureBlue py-3 px-6 rounded text-light hover:bg-orbitBlue transition w-full sm:w-auto"
            aria-label="Send Message"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
