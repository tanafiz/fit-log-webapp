import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0b0d0f] px-4">

            <div className="text-center">

                <Dumbbell
                    size={30}
                    className="mx-auto text-[#ccff00]"
                />

                <h1 className="mt-4 font-[family-name:var(--font-oswald)] text-6xl font-bold text-white">
                    404
                </h1>

                <h2 className="mt-2 text-lg font-bold text-white">
                    Workout Not Found
                </h2>

                <p className="mt-2 text-xs text-gray-500">
                    The page you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="mt-6 inline-block rounded bg-[#ccff00] px-5 py-2.5 text-xs font-bold text-black"
                >
                    Back to Home
                </Link>

            </div>

        </main>
    );
}