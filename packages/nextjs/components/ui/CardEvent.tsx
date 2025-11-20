import React from "react";

type Props = {
  title: string;
  date?: string;
  description?: string;
  estimatedPrice: number;
  spentPrice: number;
};

export default function CardEvent({ title, date, description, estimatedPrice, spentPrice }: Props) {
  const percentage = Math.min((spentPrice / estimatedPrice) * 100, 100);

  // 📌 Colores según gasto
  const progressColor = percentage < 50 ? "bg-secondary" : percentage < 80 ? "bg-accent" : "bg-primary";

  // 📌 Borde dinámico
  const borderColor =
    percentage < 50 ? "border-secondary/30" : percentage < 80 ? "border-accent/40" : "border-primary/60";

  // 📌 Alertas
  let alertMessage = "";
  let alertColor = "";
  let alertIcon = null;

  if (percentage >= 90) {
    alertMessage = "⚠️ ¡Estás al límite del presupuesto!";
    alertColor = "text-primary font-semibold";
    alertIcon = "🔥";
  } else if (percentage >= 70) {
    alertMessage = "Tené cuidado, estás gastando mucho…";
    alertColor = "text-accent font-medium";
    alertIcon = "⚠️";
  }

  return (
    <div
      className={`
                rounded-xl bg-base-100 shadow-md p-5 border ${borderColor}
                transition-all duration-300
                ${percentage >= 95 ? "animate-pulse" : ""}
            `}
    >
      <h2 className="text-xl font-semibold text-base-content">{title}</h2>

      {date && <p className="text-sm text-neutral">Fecha: {date}</p>}
      {description && <p className="mt-2 text-base-content">{description}</p>}

      {/* INFO DE PRECIOS */}
      <div className="mt-4 text-sm">
        <p className="text-base-content">
          Estimado: <span className="font-semibold">${estimatedPrice}</span>
        </p>

        <p className="text-base-content">
          Gastado: <span className="font-semibold">${spentPrice}</span>
        </p>
      </div>

      {/* BARRA DE PROGRESO */}
      <div className="w-full bg-base-300 h-3 rounded-full mt-2 overflow-hidden">
        <div className={`${progressColor} h-full transition-all duration-300`} style={{ width: `${percentage}%` }} />
      </div>

      <div className="mt-1 text-xs text-base-content">{percentage.toFixed(0)}% del presupuesto usado</div>

      {/* ALERTA */}
      {alertMessage && (
        <div className={`mt-3 p-2 rounded-md bg-base-200 ${alertColor}`}>
          {alertIcon} {alertMessage}
        </div>
      )}

      <div className="flex justify-end mt-4">
        <button className="px-3 py-1 text-primary-content bg-primary hover:bg-primary-focus rounded-md text-sm">
          Ver
        </button>
      </div>
    </div>
  );
}
