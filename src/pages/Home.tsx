import React, { useState } from 'react';
import { Search, Heart, MapPin } from 'lucide-react';

interface Task {
  id: string;
  name: string;
  location: string;
  category: string;
  details: string;
  price: number;
  postedBy: string;
  postedAt: Date;
}

function Home() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [price, setPrice] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      location,
      category,
      details: taskDetails,
      price: parseFloat(price),
      postedBy: 'Anonymous User',
      postedAt: new Date()
    };

    setTasks([newTask, ...tasks]);
    
    // Reset form
    setName('');
    setLocation('');
    setCategory('');
    setTaskDetails('');
    setPrice('');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-emerald-800 mb-4">Welcome to Care&Earn</h1>
        <p className="text-xl text-gray-600 mb-8">Empowering you to make a difference while earning.</p>
        <p className="text-lg text-gray-600 mb-8">
          Join our community of caring individuals and start making an impact today.
        </p>
        <button className="bg-emerald-600 text-white px-8 py-3 rounded-md text-lg hover:bg-emerald-700">
          About Us
        </button>
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="What do you need help with?"
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Search className="absolute right-4 top-3 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Task Section */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Post a Task */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Post a Task</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              >
                <option value="">Select Location</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              >
                <option value="">Select Category</option>
                <option value="Home Cleaning">Home Cleaning</option>
                <option value="Elderly Care">Elderly Care</option>
                <option value="Pet Care">Pet Care</option>
                <option value="Tutoring">Tutoring</option>
              </select>
              <input
                type="number"
                placeholder="Budget (₹)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
                min="0"
              />
              <textarea
                placeholder="Task Details"
                value={taskDetails}
                onChange={(e) => setTaskDetails(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 h-32"
                required
              />
              <button 
                type="submit"
                className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700"
              >
                Post Task
              </button>
            </form>
          </div>

          {/* Task Feed */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Task Feed</h2>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{task.name}</h3>
                      <p className="text-gray-600 text-sm">Posted by {task.postedBy}</p>
                    </div>
                    <span className="text-emerald-600 font-semibold">₹{task.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    <MapPin size={16} />
                    <span>{task.location}</span>
                  </div>
                  <p className="mt-2 text-gray-700">{task.details}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-sm text-gray-500">{task.category}</span>
                    <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}

              {/* Default Tasks */}
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">House Cleaning Required</h3>
                    <p className="text-gray-600 text-sm">Posted by Sarah M.</p>
                  </div>
                  <span className="text-emerald-600 font-semibold">₹800</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <MapPin size={16} />
                  <span>Mumbai, Maharashtra</span>
                </div>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">Elderly Care - 4 Hours</h3>
                    <p className="text-gray-600 text-sm">Posted by Raj K.</p>
                  </div>
                  <span className="text-emerald-600 font-semibold">₹600</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <MapPin size={16} />
                  <span>Bangalore, Karnataka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Projects */}
      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Project Cards */}
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Home Cleaning"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Home Cleaning</h3>
              <p className="text-gray-600 text-sm">Professional cleaning services</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-emerald-600 font-semibold">From ₹500</span>
                <Heart className="text-gray-400 hover:text-red-500 cursor-pointer" size={20} />
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Elderly Care"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Elderly Care</h3>
              <p className="text-gray-600 text-sm">Compassionate senior care</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-emerald-600 font-semibold">From ₹800</span>
                <Heart className="text-gray-400 hover:text-red-500 cursor-pointer" size={20} />
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Pet Care"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Pet Care</h3>
              <p className="text-gray-600 text-sm">Professional pet sitting</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-emerald-600 font-semibold">From ₹400</span>
                <Heart className="text-gray-400 hover:text-red-500 cursor-pointer" size={20} />
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Tutoring"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Tutoring</h3>
              <p className="text-gray-600 text-sm">One-on-one education</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-emerald-600 font-semibold">From ₹600</span>
                <Heart className="text-gray-400 hover:text-red-500 cursor-pointer" size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;