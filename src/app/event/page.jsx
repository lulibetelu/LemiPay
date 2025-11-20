"use client";

import { useState } from "react";
import { ArrowLeft, Users, Plus, DollarSign } from "lucide-react";

export default function EventPage() {
    const [isPersonal, setIsPersonal] = useState(false);
    const progress = 320 / 500; // ejemplo temporal
    const barWidth = `${Math.min(progress * 100, 100)}%`;

    return (
        <div className="ml-15 mr-15 mt-5 min-h-screen bg-b1 flex flex-col pb-24">

            {/* TÍTULO DEL EVENTO */}
            <h1 className="text-2xl font-bold text-bc px-4 mb-3">
                Nombre de evento
            </h1>

            <div className="px-4 py-3 text-center">
                <div className="w-full flex flex-col items-center justify-center">

                    {/* Label */}
                    <div className="flex items-center gap-1 mb-1">
                        <span className="text-xs tracking-widest font-medium text-bc/60 uppercase">
                             Fondo común
                        </span>
                    </div>

                    {/* Amount */}
                    <span
                        className="text-4xl font-extrabold text-accent"
                    >
                        $ 12.450
                    </span>
                </div>

                <div className="border-t border-base-300 mt-3 w-3/4 mx-auto"></div>
            </div>




            {/* CARD PROGRESO */}
            <div className="bg-b2 rounded-2xl shadow-md border border-base-300 p-5 mx-4 mb-4">
                {/* Toggle */}
                <div className="flex items-center gap-3 mb-3">
                    <input
                        type="checkbox"
                        className="toggle toggle-accent"
                        checked={isPersonal}
                        onChange={() => setIsPersonal(!isPersonal)}
                    />
                    <span className="text-bc font-medium text-sm">
                        {isPersonal ? "Gastos por persona" : "Gastos totales"}
                    </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-4 bg-base-200 rounded-xl overflow-hidden border border-base-300 shadow-inner mb-2">
                    <div
                        className="h-full bg-p transition-all duration-500"
                        style={{ width: barWidth }}
                    />
                </div>
            </div>

            {/* CARD INTEGRANTES */}
            <div className="px-6 mt-6 mb-6"> {/* solo padding lateral y margin */}
                <h2 className="text-lg font-semibold text-bc mb-3 flex items-center gap-2">
                    <Users size={20} /> Integrantes
                </h2>

                <div className="flex justify-between items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className="w-10 h-10 rounded-full bg-base-200 border border-base-300 shadow-sm flex items-center justify-center"
                        >
                            <Users size={18} className="opacity-40" />
                        </div>
                    ))}

                    <button className="w-10 h-10 rounded-full bg-p text-pc flex items-center justify-center shadow-md hover:scale-105 transition">
                        <Plus size={22} />
                    </button>
                </div>
            </div>


            {/* Historial de gastos */}
            <div className="px-4 mt-6">
                <h2 className="text-lg font-semibold text-bc mb-3">Historial de gastos</h2>

                <div className="flex flex-col gap-3">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="rounded-2xl bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.08)] p-4 flex items-center justify-between border border-base-200"
                        >
                            {/* Izquierda */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-base-200 flex items-center justify-center">
                                    🍕
                                </div>

                                <div className="flex flex-col leading-tight">
                                    <span className="font-semibold text-base text-bc">Pizza</span>
                                    <span className="text-xs text-gray-500">Facundo • 12 Feb · Fondo común</span>
                                </div>
                            </div>

                            {/* Derecha */}
                            <span className="text-base font-bold text-p">
          $ 2.500
        </span>
                        </div>
                    ))}
                </div>
            </div>


            {/* FAB — AGREGAR GASTO */}
            <div className="fixed bottom-24 right-6">
                <button className="w-16 h-16 rounded-full bg-p text-pc shadow-xl flex items-center justify-center hover:scale-110 transition">
                    <Plus size={32} />
                </button>
            </div>
        </div>
    );
}
