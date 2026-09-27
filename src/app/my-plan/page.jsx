"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlanCard from "../components/PlanCard";
import SortDropdown from "../components/SortDropdown";

import { useFitlog } from "../context/FitlogContext";

export default function MyPlanPage() {
    const {
        plan,
        saved,
    } = useFitlog();


    const [activeTab, setActiveTab] = useState("plan");
    const [sortBy, setSortBy] = useState("duration");


    const currentList =
        activeTab === "plan"
            ? plan
            : saved;


    const sortedList = useMemo(() => {

        return [...currentList].sort((a, b) => {

            if (sortBy === "duration") {
                return a.duration - b.duration;
            }

            if (sortBy === "calories") {
                return (
                    a.caloriesBurned -
                    b.caloriesBurned
                );
            }

            if (sortBy === "rating") {
                return b.rating - a.rating;
            }

            return 0;
        });

    }, [currentList, sortBy]);


    const totalMinutes = plan.reduce(
        (total, workout) =>
            total + workout.duration,
        0
    );


    const totalCalories = plan.reduce(
        (total, workout) =>
            total + workout.caloriesBurned,
        0
    );


    return (
        <main className="min-h-screen bg-[#0b0d0f]">

            <Navbar />


            <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 md:py-10 lg:px-8">

                {/* Heading */}
                <div>

                    <h1 className="font-[family-name:var(--font-oswald)] text-[30px] font-bold uppercase leading-none text-white sm:text-4xl">
                        My Plan
                    </h1>

                    <p className="mt-2 text-[12px] text-[#8A92A0] sm:text-[14px]">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>

                </div>


                {/* Metrics */}
                <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-lg border border-[#242830] bg-[#15181d]">

                    <Metric
                        label="Exercises"
                        value={plan.length}
                        color={
                            plan.length > 0
                                ? "text-[#ccff00]"
                                : "text-white"
                        }
                    />

                    <Metric
                        label="Minutes"
                        value={totalMinutes}
                        color="text-white"
                    />

                    <Metric
                        label="Calories"
                        value={totalCalories}
                        color="text-white"
                    />

                </div>


                {/* Tabs and Sort */}
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex w-fit overflow-hidden rounded border border-[#242830] bg-[#15181d]">

                        <button
                            onClick={() =>
                                setActiveTab("plan")
                            }
                            className={`px-3 py-1.5 text-[11px] sm:text-[12px] ${
                                activeTab === "plan"
                                    ? "bg-[#ccff00] font-bold text-black"
                                    : "text-[#8A92A0]"
                            }`}
                        >
                            Todays Plan
                        </button>


                        <button
                            onClick={() =>
                                setActiveTab("saved")
                            }
                            className={`px-3 py-1.5 text-[11px] sm:text-[12px] ${
                                activeTab === "saved"
                                    ? "bg-[#ccff00] font-bold text-black"
                                    : "text-[#8A92A0]"
                            }`}
                        >
                            Saved
                        </button>

                    </div>


                    <div className="self-start sm:self-auto">
                        <SortDropdown
                            value={sortBy}
                            onChange={setSortBy}
                        />
                    </div>

                </div>


                {/* Workout List */}
                <div className="mt-4 space-y-2">

                    {sortedList.length === 0 ? (

                        <EmptyState
                            saved={
                                activeTab === "saved"
                            }
                        />

                    ) : (

                        sortedList.map((workout) => (
                            <PlanCard
                                key={workout.id}
                                workout={workout}
                                saved={
                                    activeTab === "saved"
                                }
                            />
                        ))

                    )}

                </div>

            </section>


            <Footer />

        </main>
    );
}


/* Metric */
function Metric({
    label,
    value,
    color,
}) {
    return (
        <div className="border-r border-[#242830] px-3 py-3 last:border-r-0 sm:px-6 sm:py-4">

            <p className="text-[10px] text-[#8A92A0] sm:text-[12px]">
                {label}
            </p>

            <p
                className={`mt-1 font-[family-name:var(--font-oswald)] text-[28px] font-bold sm:text-[36px] ${color}`}
            >
                {value}
            </p>

        </div>
    );
}


/* Empty State */
function EmptyState({ saved }) {
    return (
        <div className="flex min-h-[260px] flex-col items-center justify-center rounded-lg border border-[#242830] bg-[#0e1013] px-4 text-center">

            <h2 className="font-[family-name:var(--font-oswald)] text-[20px] font-bold uppercase text-white">
                Nothing Here Yet
            </h2>


            <p className="mt-2 max-w-xs text-[12px] leading-4 text-[#A1A1AA]">
                {saved
                    ? "Save a workout from the library and keep it here for later."
                    : "Browse the library and add a lift to get today moving."
                }
            </p>


            <Link
                href="/"
                className="mt-4 rounded-4xl bg-[#C2F10D] px-4 py-2 text-[12px] font-bold text-black"
            >
                Go to workouts
            </Link>

        </div>
    );
}