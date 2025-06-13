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
  date: string;
  category?: string;
};

export default function Dashboard() {
  const [userId, setUserId] = useState<string | null>(null);
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const load = async () => {
      const id = await getUserId();
      if (!id) return;

      setUserId(id);

      const data = await fetchWorkouts(id);
      if (Array.isArray(data)) {
        setWorkouts(data);
      } else {
        setWorkouts([]);
      }
    };

    load();
  }, []);

  const handleAddWorkout = (newWorkout: { name: string; category?: string; date: string }) => {
    setWorkouts((prev) => [
      ...prev,
      {
        id: String(prev.length + 1), // fake id, replace with real id if available
        name: newWorkout.name,
        date: newWorkout.date,
        category: newWorkout.category,
      },
    ]);
  };

  const handleDelete = (id: string) => {
    setWorkouts((prev) => prev.filter((w) => w.id !== id));
  };

  const handleEdit = (id: string) => {
    // Simple example: prompt user for new name and date
    const workout = workouts.find((w) => w.id === id);
    if (!workout) return;

    const newName = prompt('Edit workout name:', workout.name);
    const newDate = prompt('Edit workout date (YYYY-MM-DD):', workout.date);
    const newCategory = prompt('Edit workout category:', workout.category || '');

    if (newName && newDate) {
      setWorkouts((prev) =>
        prev.map((w) =>
          w.id === id
            ? { ...w, name: newName, date: newDate, category: newCategory || undefined }
            : w
        )
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-green-600 text-center mt-10 mb-6 text-3xl font-bold">
        Welcome to your dashboard
      </h1>

      <AddWorkoutForm onAdd={handleAddWorkout} />

      <p className="my-4 text-center">User ID: {userId}</p>

      <h2 className="text-xl font-semibold mb-4">Your Workouts</h2>
      <div className="space-y-4">
        {workouts.map((workout) => (
          <Card key={workout.id}>
            <CardHeader>
              <CardTitle>{workout.name}</CardTitle>
              <CardDescription>{workout.category || 'No category'}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Date: {workout.date}</p>
            </CardContent>
            <CardFooter className="space-x-4">
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
        {workouts.length === 0 && <p className="text-center text-gray-500">No workouts found.</p>}
      </div>
    </div>
  );
}
