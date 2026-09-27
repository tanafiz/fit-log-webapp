"use client";
import toast from "react-hot-toast";
import { Bookmark, Plus } from "lucide-react";
import { useFitlog } from "../context/FitlogContext";

export default function WorkoutActions({ workout }) {
    const { plan, addToPlan, saveWorkout } = useFitlog();
    const alreadyInPlan = plan.some(
        (item) => item.id === workout.id
    );
    const planFull = plan.length >= 5;

    function handleAddToPlan() {
        const result = addToPlan(workout);
        if (result.success) {
            toast.success(result.message);
        }
        else {
            toast.error(result.message);
        }
    }

    function handleSave() {
        const result = saveWorkout(workout);
        if (result.success) {
            toast.success(result.message);
        }
        else {
            toast.error(result.message);
        }
    }


    return (
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <button
                onClick={handleAddToPlan}
                disabled={
                    alreadyInPlan || planFull
                }
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#ccff00] px-5 py-2.5 text-[13px] font-bold text-black sm:w-auto sm:text-[14px]">
                <Plus size={12} />

                {alreadyInPlan ? "Already in plan" : planFull ? "Plan is full" : "Add to today's plan"}
            </button>


            <button
                onClick={handleSave}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-[#242830] bg-[#15181d] px-5 py-2.5 text-[13px] font-bold text-white sm:w-auto sm:text-[14px]">
                <Bookmark size={12} />
                Save for later
            </button>
        </div>
    );
}