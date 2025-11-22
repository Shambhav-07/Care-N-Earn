import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ name, email, subject, message });
    // Reset form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We're here to help and answer any questions you might have</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">support@care-earn.com</p>
                  <p className="text-gray-600">info@care-earn.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+91 (800) 123-4567</p>
                  <p className="text-gray-600">+91 (800) 987-6543</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    123 Care Street, Tech Park<br />
                    Bangalore, Karnataka 560001
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;