"use client";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

import { Clock3, Flame, Star, X } from "lucide-react";
import { useFitlog } from "../context/FitlogContext";

export default function PlanCard({ workout, saved = false }) {
    const { removeFromPlan, removeFromSaved } = useFitlog();

    function handleRemove() {
        if (saved) {
            removeFromSaved(workout.id);
            toast.success("Workout removed from saved");
        }
        else {
            removeFromPlan(workout.id);
            toast.success("Workout removed");
        }
    }


    return (
        <article className="flex flex-col gap-3 rounded-lg border border-[#242830] bg-[#15181d] p-2.5 sm:flex-row sm:items-center">
            <div className="relative h-40 w-full shrink-0 overflow-hidden rounded sm:h-14 sm:w-24">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                />

            </div>

            <div className="min-w-0 flex-1">
                <h3 className="font-[family-name:var(--font-oswald)] text-[16px] font-bold uppercase text-white">
                    {workout.name}
                </h3>
                <p className="mt-0.5 text-[12px] text-[#8A92A0]">
                    {workout.equipment}
                </p>

                <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-gray-500 sm:text-[12px]">
                    <span className="flex items-center gap-1">
                        <Clock3
                            size={9}
                            className="text-[#CCFF00]"
                        />
                        {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                        <Flame
                            size={9}
                            className="text-[#CCFF00]"
                        />
                        {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                        <Star
                            size={9}
                            className="text-[#CCFF00]"
                        />
                        {workout.rating}
                    </span>
                </div>
            </div>


            <div className="flex w-full shrink-0 items-center gap-2 sm:w-auto">
                <Link
                    href={`/workouts/${workout.id}`}
                    className="flex-1 rounded-2xl border border-[#374151] px-4 py-1.5 text-center text-[12px] text-white sm:flex-none">
                    View Details
                </Link>


                <button
                    onClick={handleRemove}
                    className="p-1.5 text-[#6B7280] hover:text-white"
                    aria-label="Remove workout">
                    <X size={15} />
                </button>
            </div>
        </article>
    );
}