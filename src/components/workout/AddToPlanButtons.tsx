"use client";

import { CalendarPlus } from "lucide-react";
import { IWorkout } from "@/types/workout";
import { usePlan } from "@/context/PlanContext";
import { toast } from "react-toastify";

const AddToPlanButtons = ({ workOut }: { workOut: IWorkout }) => {
    const { addToPlan, planItems } = usePlan();
    const isAlreadyInPlan = planItems.some((item) => item.id === workOut.id);

    return (
        <button
            onClick={() => {
                if (isAlreadyInPlan) {
                    toast.error(`${workOut.name} is already in your plan`);
                } else {
                    addToPlan(workOut);
                    toast.success(`${workOut.name} added to plan`);
                }
            }}
            className="flex items-center gap-2 bg-accent text-on-accent font-oswald font-semibold text-sm px-5 py-3 rounded-md"
        >
            <CalendarPlus size={16} />
            Add to today&apos;s plan
        </button>
    );
};

export default AddToPlanButtons;