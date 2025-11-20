"use client";

import { Calendar, Type, FileText } from "lucide-react";
import React from "react";

export default function Step1({ data, setData, onNext }: any) {
    const canNext = data.name && data.date;

    return (
        <div className="card bg-base-200 shadow-xl rounded-2xl p-6 border border-base-300 transition hover:shadow-2xl">
            <h2 className="text-lg font-semibold text-base-content flex items-center gap-2">
                Características del evento
            </h2>
            <p className="text-xs text-neutral mt-1">
                Completa la información principal de tu evento.
            </p>

            <div className="mt-5 space-y-4">
                {/* Nombre */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium flex items-center gap-2 text-base-content">
                        <Type size={16} /> Nombre del evento
                    </label>
                    <input
                        className="input input-bordered w-full rounded-xl focus:input-primary"
                        placeholder="Ej: Cumpleaños de María"
                        value={data.name}
                        onChange={(e) =>
                            setData({ ...data, name: e.target.value })
                        }
                    />
                </div>

                {/* Fecha de finalización */}
                <div className="flex flex-col gap-1">
                    <label
                        className="text-sm font-medium flex items-center gap-2 text-base-content tooltip tooltip-right"
                        data-tip="Ese día tu evento se dará por finalizado automáticamente."
                    >
                        <Calendar size={16} /> Fecha de finalización
                    </label>

                    <input
                        type="date"
                        className="input input-bordered w-full rounded-xl focus:input-primary"
                        value={data.date}
                        onChange={(e) =>
                            setData({ ...data, date: e.target.value })
                        }
                    />
                </div>

                {/* Descripción */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium flex items-center gap-2 text-base-content">
                        <FileText size={16} /> Descripción (opcional)
                    </label>
                    <textarea
                        className="textarea textarea-bordered rounded-xl w-full focus:textarea-primary"
                        placeholder="Ej: Fiesta en casa, temática retro..."
                        value={data.description}
                        onChange={(e) =>
                            setData({ ...data, description: e.target.value })
                        }
                    />
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <button
                    onClick={onNext}
                    className="btn btn-primary rounded-2xl disabled:opacity-50 shadow-md"
                >
                    Siguiente →
                </button>
            </div>
        </div>
    );
}
