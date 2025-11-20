import React from "react";

export default function StepHeader({
                                       title,
                                       subtitle,
                                   }: {
    title: string;
    subtitle: string;
}) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-primary-content flex items-center justify-center">
                🍋
            </div>

            <div>
                <div className="text-sm font-semibold text-base-content">{title}</div>
                <div className="text-xs text-neutral">{subtitle}</div>
            </div>
        </div>
    );
}
