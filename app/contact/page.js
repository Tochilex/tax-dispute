import React from 'react'

const Contact = () => {
  return (
    <section className="container bg-[#121212] max-w-[1240px] mt-[5rem] px-12 py-4">
      <div>
      <h1 className="text-white font-bold text-3xl mb-4">Contact Us</h1>
        <h1 className="text-white font-bold text-lg py-5">
          Additional questions? Submit our form
        </h1>
        <p className="text-[#adb7be] py-3">How can we help?</p>
        <p className="text-[#adb7be] mb-6">
          Please submit your question here and we will respond as quickly as
          possible.{" "}
        </p>
      </div>

      <div>
        <form className="flex flex-col w-full sm:w-[60%]">
         <div className="mb-6">
         <label htmlFor="text" className="text-white mb-2 block text-sm font-medium">
            First Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Tochukwu"
          />
         </div>
           <div className="mb-6">
           <label htmlFor="text" className="text-white mb-2 block text-sm font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Owunwanne"
          />
           </div>
           <div className="mb-6">
           <label htmlFor="email" className="text-white mb-2 block text-sm font-medium">
            Your email
          </label>
          <input
            type="email"
            id="email"
            required
            className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="johndoe@gmail.com"
          />
           </div>
          <div className="mb-6">
          <label htmlFor="text" className="text-white mb-2 block text-sm font-medium">
            Company
          </label>
          <input
            type="text"
            id="name"
            required
            className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Deloitte"
          />
          </div>
          <div className="mb-6">
          <label htmlFor="text" className="text-white mb-2 block text-sm font-medium">
            Phone
          </label>
          <input
            type="text"
            id="number"
            required
            className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="+2348061668461"
          />
          </div>

          <div className="mb-6">
          <label htmlFor="text" className="text-white mb-2 block text-sm font-medium">
            Message
          </label>
          <textarea 
            name="message"
            id="message"
            className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Messsage..."
          />
          </div>
            <button type="submit" 
            className="bg-transparent border border-white text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
                Submit form
            </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

// h-screen mt-[6rem] font-bold