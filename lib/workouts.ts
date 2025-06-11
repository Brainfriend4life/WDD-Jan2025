import { supabase } from '@/lib/supabase';
export async function fetchWorkouts(userId: string) {
  const { data, error } = await supabase
    .from("workouts")
    .select("*")
    .eq("user_id", userId)
    .order("date", { ascending: true });

  if (error) {
    console.error("Error fetching workouts:", error);
  return {} };
}

export async function updateWorkout(id: string, updates: any, userId: string) {
  const { data, error } = await supabase
    .from("workouts")
    .update(updates)
    .eq("id", id)
    .eq("user_id", userId)
    .select();

  if (error) {
    console.error("Error fetching workouts:", error);
  return  data};
}

export async function deleteWorkout(id: string, userId: string) {
  const { data, error } = await supabase
    .from("workouts")
    .delete()
    .eq("id", id)
    .eq("user_id", userId)
    .select();

  if (error) throw error;
  return { data };
}
