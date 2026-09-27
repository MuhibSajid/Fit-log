"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, X, Check } from "lucide-react";
import { IWorkout } from "@/types/workout";
import { usePlan } from "@/context/PlanContext";
import { toast } from "react-toastify";

const PlanItemCard = ({ item }: { item: IWorkout }) => {
    const { removeFromPlan } = usePlan();

    return (
        <div className="bg-surface border border-border rounded-xl p-3 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="relative w-full h-40 sm:w-36 sm:h-20 rounded-lg overflow-hidden shrink-0">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex-1 min-w-0">
                <h4 className="font-oswald font-bold uppercase text-foreground text-base">
                    {item.name}
                </h4>
                <p className="text-muted text-sm">{item.equipment}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-light mt-1">
                    <span className="flex items-center gap-1">
                        <Clock size={14} className="text-accent" />
                        {item.duration} min
                    </span>
                    <span className="flex items-center gap-1">
                        <Flame size={14} className="text-accent" />
                        {item.caloriesBurned} kcal
                    </span>
                    <span className="flex items-center gap-1">
                        <Star size={14} className="text-accent fill-current" />
                        {item.rating}
                    </span>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:shrink-0">
                <Link
                    href={`/workouts/${item.id}`}
                    className="border border-border text-foreground text-sm font-oswald px-5 py-2.5 rounded-full text-center flex-1 sm:flex-none"
                >
                    View Details
                </Link>
                <button className="flex items-center justify-center gap-1.5 bg-accent text-on-accent text-sm font-oswald font-semibold px-5 py-2.5 rounded-full flex-1 sm:flex-none">
                    <Check size={14} />
                    Mark as Done
                </button>
                <button
                    onClick={() => {
                        removeFromPlan(item.id);
                        toast.success("Removed from plan");
                    }}
                    className="text-muted hover:text-foreground px-1"
                >
                    <X size={18} />
                </button>
            </div>
        </div>
    );
};

export default PlanItemCard;