import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { MdOutlineMail } from "react-icons/md";
import { MdCall } from "react-icons/md";

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send the message, please try again.');
    });
  };

  return (
    <div className="flex flex-col mt-25 lg:flex-row gap-4 lg:gap-8 flex-wrap w-full h-full p-2">
      <div className="flex-1 flex flex-col  order-2 lg:order-1 rounded-lg p-6  flex-wrap my-5 backdrop-blur-sm gap-10">
        <div>
          <div className="min-h-[50vh] flex items-center justify-center p-4">
            <div className="w-full max-w-md  rounded-lg p-6">
              <div className="flex justify-center  items-center mb-6">
                <h2 className="text-5xl hover:rotate-6 font-bold text-gray-900 dark:text-red-400 my-5">
                  CONTACT ME
                </h2>
              </div>
              <form ref={form} onSubmit={sendEmail} className="mt-5">
                <div className="mb-6 mt-5">
                  <label
                    htmlFor="email"
                    className="block mb-2  font-medium text-2xl text-gray-900 dark:text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John Deo"
                    required
                  />
                </div>
                <div className="mb-6 mt-5">
                  <label
                    htmlFor="email"
                    className="block mb-2  font-medium text-2xl text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block mb-2 font-medium text-gray-900 dark:text-gray-300 text-2xl"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Let me know how I can help you"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <div className="mb-6 flex justify-center ">
                  <button
                    type="submit"
                    className="flex flex-row gap-2 justify-center cursor-pointer items-center border-2 border-red-400 py-2 px-5 hover:rotate-6 duration-300 rounded-3xl backdrop-blur-sm my-4 opacity-100 hover:opacity-70 text-white"
                  >
                    Send message
                  </button>
                </div>
                <div className="text-center  justify-center items-center">
                  <p className="mb-2 flex gap-3 text-sm justify-center items-center text-gray-500 dark:text-gray-400">
                    <MdOutlineMail className="size-5" />
                    <a
                      href="mailto:himanshusingh98360@gmail.com"
                      className="hover:underline"
                    >
                       himanshusingh98360@gmail.com
                    </a>
                  </p>
                  <p className="text-sm flex gap-3 text-gray-500 justify-center items-center dark:text-gray-400">
                    <MdCall className="size-5" />
                    <a href="tel:+919339229707" className="hover:underline">
                       +91-9339229707
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;