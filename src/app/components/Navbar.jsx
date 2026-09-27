"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitlog } from "../context/FitlogContext";

export default function Navbar() {
    const pathname = usePathname();
    const { plan, saved } = useFitlog();
    const workoutActive = pathname === "/";
    const planActive = pathname === "/my-plan";

    return (
        <nav className="sticky top-0 left-0 z-50 w-full border-b border-[#242830] bg-[#0b0d0f]">
            <div className="mx-auto flex min-h-[56px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-10">

                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2">
                    <img
                        src="/images/logo.png"
                        alt="FitLog Logo"
                        className="h-7 w-7 object-contain"
                    />
                    <p className="text-[14px] font-bold text-white sm:text-[15px]">
                        FITLOG
                    </p>
                </Link>


                <div className="flex items-center gap-1 sm:gap-2">
                    <Link
                        href="/"
                        className={`rounded-full px-2.5 py-1.5 text-[11px] sm:px-3 sm:text-[12px] ${workoutActive
                            ? "bg-[#1A2312] text-[#C2F800]"
                            : "text-[#9CA3AF]"
                            }`}>
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`rounded-full px-2.5 py-1.5 text-[11px] sm:px-3 sm:text-[12px] ${planActive
                            ? "bg-[#1A2312] text-[#C2F800]"
                            : "text-[#9CA3AF]"
                            }`}>
                        My Plan
                    </Link>

                </div>


                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-1 text-[10px] text-[#9CA3AF] sm:text-[12px]">
                        <span className="hidden sm:inline">
                            Plan
                        </span>
                        <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ccff00] px-1 text-[9px] font-bold text-black">
                            {plan.length}
                        </span>
                    </Link>


                    <Link
                        href="/my-plan"
                        className="flex items-center gap-1 text-[10px] text-[#9CA3AF] sm:text-[12px]">
                        <span className="hidden sm:inline">
                            Saved
                        </span>

                        <span className="flex h-4 min-w-4 items-center justify-center rounded-full border border-[#374151] px-1 text-[9px] text-[#9CA3AF]">
                            {saved.length}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
