import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, creative projects, 
                or just chatting about technology. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-cyan-500/20 transition-colors duration-200">
                  <Mail className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href={`mailto:${personal.email}`}
                    className="text-white hover:text-cyan-400 transition-colors duration-200"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-cyan-500/20 transition-colors duration-200">
                  <Phone className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a 
                    href={`tel:${personal.phone}`}
                    className="text-white hover:text-cyan-400 transition-colors duration-200"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-cyan-500/20 transition-colors duration-200">
                  <MapPin className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">{personal.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personal.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;