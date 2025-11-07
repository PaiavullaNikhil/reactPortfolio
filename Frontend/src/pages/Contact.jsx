import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  }); 
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });
  const formRef = useRef(null);
  const [cursorVariant, setCursorVariant] = useState("default");
  
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with pre-filled email content
    const recipient = "nikhil.20th65@gmail.com";
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio");
    const body = encodeURIComponent(
      `Hello Nikhil,\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setFormStatus({
      isSubmitting: false,
      isSubmitted: true,
      error: null
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus(prev => ({ ...prev, isSubmitted: false }));
    }, 5000);
  };

  const inputClasses = "w-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 text-white placeholder-zinc-500 rounded-xl px-4 py-3 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all duration-300";
  
  const socialContacts = [
    {
      name: "Email",
      value: "nikhil.20th65@gmail.com",
      url: "mailto:nikhil.20th65@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
        </svg>
      )
    },
    {
      name: "Phone",
      value: "+91 8555069156",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
        </svg>
      )
    },
    {
      name: "Location",
      value: "Bangalore, India",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      value: "www.linkedin.com/in/paiavulla-nikhil",
      url: "https://www.linkedin.com/in/paiavulla-nikhil",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    }
  ];

  const dopplerEffect = {
    rest: {
      scale: 1,
      transition: { duration: 0.5, type: "tween", ease: "easeInOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.5, type: "tween", ease: "easeInOut" }
    }
  };

  return (
    <div id="contact" className="relative w-full max-w-8xl min-h-screen bg-zinc-900 overflow-x-hidden">  
      {/* Background Glow Effect */}
      <div className="absolute w-full max-w-6xl flex justify-center h-full">
          <div
            className="absolute w-96 h-96 bg-red-600/5 rounded-full filter blur-3xl"
            style={{ top: 60, right: -700}}
          /> 
          <div
            className="absolute w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"
            style={{ bottom: 120, left: 20 }}
          />
        </div>

      <div className="container mx-auto px-6 pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold tracking-tighter text-white"
            variants={dopplerEffect}
            whileHover="hover"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Get in <span className="text-red-500 font-[HelloSwashes]">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-zinc-400 mt-4 leading-relaxed text-left"
          >
            Have a project in mind? Let's bring your ideas to life.
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Contact Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <div className="bg-zinc-800/30 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 md:p-8 shadow-xl">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                variants={dopplerEffect}
                whileHover="hover"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Send a <span className="text-red-500">Message</span>
              </motion.h2>            
              
              {formStatus.isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 text-center"
                >
                  <svg className="w-16 h-16 mx-auto mb-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-white mb-2">Email Client Opened!</h3>
                  <p className="text-lg text-zinc-400">Please complete sending the email from your email client.</p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-bold text-lg mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-bold text-lg mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your.email@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="subject" className="block text-white font-bold text-lg mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div className="mt-6">
                    <label htmlFor="message" className="block text-white font-bold text-lg mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Tell me about your project..."
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className={inputClasses}
                    ></textarea>
                  </div>
                  {formStatus.error && (
                    <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-white">
                      <p>{formStatus.error}</p>
                    </div>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className="mt-8 bg-red-500 text-white font-bold text-xl px-8 py-3 rounded-xl shadow-lg hover:shadow-red-500/20 hover:bg-red-600 transition-all duration-300 w-full disabled:opacity-70"
                  >
                    {formStatus.isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : "Send Message"}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-2/5"
          >
            <div className="bg-zinc-800/30 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 md:p-8 shadow-xl h-full overflow-hidden">
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6"
                variants={dopplerEffect}
                whileHover="hover"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Contact <span className="text-red-500">Info</span>
              </motion.h2>           
              
              <div className="space-y-6 mb-8 lg:mb-12">
                {socialContacts.map((contact, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4 overflow-hidden"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {contact.url ? (
                      <a
                        href={contact.url}
                        className="flex items-start space-x-4 w-full cursor-pointer"
                        {...(contact.url.startsWith('mailto:') ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                      >
                        <div className="bg-zinc-800 p-3 rounded-lg flex-shrink-0">
                          <div className="text-red-500">{contact.icon}</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-xl font-bold text-white mb-1">{contact.name}</h3>
                          <p className="text-sm md:text-base lg:text-lg text-zinc-400 break-words break-all">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <>
                        <div className="bg-zinc-800 p-3 rounded-lg flex-shrink-0">
                          <div className="text-red-500">{contact.icon}</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-xl font-bold text-white mb-1">{contact.name}</h3>
                          <p className="text-sm md:text-base lg:text-lg text-zinc-400 break-words break-all">
                            {contact.value}
                          </p>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>              
              

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
