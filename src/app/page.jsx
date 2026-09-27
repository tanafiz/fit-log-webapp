import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutLibrary from "./components/WorkoutLibrary";
import Footer from "./components/Footer";
import { getWorkouts } from "./lib/api";

export default async function Home() {
    const workouts = await getWorkouts();

    return (
        <main className="min-h-screen bg-[#0b0d0f]">

            <Navbar />

            <Hero />

            <WorkoutLibrary
                workouts={workouts}
            />

            <Footer />

        </main>
    );
}