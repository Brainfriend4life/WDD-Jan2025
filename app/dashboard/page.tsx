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

      // Try load from localStorage first
      const saved = localStorage.getItem('workouts');
      if (saved) {
        setWorkouts(JSON.parse(saved));
        return;
      }

      // Otherwise fetch from your API
      const data = await fetchWorkouts(id);
      if (Array.isArray(data)) {
        // map your fetched workouts to include completed and description fields
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

  // Save workouts to localStorage on changes
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

  // Filter workouts by category
  const filteredWorkouts =
    filter === 'All'
      ? workouts
      : workouts.filter((w) => w.category === filter);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-green-600 text-center mt-10 mb-6 text-3xl font-bold">
        Welcome to your dashboard
      </h1>

      <AddWorkoutForm onAdd={handleAddWorkout}  />

      <div className="my-4 text-center">
        <p>User ID: {userId}</p>

        <label htmlFor="category-filter" className="mr-2 font-semibold">
          Filter by category:
        </label>
        <select
          id="category-filter"
          className="border rounded px-3 py-1"
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

      <h2 className="text-xl font-semibold mb-4">Your Workouts</h2>
      <div className="space-y-4">
        {filteredWorkouts.length === 0 && (
          <p className="text-center text-gray-500">No workouts found.</p>
        )}

        {filteredWorkouts.map((workout) => (
          <Card
            key={workout.id}
            className={`border ${
              workout.completed ? 'bg-green-100' : 'bg-white'
            }`}
          >
            <CardHeader>
              <CardTitle
                className={workout.completed ? 'line-through text-gray-600' : ''}
              >
                {workout.name}
              </CardTitle>
              <CardDescription>{workout.category || 'No category'}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className={workout.completed ? 'line-through text-gray-500' : ''}>
                {workout.description || <em>No description</em>}
              </p>
              <p className="mt-2">Date: {workout.date}</p>
            </CardContent>
            <CardFooter className="space-x-4">
              <button
                onClick={() => toggleComplete(workout.id)}
                className={`px-3 py-1 rounded text-white ${
                  workout.completed
                    ? 'bg-yellow-500 hover:bg-yellow-600'
                    : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {workout.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
              <button
                onClick={() => handleEdit(workout.id)}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(workout.id)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
