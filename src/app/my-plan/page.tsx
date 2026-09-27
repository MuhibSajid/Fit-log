"use client";
import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import Link from "next/link";
import PlanItemCard from "@/components/plan/PlanItemCard";

const MyPlanPage = () => {
    const { planItems, savedItems } = usePlan();
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    const currentItems = activeTab === "plan" ? planItems : savedItems;
    const hasItems = currentItems.length > 0;

    const exercises = currentItems.length;
    const minutes = currentItems.reduce<number>((sum, item) => sum + item.duration, 0);
    const calories = currentItems.reduce<number>((sum, item) => sum + item.caloriesBurned, 0);

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="font-oswald font-bold text-4xl uppercase text-foreground mb-2">
                My Plan
            </h1>
            <p className="text-muted-light mb-8">
                Cap of five lifts for today. Finish them, then load more.
            </p>

            <div className="bg-surface border border-border rounded-xl grid grid-cols-3 divide-x divide-border mb-8">
                <div className="px-8 py-6">
                    <p className="text-muted text-sm mb-1">Exercises</p>
                    <p className="font-oswald font-bold text-4xl text-accent">
                        {exercises}
                    </p>
                </div>
                <div className="px-8 py-6">
                    <p className="text-muted text-sm mb-1">Minutes</p>
                    <p className="font-oswald font-bold text-4xl text-foreground">
                        {minutes}
                    </p>
                </div>
                <div className="px-8 py-6">
                    <p className="text-muted text-sm mb-1">Calories</p>
                    <p className="font-oswald font-bold text-4xl text-foreground">
                        {calories}
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between mb-4">
                <div className="flex bg-surface border border-border rounded-box p-1 gap-1">
                    <button
                        onClick={() => setActiveTab("plan")}
                        className={`px-5 py-2 rounded-box text-sm ${
                            activeTab === "plan"
                                ? "bg-background text-foreground"
                                : "text-muted"
                        }`}
                    >
                        Today&apos;s Plan
                    </button>
                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`px-5 py-2 rounded-box text-sm ${
                            activeTab === "saved"
                                ? "bg-background text-foreground"
                                : "text-muted"
                        }`}
                    >
                        Saved
                    </button>
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted">Sort By</span>
                    <select className="bg-background border border-border rounded-md px-3 py-2 text-foreground text-sm">
                        <option>Duration</option>
                        <option>Calories</option>
                        <option>Rating</option>
                    </select>
                </div>
            </div>

            {/* কনটেন্ট এরিয়া */}
            <div className={hasItems ? "" : "border border-border rounded-xl min-h-95"}>
                {hasItems ? (
                    <div className="flex flex-col gap-4">
                        {currentItems.map((item) => (
                            <PlanItemCard key={item.id} item={item} />
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center min-h-95">
                        <div className="text-center py-16">
                            <h3 className="font-bold font-oswald text-xl uppercase text-foreground mb-2">
                                Nothing here yet
                            </h3>
                            <p className="text-muted text-sm mb-6">
                                Browse the library and add a lift to get today moving.
                            </p>
                            <Link
                                href="/"
                                className="bg-accent text-on-accent font-semibold text-sm px-6 py-3 rounded-full"
                            >
                                Go to workouts
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyPlanPage;