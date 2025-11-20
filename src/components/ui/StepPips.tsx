export function StepPips({ current, total }: { current: number; total: number }) {
    return (
        <div className="flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all ${
                        current === i
                            ? "bg-primary scale-110 shadow-md"
                            : "bg-base-300"
                    }`}
                />
            ))}
        </div>
    );
}
