export default function Footer() {
    return (
        <footer className="sticky bottom-0 left-0 z-50 w-full border-t border-[#242830] bg-[#0b0d0f]">
            <div className="mx-auto flex items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-10">

                <div className="flex shrink-0 items-center gap-2 text-[13px] font-black text-white sm:gap-3 sm:text-[14px]">
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="h-6 w-6 object-contain"
                    />
                    FITLOG
                </div>

                <p className="text-right text-[8px] leading-3 text-[#838996] sm:text-[11px] md:text-[12px]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
}