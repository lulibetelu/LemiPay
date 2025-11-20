import React from "react";
import {
    Home,
    Settings,
    CheckCircle2,
} from "lucide-react";

export default function FloatingBottomNav({
                                              currentStep,
                                              onGoto,
                                          }: {
    currentStep: number;
    onGoto: (step: number) => void;
}) {
    const items = [
        { label: "Datos", icon: <Home size={18} />, step: 0 },
        { label: "Config", icon: <Settings size={18} />, step: 1 },
        { label: "Revisar", icon: <CheckCircle2 size={18} />, step: 2 },
    ];

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex gap-6 bg-base-100 shadow-xl border border-base-300 px-6 py-3 rounded-2xl">
                {items.map((item) => (
                    <button
                        key={item.step}
                        onClick={() => onGoto(item.step)}
                        className={`flex flex-col items-center text-xs transition ${
                            currentStep === item.step
                                ? "text-primary"
                                : "text-neutral hover:text-primary"
                        }`}
                    >
                        {item.icon}
                        <span className="text-[11px]">{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
