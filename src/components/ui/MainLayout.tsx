// components/ui/MainLayout.tsx
import React from "react";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

// components/ui/MainLayout.tsx
export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
            <header className="sticky top-0 z-40">
                <Navbar />
            </header>

            <main className="flex-grow pb-32 pt-4"> {/* ← espacio para la bottom nav */}
                {children}
            </main>

            <BottomNav />
        </div>
    );
}
