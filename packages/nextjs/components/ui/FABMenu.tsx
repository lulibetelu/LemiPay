import { useState } from "react";
import { CreditCard, DollarSign, Plus, Wallet } from "lucide-react";

// iconos que vamos a usar

export default function FabMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 flex flex-col items-end gap-3">
      {/* Opciones desplegables */}
      {open && (
        <div className="flex flex-col gap-3 mb-2">
          <button className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white shadow-lg border border-base-200 hover:bg-base-100 transition">
            <DollarSign size={20} className="text-p" />
            <span className="text-sm font-medium text-base-content">Agregar gasto</span>
          </button>

          <button className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white shadow-lg border border-base-200 hover:bg-base-100 transition">
            <CreditCard size={20} className="text-p" />
            <span className="text-sm font-medium text-base-content">Pedir fondos</span>
          </button>

          <button className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white shadow-lg border border-base-200 hover:bg-base-100 transition">
            <Wallet size={20} className="text-p" />
            <span className="text-sm font-medium text-base-content">Usar fondo común</span>
          </button>
        </div>
      )}

      {/* FAB principal */}
      <button
        className="w-16 h-16 rounded-full bg-p text-pc shadow-xl flex items-center justify-center hover:scale-110 transition"
        onClick={() => setOpen(!open)}
      >
        <Plus size={32} />
      </button>
    </div>
  );
}
