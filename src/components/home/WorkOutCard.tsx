import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import { IWorkout } from "@/types/workout";

const WorkOutCard = ({ workOut }: { workOut: IWorkout }) => {
  return (
    <div> 
        <Link href={`/workouts/${workOut.id}`}>
    <div className="bg-surface border border-border rounded-xl overflow-hidden">
      <div className="relative w-full aspect-4/3">
        <Image
          src={workOut.image}
          alt={workOut.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex gap-2 mb-3">
          {workOut.muscleGroups.map((group) => (
            <span
              key={group}
              className="bg-accent text-on-accent text-xs font-oswald font-semibold px-3 py-1 rounded-full uppercase"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="font-oswald font-bold text-lg uppercase text-foreground">
          {workOut.name}
        </h3>
        <p className="text-muted text-sm mb-3">{workOut.equipment}</p>

        <div className="border-t border-border pt-3 flex items-center gap-4 text-sm text-muted-light">
          <span className="flex items-center gap-1">
            <Clock size={16} />
            {workOut.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={16} />
            {workOut.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={16} />
            {workOut.rating}
          </span>
        </div>
      </div>
    </div>
    </Link>
    </div>
  );
};

export default WorkOutCard;