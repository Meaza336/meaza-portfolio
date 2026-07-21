type ContactProps = {
  darkMode: boolean;
};
function Contact({ darkMode }: ContactProps) {
  return (
    <section
  id="contact"
    className={`px-8 py-20 transition-colors duration-300 ${ darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900" }`}
>
  <h2 className="text-4xl font-bold mb-4">
    Contact Me
  </h2>

  <p className={`mb-10 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
    Feel free to reach out if you'd like to work together or just say hello.
  </p>

  <form className="max-w-2xl mx-auto flex flex-col gap-6">
    <div>
  <label className="block mb-2 font-medium">
    Name
  </label>

  <input
    type="text"
    placeholder="Your name"
    className="w-full border rounded-lg px-4 py-3"
  />
</div>
<div>
  <label className="block mb-2 font-medium">
    Email
  </label>

  <input
    type="email"
    placeholder="Your email"
    className="w-full border rounded-lg px-4 py-3"
  />
</div>
<div>
  <label className="block mb-2 font-medium">
    Message
  </label>

  <textarea
    placeholder="Your message"
    className="w-full border rounded-lg px-4 py-3 h-32"
  />
</div>
  </form>
  <button
  type="submit"
  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mx-auto mt-6 block"
>
  Send Message
</button>
</section>
  );
}

export default Contact;