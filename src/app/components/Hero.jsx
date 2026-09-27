"use client";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="mx-auto mt-5 px-4 sm:mt-6 sm:px-6 lg:mt-8 lg:px-10">

            <div className="relative min-h-[460px] overflow-hidden rounded-lg border border-[#242830] bg-[#15181d] sm:min-h-[430px] lg:min-h-[460px]">

                <div className="relative z-10 max-w-xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-14">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#C2F800] sm:text-[11px]">
                        Workout Library
                    </p>
                    <h1 className="mt-3 font-[family-name:var(--font-oswald)] text-[42px] font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-[52px] lg:text-[60px]">
                        Train With Intent.
                        <br />
                        Log Every Set.
                    </h1>

                    <p className="mt-5 max-w-md text-[13px] leading-5 text-[#9CA3AF] sm:text-[14px]">
                        FitLog is a dark, no-nonsense gym companion:
                        pick a lift, lock it into todays plan, and watch
                        the weeks work add up.
                    </p>

                    <Link
                        href="#library"
                        className="mt-6 inline-flex items-center gap-1.5 rounded bg-[#C2F800] px-4 py-2.5 text-[11px] font-bold uppercase text-black sm:text-[12px]">
                        Browse Workouts
                    </Link>

                </div>


                <div className="absolute bottom-0 right-0 hidden h-[360px] w-[360px] sm:block lg:h-[420px] lg:w-[420px]">
                    <img
                        src="/images/banner.png"
                        alt="Workout"
                        className="h-full w-full object-contain object-bottom"/>
                </div>
            </div>
        </section>
    );
}