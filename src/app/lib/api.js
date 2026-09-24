export async function getWorkout() {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    if (!res.ok) {
        throw new Error("Failed to fetch workout");
    }
    return res.json();
}

export async function getWorkouts(id) {
    const res = await fetch(`"https://api.abcz.workers.dev/api/fitlog/"${id}`);
    if (!res.ok)
        return null;
}
return res.json();

