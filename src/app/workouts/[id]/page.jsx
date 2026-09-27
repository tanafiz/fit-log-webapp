import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WorkoutActions from "../../components/WorkoutActions";
import { getWorkout } from "../../lib/api";
import { notFound } from "next/navigation";

export default async function WorkoutDetails({ params }) {
    const { id } = await params;
    const workout = await getWorkout(id);

    if (!workout) {
        notFound();
    }


    return (
        <main className="min-h-screen bg-[#0b0d0f]">
            <Navbar />

            <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:py-10 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-2">

                    <div className="relative h-[300px] overflow-hidden rounded-lg border border-[#242830] bg-[#15181d] sm:h-[400px] lg:h-[500px]">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover" />
                    </div>

                    <div>
                        <h1 className="font-[family-name:var(--font-oswald)] text-[36px] font-bold uppercase leading-none text-white sm:text-4xl">
                            {workout.name}
                        </h1>


                        <p className="mt-3 text-[14px] leading-5 text-[#9CA3AF] sm:text-[16px]">
                            {workout.description}
                        </p>


                        <div className="mt-4 flex flex-wrap gap-1">
                            {workout.muscleGroups.map(
                                (group) => (
                                    <span
                                        key={group}
                                        className="rounded-2xl bg-[#CCFF00] px-3 py-1 text-[11px] font-black uppercase text-black sm:text-[12px]">
                                        {group}
                                    </span>
                                )
                            )}

                        </div>


                        <div className="mt-5 overflow-hidden rounded-lg border border-[#242830] bg-[#15181d]">
                            <Spec
                                label="EQUIPMENT"
                                value={workout.equipment}
                            />

                            <Spec
                                label="DIFFICULTY"
                                value={workout.difficulty}
                            />

                            <Spec
                                label="SETS"
                                value={workout.sets}
                            />

                            <Spec
                                label="REPS"
                                value={workout.reps}
                            />

                            <Spec
                                label="DURATION"
                                value={`${workout.duration} min`}
                            />

                            <Spec
                                label="CALORIES"
                                value={`${workout.caloriesBurned} kcal`}
                            />

                            <Spec
                                label="RATING"
                                value={workout.rating}
                            />

                        </div>


                        <section className="mt-6">
                            <h2 className="mt-8 text-[16px] font-bold uppercase text-white">
                                Instructions
                            </h2>

                            <ol className="mt-3 space-y-2">
                                {workout.instructions.map(
                                    (instruction, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-2 text-[12px] leading-4 text-[#D1D5DB]">

                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-[9px] font-black text-black">
                                                {index + 1}
                                            </span>
                                            <span>
                                                {instruction}
                                            </span>
                                        </li>
                                    )
                                )}

                            </ol>
                        </section>


                        <WorkoutActions
                            workout={workout}
                        />

                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}


function Spec({ label, value }) {
    return (
        <div className="flex items-center justify-between gap-4 border-b border-[#242830] px-4 py-2.5 last:border-b-0">
            <span className="text-[11px] font-bold text-[#9CA3AF] sm:text-[12px]">
                {label}
            </span>

            <span className="text-right text-[12px] text-[#E5E7EB] sm:text-[14px]">
                {value}
            </span>
        </div>
    );
}