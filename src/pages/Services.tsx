import React from 'react';
import { Shield, Clock, Heart, Star, Car, Users, Briefcase, Coffee } from 'lucide-react';

function Services() {
  const services = [
    {
      title: "Home Cleaning",
      description: "Professional home cleaning services",
      price: "From ₹500/hour",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Elderly Care",
      description: "Compassionate care for seniors",
      price: "From ₹800/hour",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Pet Care",
      description: "Professional pet sitting and walking",
      price: "From ₹400/hour",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Tutoring",
      description: "One-on-one educational support",
      price: "From ₹600/hour",
      image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const upcomingServices = [
    {
      title: "Carpooling",
      description: "Share rides and reduce carbon footprint",
      icon: <Car className="w-12 h-12 text-emerald-600" />,
      launch: "Coming Summer 2025"
    },
    {
      title: "Group Activities",
      description: "Join community events and activities",
      icon: <Users className="w-12 h-12 text-emerald-600" />,
      launch: "Coming Fall 2025"
    },
    {
      title: "Professional Services",
      description: "Connect with skilled professionals",
      icon: <Briefcase className="w-12 h-12 text-emerald-600" />,
      launch: "Coming Winter 2025"
    },
    {
      title: "Social Meetups",
      description: "Connect with like-minded individuals",
      icon: <Coffee className="w-12 h-12 text-emerald-600" />,
      launch: "Coming Spring 2026"
    }
  ];

  return (
    <div className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-gray-600 text-center mb-12">Choose from our wide range of professional services</p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Verified Providers</h3>
            <p className="text-gray-600">All service providers are thoroughly vetted</p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Flexible Timing</h3>
            <p className="text-gray-600">Book services at your convenience</p>
          </div>
          <div className="text-center">
            <Heart className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Quality Care</h3>
            <p className="text-gray-600">Experienced and compassionate service</p>
          </div>
          <div className="text-center">
            <Star className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Satisfaction Guaranteed</h3>
            <p className="text-gray-600">100% satisfaction or money back</p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-600 font-semibold">{service.price}</span>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Services */}
        <div className="bg-gray-50 py-16 px-6 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-4">Coming Soon</h2>
          <p className="text-gray-600 text-center mb-12">Exciting new services on the horizon</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {upcomingServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                  {service.launch}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;