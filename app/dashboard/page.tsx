'use client';

import AddWorkoutForm from '../../components/ui/AddWorkoutForm';
import React, { useState, useEffect } from 'react';
import { getUserId } from '../../lib/getUserId';
import { fetchWorkouts } from '../../lib/workouts';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '../../components/ui/card';

type Workout = {
  id: string;
  name: string;
  description?: string;
  date: string;
  category?: string;
  completed: boolean;
};

const categories = ['Upper Body', 'Lower Body', 'Full Body', 'Cardio'];

export default function Dashboard() {
  const [userId, setUserId] = useState<string | null>(null);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    const load = async () => {
      const id = await getUserId();
      if (!id) return;

      setUserId(id);

      const saved = localStorage.getItem('workouts');
      if (saved) {
        setWorkouts(JSON.parse(saved));
        return;
      }

      const data = await fetchWorkouts(id);
      if (Array.isArray(data)) {
        const mapped = data.map((w: any) => ({
          ...w,
          completed: false,
          description: w.description || '',
        }));
        setWorkouts(mapped);
      } else {
        setWorkouts([]);
      }
    };

    load();
  }, []);

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  const handleAddWorkout = (newWorkout: {
    name: string;
    description?: string;
    category?: string;
    date: string;
  }) => {
    setWorkouts((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        name: newWorkout.name,
        description: newWorkout.description || '',
        date: newWorkout.date,
        category: newWorkout.category,
        completed: false,
      },
    ]);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this workout?')) {
      setWorkouts((prev) => prev.filter((w) => w.id !== id));
    }
  };

  const handleEdit = (id: string) => {
    const workout = workouts.find((w) => w.id === id);
    if (!workout) return;

    const newName = prompt('Edit workout name:', workout.name);
    const newDescription = prompt('Edit workout description:', workout.description || '');
    const newDate = prompt('Edit workout date (YYYY-MM-DD):', workout.date);
    const newCategory = prompt('Edit workout category:', workout.category || '');

    if (newName && newDate) {
      setWorkouts((prev) =>
        prev.map((w) =>
          w.id === id
            ? {
                ...w,
                name: newName,
                description: newDescription || '',
                date: newDate,
                category: newCategory || undefined,
              }
            : w
        )
      );
    }
  };

  const toggleComplete = (id: string) => {
    setWorkouts((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, completed: !w.completed } : w
      )
    );
  };

  const filteredWorkouts =
    filter === 'All' ? workouts : workouts.filter((w) => w.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center text-4xl font-bold text-green-700 mb-6">
          Welcome to your Dashboard
        </h1>

        <AddWorkoutForm onAdd={handleAddWorkout} />

        <div className="my-6 text-center">
          <p className="text-sm text-gray-600 mb-2">User ID: {userId}</p>
          <label htmlFor="category-filter" className="mr-2 font-semibold text-gray-700">
            Filter by category:
          </label>
          <select
            id="category-filter"
            className="border border-gray-300 rounded px-3 py-1 shadow-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Workouts</h2>

        <div className="space-y-6">
          {filteredWorkouts.length === 0 && (
            <p className="text-center text-gray-500">No workouts found.</p>
          )}

          {filteredWorkouts.map((workout) => (
            <Card
              key={workout.id}
              className={`shadow-md transition-all duration-200 hover:shadow-xl rounded-lg border ${
                workout.completed ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <CardHeader>
                <CardTitle
                  className={`text-lg font-bold ${
                    workout.completed ? 'line-through text-gray-500' : 'text-gray-900'
                  }`}
                >
                  {workout.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {workout.category || 'No category'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p
                  className={`text-gray-700 ${
                    workout.completed ? 'line-through text-gray-400' : ''
                  }`}
                >
                  {workout.description || <em>No description</em>}
                </p>
                <p className="mt-2 text-sm text-gray-500">Date: {workout.date}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 mt-2">
                <button
                  onClick={() => toggleComplete(workout.id)}
                  className={`px-4 py-2 rounded text-white text-sm ${
                    workout.completed
                      ? 'bg-yellow-500 hover:bg-yellow-600'
                      : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  {workout.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button
                  onClick={() => handleEdit(workout.id)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(workout.id)}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded"
                >
                  Delete
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
