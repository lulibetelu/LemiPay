"use client";

import { CalendarDays, DollarSign, UserPlus, Users } from "lucide-react";
import InviteBadge from "../../../components/ui/InviteBadge";

export default function Step3({ data, onPrev, onCreate, loading }: any) {
    const presupuestoLabel = data.fundEnabled
        ? "Presupuesto total del grupo"
        : "Presupuesto por persona";

    return (
        <div className="card bg-base-200 shadow-xl rounded-2xl p-6 border border-base-300 hover:shadow-2xl transition">
            <h2 className="text-lg font-semibold text-base-content flex items-center gap-2">
                📝 Revisar evento
            </h2>
            <p className="text-xs text-neutral mt-1">
                Confirmá que la información esté correcta antes de crearlo.
            </p>

            <div className="mt-5 space-y-6">

                {/* Nombre */}
                <div className="space-y-1">
                    <div className="text-xs text-neutral flex items-center gap-1">
                        <Users size={14} /> Nombre del evento
                    </div>
                    <div className="font-semibold text-base-content">{data.name}</div>
                </div>

                <div className="divider my-1"></div>

                {/* Fecha */}
                <div className="space-y-1">
                    <div className="text-xs text-neutral flex items-center gap-1">
                        <CalendarDays size={14} /> Fecha de finalización
                    </div>
                    <div className="font-semibold text-base-content">{data.date}</div>
                </div>

                <div className="divider my-1"></div>

                {/* Presupuesto */}
                <div className="space-y-1">
                    <div className="text-xs text-neutral flex items-center gap-1">
                        <DollarSign size={14} /> {presupuestoLabel}
                    </div>
                    <div className="font-semibold text-base-content">${data.budget}</div>
                </div>

                <div className="divider my-1"></div>

                {/* Invitados */}
                <div className="space-y-1">
                    <div className="text-xs text-neutral flex items-center gap-1">
                        <UserPlus size={14} /> Invitados añadidos
                    </div>

                    <div className="mt-1 flex flex-wrap gap-2">
                        {data.invites.length > 0 ? (
                            data.invites.map((email: string, idx: number) => (
                                <InviteBadge key={idx} email={email} />
                            ))
                        ) : (
                            <div className="text-neutral">—</div>
                        )}
                    </div>
                </div>
            </div>

            {/* BOTONES */}
            <div className="flex justify-between mt-6">
                <button
                    className="btn btn-ghost rounded-2xl border border-base-300 hover:bg-base-300"
                    onClick={onPrev}
                >
                    ← Anterior
                </button>

                <button
                    className={`btn btn-primary rounded-2xl shadow-md ${
                        loading ? "loading" : ""
                    }`}
                    onClick={onCreate}
                >
                    {loading ? "Creando..." : "Crear Evento"}
                </button>
            </div>
        </div>
    );
}
