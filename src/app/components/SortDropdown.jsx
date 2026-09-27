"use client";
import { ChevronDown } from "lucide-react";

export default function SortDropdown({ value, onChange }) {
    return (
        <div className="relative flex items-center">
            <span className="mr-2 text-[11px] text-[#8A92A0] sm:text-[12px]">
                Sort By
            </span>

            <div className="relative">
                <select
                    value={value}
                    onChange={(event) =>
                        onChange(event.target.value)
                    }
                    className="appearance-none rounded border border-[#242830] bg-[#15181d] py-1.5 pl-2 pr-7 text-[11px] text-white outline-none sm:text-[12px]">
                    <option value="calories">
                        Calories
                    </option>

                    <option value="duration">
                        Duration
                    </option>

                    <option value="rating">
                        Rating
                    </option>
                </select>

                <ChevronDown
                    size={10}
                    className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                />
            </div>
        </div>
    );
}
