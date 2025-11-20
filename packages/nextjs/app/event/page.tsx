"use client";

import FABMenu from "../../components/ui/FABMenu";
import ProgressCard from "../../components/ui/ProgressCard";
import { Plus, Users } from "lucide-react";

export default function EventPage() {
  return (
    <div className="ml-5 mr-5 mt-5 min-h-screen bg-b1 flex flex-col pb-24">
      {/* TÍTULO DEL EVENTO */}
      <h1 className="text-2xl font-bold text-bc px-4 mb-3 text-center justify-center">Nombre de evento</h1>

      <div className="px-4 py-3 text-center">
        <div className="w-full flex flex-col items-center justify-center">
          {/* Label */}
          <div className="flex items-center gap-1 mb-1">
            <span className="text-xs tracking-widest font-medium text-bc/60 uppercase">Fondo común</span>
          </div>

          {/* Amount */}
          <span className="text-4xl font-extrabold text-accent">$ 12.450</span>
        </div>

        <div className="border-t border-base-300 mt-3 w-3/4 mx-auto"></div>
      </div>

      {/* CARD PROGRESO */}
      <ProgressCard />

      {/* CARD INTEGRANTES */}
      <div className="px-6 mt-6 mb-6">
        {" "}
        {/* solo padding lateral y margin */}
        <h2 className="text-lg font-semibold text-bc mb-3 flex items-center gap-2">
          <Users size={20} /> Integrantes
        </h2>
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4, 5].map(i => (
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
          {[
            {
              id: 1,
              title: "Carne para el asado",
              subtitle: "Gastón • 12 Feb · Fondo común",
              icon: "🥩",
              amount: 15000,
              justified: true,
              source: "Fondo",
            },
            {
              id: 2,
              title: "Bebidas",
              subtitle: "Martina • 12 Feb · Personal",
              icon: "🍺",
              amount: 5000,
              justified: false,
              source: "Personal",
            },
            {
              id: 3,
              title: "Parrilla y carbón",
              subtitle: "Facundo • 12 Feb · Fondo común",
              icon: "🔥",
              amount: 7000,
              justified: true,
              source: "Fondo",
            },
          ].map(event => (
            <div
              key={event.id}
              className="rounded-2xl bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.08)] p-4 flex flex-col gap-2 border border-base-200"
            >
              {/* Izquierda */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-base-200 flex items-center justify-center">{event.icon}</div>

                  <div className="flex flex-col leading-tight">
                    <span className="font-semibold text-base text-bc">{event.title}</span>
                    <span className="text-xs text-gray-500">{event.subtitle}</span>
                  </div>
                </div>

                {/* Derecha */}
                <span className="text-base font-bold text-p">$ {event.amount.toLocaleString()}</span>
              </div>

              {/* Justificación o botón */}
              {event.justified ? (
                <span className="text-xs text-green-600 font-medium">Gasto Aprobado ✅</span>
              ) : (
                <button className="text-xs text-white bg-blue-600 px-3 py-1 rounded-full self-start hover:bg-blue-700">
                  Aprobar gasto
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAB — AGREGAR GASTO */}
      <FABMenu />
    </div>
  );
}
