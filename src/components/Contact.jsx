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
                <p>Spellbound Coworking and Office Spaces, HT Road, Osmania University Teachers Colony, Sainikpuri, Secunderabad, Telangana</p>
              </div>
              <div>
                <h3 className="text-[#b08968] font-medium mb-2">Email</h3>
                <p>Info.thejkinteriors@gmail.com</p>
              </div>
              <div>
                <h3 className="text-[#b08968] font-medium mb-2">Phone</h3>
                <div className="flex items-center gap-2">
                  <p>+91 9063096060</p>
                  <a 
                    href="https://wa.me/919063096060" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-400"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0647949544897!2d78.5492!3d17.4837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b6b5a123ad5%3A0xe30d373d2ac9e82!2sSpellbound%20Coworking%20and%20Office%20Spaces!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
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