// components/ui/Navbar.tsx
import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
            <div className="flex justify-between items-center px-4 py-3 max-w-5xl mx-auto">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-primary">
                    🍋 LemiPay
                </Link>

                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-primary text-primary-content flex items-center justify-center shadow-md">
                    U
                </div>
            </div>
        </div>
    );
}
