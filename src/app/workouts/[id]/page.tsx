import Image from "next/image";
import { IWorkout } from "@/types/workout";
import AddToPlanButtons from "../../../components/workout/AddToPlanButtons";
import SaveForLaterButtons from "../../../components/workout/SaveForLaterButton";

interface IWorkoutPageParams {
    params: Promise<{ id: string }>;

}

const getWorkOut    = async (): Promise<IWorkout[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const WorkoutDetails = async ({ params }: IWorkoutPageParams) => {
    const { id } = await params;
    const workOutData = await getWorkOut();
    const workOut = workOutData.find((item: IWorkout) => item.id === Number(id));

    if (!workOut) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-12">
                <p className="text-foreground">Workout not found.</p>
            </div>
        );
    }

   

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row gap-10">
                {/* Details Image */}
                <div className="relative w-full md:w-125 aspect-square rounded-2xl overflow-hidden border border-border shrink-0">
                    <Image
                      src={workOut.image}
                      alt={workOut.name}
                      fill
                      className="object-cover"
                    />
                </div>

                {/* Details Right Div */}
                <div className="flex-1 flex flex-col gap-4">
                    <p className="text-muted-light">
                        {workOut.description}
                    </p>

                    <div className="flex gap-2">
                        {workOut.muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="bg-accent text-on-accent text-xs font-oswald font-semibold px-3 py-1 rounded-full uppercase"
                            >
                                {group}
                            </span>
                        ))}
                    </div> 

                   {/* Details Tabel */}
                    <div className="rounded-xl border border-border overflow-hidden mt-2">
                        {[
                            { label: "Equipment", value: workOut.equipment },
                            { label: "Difficulty", value: workOut.difficulty },
                            { label: "Sets", value: workOut.sets },
                            { label: "Reps", value: workOut.reps },
                            { label: "Duration", value: `${workOut.duration} min` },
                            { label: "Calories", value: `${workOut.caloriesBurned} kcal` },
                            { label: "Rating", value: workOut.rating },
                        ].map((row) => (
                            <div
                                key={row.label}
                                className="flex items-center justify-between px-5 py-3 bg-background border-b border-border last:border-b-0"
                            >
                                <span className="text-muted text-xs font-oswald font-semibold uppercase tracking-wide">
                                    {row.label}
                                </span>
                                <span className="text-foreground text-sm">{row.value}</span>
                            </div>
                        ))}
                    </div>

                    <ol className="flex flex-col gap-3 mt-2">
                        {workOut.instructions.map((step, i) => (
                            <li key={i} className="flex gap-3 text-muted-light text-sm">
                                <span>{i + 1}.</span>
                                <span>{step}</span>
                            </li>
                        ))}
                    </ol>

    
                    <div className="flex gap-4 mt-4">
                        <AddToPlanButtons workOut={workOut} />
                        <SaveForLaterButtons workOut={workOut}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetails;