import React from 'react';
import { Shield, DollarSign, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

function StartEarning() {
  const benefits = [
    {
      icon: <DollarSign className="w-12 h-12 text-emerald-600" />,
      title: "Competitive Pay",
      description: "Earn competitive rates for your services with flexible payment options"
    },
    {
      icon: <Clock className="w-12 h-12 text-emerald-600" />,
      title: "Flexible Hours",
      description: "Choose your own schedule and work when it suits you"
    },
    {
      icon: <Users className="w-12 h-12 text-emerald-600" />,
      title: "Growing Community",
      description: "Join a supportive community of care providers"
    },
    {
      icon: <Shield className="w-12 h-12 text-emerald-600" />,
      title: "Secure Platform",
      description: "Work with confidence on our secure and trusted platform"
    }
  ];

  return (
    <div className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Start Earning with Care&Earn</h1>
          <p className="text-xl text-gray-600">Make a difference while earning on your own terms</p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Create Your Profile</h3>
              <p className="text-gray-600">Sign up and complete your profile with your skills and experience</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Get Verified</h3>
              <p className="text-gray-600">Complete our verification process to start accepting jobs</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Start Earning</h3>
              <p className="text-gray-600">Accept jobs and start earning while helping others</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/login"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-emerald-700"
          >
            Join as a Provider
          </Link>
          <p className="mt-4 text-gray-600">
            Already have an account? <Link to="/login" className="text-emerald-600 hover:text-emerald-700">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default StartEarning;