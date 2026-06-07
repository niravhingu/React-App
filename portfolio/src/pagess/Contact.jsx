import { useState } from "react"

function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [success,setsuccess]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name)
    console.log(email)
    console.log(message)
    setsuccess(true)
    setName("")
    setEmail("")
    setMessage("")

  }

  return (
    <section className="text-white px-10 py-20">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold mb-5">
          Contact Me
        </h1>

        <div className="w-28 h-1 bg-cyan-400 mb-10"></div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-800"
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-800"
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="6"
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-800"
          />

          <button
            type="submit"
            className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>

        </form>
      {
        success && <p className="text-green-500 mt-4">
          Your message has been sent successfully!
        </p>
      }
      </div>

    </section>
  )
}

export default Contact