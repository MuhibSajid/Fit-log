"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, X } from "lucide-react";
import { IWorkout } from "@/types/workout";
import { usePlan } from "@/context/PlanContext";
import { toast } from "react-toastify";

const SaveItemCard = ({ item }: { item: IWorkout }) => {
    const { removeFromSaved } = usePlan();

    return (
        <div className="bg-surface border border-border rounded-xl p-3 flex items-center gap-4">
            <div className="relative w-36 h-20 rounded-lg overflow-hidden shrink-0">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex-1">
                <h4 className="font-oswald font-bold uppercase text-foreground text-base">
                    {item.name}
                </h4>
                <p className="text-muted text-sm">{item.equipment}</p>
                <div className="flex items-center gap-4 text-sm text-muted-light mt-1">
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

            <div className="flex items-center gap-3">
                <Link
                    href={`/workouts/${item.id}`}
                    className="border border-border text-foreground text-sm font-oswald px-5 py-2.5 rounded-full"
                >
                    View Details
                </Link>
                <button
                    onClick={() => {
                        removeFromSaved(item.id);
                        toast.info(`${item.name} removed from Saved`);
                    }}
                    className="text-muted hover:text-foreground px-1"
                >
                    <X size={18} />
                </button>
            </div>
        </div>
    );
};

export default SaveItemCard;