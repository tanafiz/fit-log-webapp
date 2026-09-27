"use client";
import { createContext, useContext, useEffect, useState } from "react";

const FitlogContext = createContext();
export function FitlogProvider({ children }) {
    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const storedPlan = localStorage.getItem("fitlog-plan");
        const storedSaved = localStorage.getItem("fitlog-saved");

        if (storedPlan) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setPlan(JSON.parse(storedPlan));
        }

        if (storedSaved) {
            setSaved(JSON.parse(storedSaved));
        }
        setLoaded(true);
    }, []);


    useEffect(() => {
        if (loaded) {
            localStorage.setItem("fitlog-plan", JSON.stringify(plan));
        }
    }, [plan, loaded]);


    useEffect(() => {
        if (loaded) {
            localStorage.setItem("fitlog-saved", JSON.stringify(saved));
        }
    }, [saved, loaded]);

    function addToPlan(workout) {
        if (plan.length >= 5) {
            return {
                success: false,
                message: "Your plan can contain maximum 5 workouts.",
            };
        }

        if (plan.some((item) => item.id === workout.id)) {
            return {
                success: false,
                message: `${workout.name} is already in your plan.`,
            };
        }

        setPlan((currentPlan) => [
            ...currentPlan,
            {
                ...workout,
                done: false,
            },
        ]);

        return {
            success: true,
            message: `${workout.name} added to your plan.`,
        };
    }

    function saveWorkout(workout) {
        if (saved.some((item) => item.id === workout.id)) {
            return {
                success: false,
                message: `${workout.name} is already saved.`,
            };
        }
        setSaved((currentSaved) => [...currentSaved, workout]);
        return {
            success: true,
            message: `${workout.name} saved for later.`,
        };
    }

    function removeFromPlan(id) {
        setPlan((currentPlan) =>
            currentPlan.filter((item) => item.id !== id)
        );
    }

    function removeFromSaved(id) {
        setSaved((currentSaved) =>
            currentSaved.filter((item) => item.id !== id)
        );
    }

    function markAsDone(id) {
        setPlan((currentPlan) =>
            currentPlan.map((item) =>
                item.id === id
                    ? { ...item, done: true }
                    : item
            )
        );
    }

    return (
        <FitlogContext.Provider
            value={{
                plan,
                saved,
                loaded,
                addToPlan,
                saveWorkout,
                removeFromPlan,
                removeFromSaved,
                markAsDone,
            }}
        >
            {children}
        </FitlogContext.Provider>
    );
}

export function useFitlog() {
    return useContext(FitlogContext);
}