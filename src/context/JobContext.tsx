import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  rate: number;
  postedBy: {
    name: string;
    rating: number;
  };
  status: 'open' | 'in-progress' | 'completed';
  applications: string[];
}

interface JobContextType {
  jobs: Job[];
  addJob: (job: Omit<Job, 'id' | 'applications' | 'status'>) => void;
  applyForJob: (jobId: string, userId: string) => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export function JobProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: '1',
      title: 'Elderly Care Required',
      description: 'Looking for experienced caregiver for elderly person. Must be patient and compassionate.',
      location: 'Delhi',
      duration: '4 Hours',
      rate: 800,
      postedBy: {
        name: 'John D.',
        rating: 4.8,
      },
      status: 'open',
      applications: [],
    },
  ]);

  const addJob = (newJob: Omit<Job, 'id' | 'applications' | 'status'>) => {
    setJobs([
      ...jobs,
      {
        ...newJob,
        id: Math.random().toString(36).substr(2, 9),
        applications: [],
        status: 'open',
      },
    ]);
  };

  const applyForJob = (jobId: string, userId: string) => {
    setJobs(jobs.map(job => 
      job.id === jobId 
        ? { ...job, applications: [...job.applications, userId] }
        : job
    ));
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, applyForJob }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJobs() {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
}