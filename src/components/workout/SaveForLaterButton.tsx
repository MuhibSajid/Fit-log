"use client";

import { Bookmark } from "lucide-react";
import { IWorkout } from "@/types/workout";
import { usePlan } from "@/context/PlanContext";

const SaveForLaterButton = ({ workOut }: { workOut: IWorkout }) => {
    const { addToSaved } = usePlan();

    return (
        <button
            onClick={() => addToSaved(workOut)}
            className="flex items-center gap-2 border border-border text-foreground font-oswald text-sm px-5 py-3 rounded-md"
        >
            <Bookmark size={16} />
            Save for later
        </button>
    );
};

export default SaveForLaterButton;