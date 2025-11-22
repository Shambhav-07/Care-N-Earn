import React from 'react';
import { Clock, MapPin, Star, Bell, Calendar, DollarSign } from 'lucide-react';
import { useJobs } from '../context/JobContext';
import DashboardLayout from '../components/DashboardLayout';

function UserDashboard() {
  const { jobs, applyForJob } = useJobs();
  const userId = 'user123'; // In a real app, this would come from authentication

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Dashboard Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
              <button className="relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm font-medium">Active Tasks</h3>
              <p className="text-3xl font-bold text-gray-900">3</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm font-medium">Completed Tasks</h3>
              <p className="text-3xl font-bold text-gray-900">12</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm font-medium">Total Spent</h3>
              <p className="text-3xl font-bold text-gray-900">₹4,500</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm font-medium">Average Rating Given</h3>
              <div className="flex items-center">
                <p className="text-3xl font-bold text-gray-900">4.8</p>
                <Star className="w-5 h-5 text-yellow-400 ml-1" />
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <button className="flex items-center justify-center gap-2 bg-emerald-600 text-white p-4 rounded-lg hover:bg-emerald-700">
              <Calendar className="w-5 h-5" />
              <span>Schedule New Service</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-emerald-600 p-4 rounded-lg border-2 border-emerald-600 hover:bg-emerald-50">
              <DollarSign className="w-5 h-5" />
              <span>View Payment History</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-emerald-600 p-4 rounded-lg border-2 border-emerald-600 hover:bg-emerald-50">
              <Star className="w-5 h-5" />
              <span>Rate Past Services</span>
            </button>
          </div>

          {/* Available Jobs */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div key={job.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{job.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          <Clock size={16} />
                          <span>{job.duration}</span>
                          <MapPin size={16} />
                          <span>{job.location}</span>
                          <DollarSign size={16} />
                          <span>₹{job.rate}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => applyForJob(job.id, userId)}
                        disabled={job.applications.includes(userId)}
                        className={`px-4 py-1 rounded-md ${
                          job.applications.includes(userId)
                            ? 'bg-gray-300 text-gray-600'
                            : 'bg-emerald-600 text-white hover:bg-emerald-700'
                        }`}
                      >
                        {job.applications.includes(userId) ? 'Applied' : 'Apply'}
                      </button>
                    </div>
                    <p className="mt-2 text-gray-600">{job.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                      <span className="text-sm text-gray-600">Posted by {job.postedBy.name}</span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{job.postedBy.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity & Upcoming Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <div>
                      <p className="text-gray-600">Task completed: Elderly Care</p>
                      <p className="text-sm text-gray-500">2 days ago • ₹800</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <div>
                      <p className="text-gray-600">New task posted: Pet Sitting</p>
                      <p className="text-sm text-gray-500">3 days ago • ₹400</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <div>
                      <p className="text-gray-600">Rated service: House Cleaning</p>
                      <p className="text-sm text-gray-500">4 days ago • ★★★★★</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Services */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Upcoming Services</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Calendar className="text-emerald-600" />
                      <div>
                        <p className="font-medium">Pet Sitting</p>
                        <p className="text-sm text-gray-500">Tomorrow, 10:00 AM</p>
                      </div>
                    </div>
                    <span className="text-emerald-600 font-medium">₹400</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Calendar className="text-emerald-600" />
                      <div>
                        <p className="font-medium">House Cleaning</p>
                        <p className="text-sm text-gray-500">Next Week, Monday</p>
                      </div>
                    </div>
                    <span className="text-emerald-600 font-medium">₹600</span>
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

export default UserDashboard;