// components/ui/BottomNav.tsx
import React from "react";
import Link from "next/link";
import { Calendar, PlusCircle, User } from "lucide-react";


export default function BottomNav() {
    return (
        <div className="
            fixed bottom-4 left-1/2 -translate-x-1/2
            bg-white/80 backdrop-blur-xl
            shadow-xl border border-gray-200
            rounded-2xl px-6 py-2
            flex justify-between gap-8
            max-w-xs w-full
            z-50
        ">
            <button className="flex flex-col items-center text-neutral hover:text-primary transition">
                <Calendar size={24} />
                <span className="text-[11px] mt-1">Your Events</span>
            </button>

            <Link href="/create-event" className="flex flex-col items-center hover:text-primary transition">
                <PlusCircle size={22} />
                <span className="text-[11px]">Create Event</span>
            </Link>

            <button className="flex flex-col items-center text-neutral hover:text-primary transition">
                <User size={24} />
                <span className="text-[11px] mt-1">Profile</span>
            </button>
        </div>
    );
}
