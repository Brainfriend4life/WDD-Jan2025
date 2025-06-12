'use client';
import { useEffect, useState } from "react";
import { getUserId } from "@/lib/getUserId";
import { fetchWorkouts } from "@/lib/workouts";

type Workout = {
  id: string;
  name: string;
  date: string;
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
        setWorkouts([]); // fallback if data isn't an array
      }
    };

    load();
  }, []);

  return (
    <div>
      <h1>Welcome to your dashboard</h1>
      <p>User ID: {userId}</p>

      <h2>Your Workouts</h2>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            {workout.name} - {workout.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
