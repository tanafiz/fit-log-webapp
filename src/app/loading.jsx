export default function Loading() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0b0d0f]">
            <div className="text-center">
                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-gray-700 border-t-[#ccff00]" />
                <p className="mt-3 text-[10px] text-gray-500">
                    Loading workouts…
                </p>

            </div>

        </main>
    );
}