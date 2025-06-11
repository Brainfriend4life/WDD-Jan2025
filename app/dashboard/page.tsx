import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { getUserId } from "@/lib/getUserId";
import { fetchWorkouts, updateWorkout, deleteWorkout } from "@/lib/workouts";
import { useEffect, useState } from "react";
export default function Dashboard() {
  const [userId, setUserId] = useState<string | null>(null);
  const [workouts,] = useState([]);
  const [filter,] = useState("All");

  useEffect(() => {
    const load = async () => {
      const id = await getUserId();
      if (!id) return;
      setUserId(id);

      const data  = await fetchWorkouts(id);
      fetchWorkouts(id);
    };
    load();
  }, []);
  return (
    <div>
      {/* render your dashboard here */}
    </div>
  );
}