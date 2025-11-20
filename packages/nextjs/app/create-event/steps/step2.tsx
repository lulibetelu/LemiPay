"use client";

import React from "react";
import { DollarSign, Users } from "lucide-react";

export default function Step2({ data, setData, onNext, onPrev }: any) {
  return (
    <div className="card bg-base-200 shadow-xl rounded-2xl p-6 border border-base-300 transition hover:shadow-2xl">
      <h2 className="text-lg font-semibold text-base-content flex items-center gap-2">⚙️ Configuración del evento</h2>
      <p className="text-xs text-neutral mt-1">Ajusta cómo se manejará el presupuesto.</p>

      <div className="mt-5 space-y-5">
        {/* Presupuesto */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium flex items-center gap-2 text-base-content">
            <DollarSign size={16} />
            Presupuesto estimado
          </label>
          <input
            type="number"
            className="input input-bordered w-full pl-4 rounded-xl focus:input-primary"
            placeholder="Ej: 40000"
            value={data.budget}
            onChange={e => setData({ ...data, budget: e.target.value })}
          />
        </div>

        {/* Fondo común toggle */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between bg-base-100 border border-base-300 rounded-xl p-3">
            <span className="flex items-center gap-2 text-sm">
              <Users size={16} />
              {data.fundEnabled ? "Presupuesto total del grupo" : "Presupuesto por persona"}
            </span>

            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={data.fundEnabled}
              onChange={e => setData({ ...data, fundEnabled: e.target.checked })}
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button className="btn btn-ghost rounded-2xl border border-base-300 hover:bg-base-300" onClick={onPrev}>
          ← Anterior
        </button>

        <button className="btn btn-primary rounded-2xl disabled:opacity-50 shadow-md" onClick={onNext}>
          Siguiente →
        </button>
      </div>
    </div>
  );
}
