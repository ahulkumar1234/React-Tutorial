import { useState, useEffect } from "react";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem("Form", JSON.stringify(input))
  }, [input])

  useEffect(() => {
    const saved = localStorage.getItem("Form")
    if (saved) setInput(JSON.parse(saved))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const submithandler = (e) => {
    e.preventDefault();
    console.log(input);
    setInput({
      name: "",
      email: "",
      message: ""
    })
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-900 via-black to-green-900 text-white px-4">
      <h1 className="text-5xl font-extrabold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
        Have questions or want to collaborate? Get in touch with us today.
        We would love to hear from you!
      </p>
      <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={submithandler}>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="px-4 py-2 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-600"
        />
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="px-4 py-2 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-600"
        />
        <textarea
          name="message"
          value={input.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          className="px-4 py-2 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-600"
        />
        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-2xl shadow-lg transition duration-300">
          Send Message
        </button>
      </form>
      {success && <p className="text-green-500 font-semibold m-4 ">Form Submitted Successfully</p>}
    </div>
  );
};

export default Contact;
