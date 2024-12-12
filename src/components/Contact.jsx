import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const [showForm, setShowForm] = React.useState(false);

  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our services,
            pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-[#b08968] font-medium mb-2">Address</h3>
                <p>Hyderabad, India</p>
              </div>
              <div>
                <h3 className="text-[#b08968] font-medium mb-2">Email</h3>
                <p>Info.thejkinteriors@gmail.com</p>
              </div>
              <div>
                <h3 className="text-[#b08968] font-medium mb-2">Phone</h3>
                <p>+91 9063096060</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Contact Form
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Fill out the form below to get in touch with us.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-[#b08968] hover:bg-[#967253] text-white py-4 px-6 rounded-xl 
              font-medium transition-all duration-300 transform hover:scale-[1.02] 
              flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <span>Open Contact Form</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </div>
        </div>

        {showForm && <ContactForm onClose={() => setShowForm(false)} />}
      </div>
    </div>
  );
};

export default Contact; 