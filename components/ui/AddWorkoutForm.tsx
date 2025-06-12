'use client'
import React, { useState } from "react";

type WorkoutInput = {
  name: string;
  category: string;
  date: string;
};

export default function AddWorkoutForm({ onAdd }: { onAdd: (workout: WorkoutInput) => void }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newWorkout = { name, category, date };
    onAdd(newWorkout);

    setName("");
    setCategory("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Workout Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Workout</button>
    </form>
  );
}
