// import React, { useState } from "react";

// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mqkrpbrd");
  if (state.succeeded) {
    return (
      <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-md shadow-md">
        <p className="text-center text-2xl">
          Thank you for your message. I will get back to you soon.
        </p>
      </div>
    );
  }
  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl text-center mb-6 font-bold">Contact Me</h2>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4">
          <label htmlFor="email" className="text-gray-600">
            Name
          </label>
          <input
            id="name"
            type="name"
            name="name"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <label htmlFor="email" className="text-gray-600">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <label htmlFor="email" className="text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          type="message"
          name="message"
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={state.submitting}
            className="mt-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-md hover:from-orange-400 hover:to-red-400 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
function App() {
  return <ContactForm />;
}
export default App;

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//     });
//   };

//   return (

//     // Make sure to run npm install @formspree/react
// // For more help visit https://formspr.ee/react-help
// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// function ContactForm() {
//   const [state, handleSubmit] = useForm("mqkrpbrd");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
//   return (
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email"
//         name="email"
//       />
//       <ValidationError
//         prefix="Email"
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError
//         prefix="Message"
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }
// function App() {
//   return (
//     <ContactForm />
//   );
// }
// export default App;

//     // <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-md shadow-md">
//     //   <h2 className="text-3xl text-center mb-6 font-bold">Contact Me</h2>
//     //   <form onSubmit={handleSubmit} className="flex flex-col">
//     //     <div className="mb-4">
//     //       <label htmlFor="name" className="text-gray-600">
//     //         Name:
//     //       </label>
//     //       <input
//     //         type="text"
//     //         id="name"
//     //         name="name"
//     //         value={formData.name}
//     //         onChange={handleInputChange}
//     //         required
//     //         className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//     //       />
//     //     </div>
//     //     <div className="mb-4">
//     //       <label htmlFor="email" className="text-gray-600">
//     //         Email:
//     //       </label>
//     //       <input
//     //         type="email"
//     //         id="email"
//     //         name="email"
//     //         value={formData.email}
//     //         onChange={handleInputChange}
//     //         required
//     //         className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//     //       />
//     //     </div>
//     //     <div className="mb-4">
//     //       <label htmlFor="message" className="text-gray-600">
//     //         Message:
//     //       </label>
//     //       <textarea
//     //         id="message"
//     //         name="message"
//     //         value={formData.message}
//     //         onChange={handleInputChange}
//     //         required
//     //         rows="4"
//     //         className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//     //       />
//     //     </div>
//     //     <div className="flex justify-center">
//     //       <button
//     //         className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-md hover:from-orange-400 hover:to-red-400 focus:outline-none"
//     //         type="submit"
//     //       >
//     //         Submit
//     //       </button>
//     //     </div>
//     //   </form>
//     // </div>
//   );
// }
