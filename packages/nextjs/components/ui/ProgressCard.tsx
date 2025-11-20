import { useState } from "react";

export default function ProgressCard() {
  const [isPersonal, setIsPersonal] = useState(false);

  // Hardcodeamos los valores de gastos y estimados
  const totalEstimated = 50000; // Precio estimado total
  const totalSpent = 43000; // Gastos totales
  const perPersonEstimated = 10000; // Precio estimado por persona
  const perPersonSpent = 9000; // Gastos por persona

  // Calculamos el width de la barra según toggle
  const barPercentage = isPersonal
    ? Math.min((perPersonSpent / perPersonEstimated) * 100, 100)
    : Math.min((totalSpent / totalEstimated) * 100, 100);

  return (
    <div className="bg-b2 rounded-2xl shadow-md border border-base-300 p-5 mx-4 mb-4">
      {/* Toggle */}
      <div className="flex items-center gap-3 mb-3">
        <input
          type="checkbox"
          className="toggle toggle-accent"
          checked={isPersonal}
          onChange={() => setIsPersonal(!isPersonal)}
        />
        <span className="text-bc font-medium text-sm">{isPersonal ? "Gastos por persona" : "Gastos totales"}</span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-base-300 h-3 rounded-full mt-2 overflow-hidden">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${barPercentage}%`,
            backgroundColor: "#facc15",
          }}
        />
      </div>

      {/* Mostrar números */}
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>Gastado: {isPersonal ? perPersonSpent.toLocaleString() : totalSpent.toLocaleString()}</span>
        <span>Estimado: {isPersonal ? perPersonEstimated.toLocaleString() : totalEstimated.toLocaleString()}</span>
      </div>
    </div>
  );
}
