import React from "react";
import Link from "next/link";
import { Calendar, PlusCircle, User } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="dock text-primary">
      <Link href="/">
        <button>
          <span className="dock-label flex items-center justify-center flex-col">
            <Calendar size={24} />
            <span className="text-[11px] mt-1">Your Events</span>
          </span>
        </button>
      </Link>

      <Link href="/create-event" className="dock-active">
        <button>
          <span className="dock-label flex items-center justify-center flex-col">
            <PlusCircle size={24} />
            Create Event
          </span>
        </button>
      </Link>

      <Link href="/profile">
        <button>
          <span className="dock-label flex items-center justify-center flex-col">
            <User size={24} />
            Profile
          </span>
        </button>
      </Link>
    </div>
  );
}
