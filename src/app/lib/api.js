const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch workouts");
    }

    return response.json();
}

export async function getWorkout(id) {
    const workouts = await getWorkouts();
    return workouts.find(
        (workout) => String(workout.id) === String(id)
    ) || null;
}