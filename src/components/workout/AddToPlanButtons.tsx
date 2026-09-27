"use client";

import { CalendarPlus } from "lucide-react";
import { IWorkout } from "@/types/workout";
import { usePlan } from "@/context/PlanContext";

const AddToPlanButtons = ({ workOut }: { workOut: IWorkout }) => {
    const { addToPlan } = usePlan();

    return (
        <button
            onClick={() => addToPlan(workOut)}
            className="flex items-center gap-2 bg-accent text-on-accent font-oswald font-semibold text-sm px-5 py-3 rounded-md"
        >
            <CalendarPlus size={16} />
            Add to today&apos;s plan
        </button>
    );
};

export default AddToPlanButtons;