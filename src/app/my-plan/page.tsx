"use client";
import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import Link from "next/link";
import PlanItemCard from "@/components/plan/PlanItemCard";
import SavedItemCard from "@/components/plan/SavetemCard ";

const MyPlanPage = () => {
    const { planItems, savedItems } = usePlan();
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
    const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");

    const currentItems = activeTab === "plan" ? planItems : savedItems;
    const hasItems = currentItems.length > 0;

    const exercises = currentItems.length;
    const minutes = currentItems.reduce<number>((sum, item) => sum + item.duration, 0);
    const calories = currentItems.reduce<number>((sum, item) => sum + item.caloriesBurned, 0);

    const sortedItems = [...currentItems].sort((a, b) => {
        if (sortBy === "duration") return a.duration - b.duration;
        if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned;
        if (sortBy === "rating") return a.rating - b.rating;
        return 0;
    });

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
                    <p className=" font-bold text-4xl text-accent">
                        {exercises}
                    </p>
                </div>
                <div className="px-8 py-6">
                    <p className="text-muted text-sm mb-1">Minutes</p>
                    <p className=" font-bold text-4xl text-foreground">
                        {minutes}
                    </p>
                </div>
                <div className="px-8 py-6">
                    <p className="text-muted text-sm mb-1">Calories</p>
                    <p className=" font-bold text-4xl text-foreground">
                        {calories}
                    </p>
                </div>
            </div>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
    <div className="flex bg-surface border border-border rounded-box p-1 gap-1 w-full sm:w-auto">
        <button
            onClick={() => setActiveTab("plan")}
            className={`flex-1 sm:flex-none px-5 py-2 rounded-box text-sm ${
                activeTab === "plan"
                    ? "bg-background text-accent"
                    : "text-muted"
            }`}
        >
            Today&apos;s Plan
        </button>
        <button
            onClick={() => setActiveTab("saved")}
            className={`flex-1 sm:flex-none px-5 py-2 rounded-box text-sm ${
                activeTab === "saved"
                    ? "bg-background text-accent"
                    : "text-muted"
            }`}
        >
            Saved
        </button>
    </div>

    <div className="flex items-center gap-2 text-sm">
        <span className="text-muted shrink-0">Sort By</span>
       <select
            value={sortBy}
            onChange={(e) =>
                setSortBy(e.target.value as "duration" | "calories" | "rating")
            }
            className="bg-background border border-border rounded-md px-3 py-2 text-foreground text-sm flex-1 sm:flex-none"
        >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
        </select>
    </div>
</div>

        
            <div className={hasItems ? "" : "border border-border rounded-xl min-h-95"}>
                {hasItems ? (
                   <div className="flex flex-col gap-4">
                {sortedItems.map((item) =>
                activeTab === "plan" ? (
                <PlanItemCard key={item.id} item={item} />
             ) : (
                <SavedItemCard key={item.id} item={item} />
                 )
                 )}
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