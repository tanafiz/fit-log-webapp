"use client";
import WorkoutCard from "./WorkoutCard";

export default function WorkoutLibrary({ workouts }) {
    return (
        <section
            id="library"
            className="mx-auto px-4 pb-8 sm:my-8 sm:px-6 lg:my-[30px] lg:px-10">
            <div className="mb-5">
                <h2 className="font-[family-name:var(--font-oswald)] text-[27px] font-bold uppercase text-white sm:text-[30px]">
                    The Library
                </h2>
                <p className="mt-1 text-[12px] text-[#9CA3AF] sm:text-[14px]">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                {workouts.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout} />
                ))}
            </div>
        </section>
    );
}