import React, { useState } from 'react';
import { Clock, MapPin, Star, Bell, DollarSign, Calendar, Briefcase, Users } from 'lucide-react';
import { useJobs } from '../context/JobContext';
import DashboardLayout from '../components/DashboardLayout';

function ProviderDashboard() {
  const { addJob } = useJobs();
  const [showPostJob, setShowPostJob] = useState(false);
  const [jobForm, setJobForm] = useState({
    title: '',
    description: '',
    location: '',
    duration: '',
    rate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addJob({
      title: jobForm.title,
      description: jobForm.description,
      location: jobForm.location,
      duration: jobForm.duration,
      rate: Number(jobForm.rate),
      postedBy: {
        name: 'Rachel M.',
        rating: 4.9,
      },
    });
    setShowPostJob(false);
    setJobForm({
      title: '',
      description: '',
      location: '',
      duration: '',
      rate: '',
    });
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">Provider Dashboard</h1>
              <button className="relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  5
                </span>
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm font-medium">Active Jobs</h3>
              <p className="text-3xl font-bold text-gray-900">2</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm font-medium">Completed Jobs</h3>
              <p className="text-3xl font-bold text-gray-900">28</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm font-medium">Total Earnings</h3>
              <p className="text-3xl font-bold text-gray-900">₹12,400</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm font-medium">Rating</h3>
              <div className="flex items-center">
                <p className="text-3xl font-bold text-gray-900">4.9</p>
                <Star className="w-5 h-5 text-yellow-400 ml-1" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <button 
              onClick={() => setShowPostJob(true)}
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white p-4 rounded-lg hover:bg-emerald-700"
            >
              <Briefcase className="w-5 h-5" />
              <span>Post New Job</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-emerald-600 p-4 rounded-lg border-2 border-emerald-600 hover:bg-emerald-50">
              <DollarSign className="w-5 h-5" />
              <span>Withdraw Earnings</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-emerald-600 p-4 rounded-lg border-2 border-emerald-600 hover:bg-emerald-50">
              <Users className="w-5 h-5" />
              <span>View Client Reviews</span>
            </button>
          </div>

          {showPostJob && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4">Post a New Job</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Job Title</label>
                    <input
                      type="text"
                      value={jobForm.title}
                      onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      value={jobForm.description}
                      onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      rows={3}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                      type="text"
                      value={jobForm.location}
                      onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Duration</label>
                    <input
                      type="text"
                      value={jobForm.duration}
                      onChange={(e) => setJobForm({ ...jobForm, duration: e.target.value })}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      placeholder="e.g., 4 Hours"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Rate (₹)</label>
                    <input
                      type="number"
                      value={jobForm.rate}
                      onChange={(e) => setJobForm({ ...jobForm, rate: e.target.value })}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-4 mt-6">
                    <button
                      type="button"
                      onClick={() => setShowPostJob(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
                    >
                      Post Job
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Elderly Care Required</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Clock size={16} />
                        <span>4 Hours</span>
                        <MapPin size={16} />
                        <span>Delhi</span>
                        <DollarSign size={16} />
                        <span>₹800</span>
                      </div>
                    </div>
                    <button className="bg-emerald-600 text-white px-4 py-1 rounded-md hover:bg-emerald-700">
                      Apply
                    </button>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Looking for experienced caregiver for elderly person. Must be patient and compassionate.
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                    <span className="text-sm text-gray-600">Posted by John D.</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">4.8</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">House Cleaning Needed</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Clock size={16} />
                        <span>3 Hours</span>
                        <MapPin size={16} />
                        <span>Mumbai</span>
                        <DollarSign size={16} />
                        <span>₹600</span>
                      </div>
                    </div>
                    <button className="bg-emerald-600 text-white px-4 py-1 rounded-md hover:bg-emerald-700">
                      Apply
                    </button>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Regular house cleaning service required. Weekly commitment preferred.
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                    <span className="text-sm text-gray-600">Posted by Sarah M.</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-emerald-50 rounded-lg">
                    <Clock className="text-emerald-600" />
                    <div>
                      <p className="font-medium">House Cleaning</p>
                      <p className="text-sm text-gray-500">2:00 PM - 4:00 PM</p>
                      <p className="text-sm text-gray-500">123 Park Street, Mumbai</p>
                    </div>
                    <button className="ml-auto text-emerald-600 hover:text-emerald-700">
                      View Details
                    </button>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-emerald-50 rounded-lg">
                    <Clock className="text-emerald-600" />
                    <div>
                      <p className="font-medium">Pet Care</p>
                      <p className="text-sm text-gray-500">5:00 PM - 6:00 PM</p>
                      <p className="text-sm text-gray-500">456 Lake View, Mumbai</p>
                    </div>
                    <button className="ml-auto text-emerald-600 hover:text-emerald-700">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Reviews</h2>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                      <span className="text-gray-500">5.0</span>
                    </div>
                    <p className="text-gray-600">
                      "Rachel was fantastic! Very professional and thorough with the house cleaning."
                    </p>
                    <p className="text-sm text-gray-500 mt-1">- John D.</p>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                      <span className="text-gray-500">5.0</span>
                    </div>
                    <p className="text-gray-600">
                      "Great with pets! My dog loved her. Will definitely book again."
                    </p>
                    <p className="text-sm text-gray-500 mt-1">- Sarah M.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
}

export default ProviderDashboard;