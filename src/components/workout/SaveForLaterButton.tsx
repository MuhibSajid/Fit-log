"use client";

import { Bookmark } from "lucide-react";
import { IWorkout } from "@/types/workout";
import { usePlan } from "@/context/PlanContext";
import { toast } from "react-toastify";

const SaveForLaterButton = ({ workOut }: { workOut: IWorkout }) => {
    const { addToSaved, savedItems } = usePlan();
    const isAlreadyInPlan = savedItems.some((item) => item.id === workOut.id);


    return (
        <button
            onClick={() => {
                    if (isAlreadyInPlan) {
                         toast.error(`${workOut.name} is already Saved`);
                     } else {
                         addToSaved(workOut);
                       toast.success(`${workOut.name} Saved`);
                                    }

                     }

            }
            className="flex items-center gap-2 border border-border text-foreground font-oswald text-sm px-5 py-3 rounded-md"
        >
            <Bookmark size={16} />
            Save for later
        </button>
    );
};

export default SaveForLaterButton;