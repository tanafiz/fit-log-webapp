import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
    return (
        <Link
            href={`/workouts/${workout.id}`}
            className="group block">
            <article className="overflow-hidden rounded-lg border border-[#242830] bg-[#15181d]">
                <div className="relative h-48 w-full overflow-hidden sm:h-44 lg:h-40">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover" />
                </div>

                <div className="p-3.5">
                    <div className="mb-2 flex flex-wrap gap-1">
                        {workout.muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="mt-1 rounded-2xl bg-[#C2F800] px-2.5 py-0.5 text-[10px] font-bold uppercase text-black sm:text-[11px]"
                            >
                                {group}
                            </span>
                        ))}
                    </div>


                    <h3 className="font-[family-name:var(--font-oswald)] text-[17px] font-bold uppercase text-white sm:text-[18px]">
                        {workout.name}
                    </h3>


                    <p className="mt-1 truncate text-[11px] text-[#696a6a] sm:text-[12px]">
                        {workout.equipment}
                    </p>

                    <div className="mt-3.5 mb-3.5 border-t border-[#3e424e]"></div>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-[#9CA3AF] sm:text-[12px]">

                        <span className="flex items-center gap-1">
                            <Clock3 size={12} />
                            {workout.duration} min
                        </span>


                        <span className="flex items-center gap-1">
                            <Flame size={12} />
                            {workout.caloriesBurned} kcal
                        </span>


                        <span className="flex items-center gap-1">
                            <Star size={12} />
                            {workout.rating}
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}