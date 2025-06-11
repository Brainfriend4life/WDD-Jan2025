import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
type Workout = {
  id?: string;
  title: string;
  sets: number;
  reps: number;
  category: string;
};

export async function addWorkout(userId: string, workout: Workout) {
  return await supabase
    .from('workouts')
    .insert([{ ...workout, user_id: userId }]);
}

export async function deleteWorkout(id: string, userId: string) {
  return await supabase
    .from('workouts')
    .delete()
    .match({ id, user_id: userId });
}

export async function updateWorkout(id: string, updates: Partial<Workout>, userId: string) {
  return await supabase
    .from('workouts')
    .update(updates)
    .match({ id, user_id: userId });
}

export async function fetchWorkouts(userId: string) {
  return await supabase
    .from('workouts')
    .select('*')
    .eq('user_id', userId);
}
