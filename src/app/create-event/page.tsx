"use client";

import { useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import {StepPips} from "@/components/ui/StepPips";
import FloatingBottomNav from "../../components/ui/FloatingBottomNav";

export default function CreateEventPage() {
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        name: "",
        date: "",
        type: "",
        budget: "",
        description: "",
        guests: "",
        fundEnabled: false,
        initialCost: "",
        category: "",
        payment: "",
        invites: [] as string[],
    });

    const next = () => setStep((s) => Math.min(2, s + 1));
    const prev = () => setStep((s) => Math.max(0, s - 1));

    const handleCreate = async () => {
        setLoading(true);
        setTimeout(() => {
            console.log("EVENT CREATED →", data);
            alert("Evento creado (mock) 🍋\nRevisa la consola.");
            setLoading(false);
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-base-200/50 p-4 pb-32">

            <div className="max-w-lg mx-auto mt-6 space-y-4">
                <div className="flex justify-center mb-2">
                    <StepPips current={step} total={3} />
                </div>

                {step === 0 && <Step1 data={data} setData={setData} onNext={next} />}
                {step === 1 && (
                    <Step2 data={data} setData={setData} onNext={next} onPrev={prev} />
                )}
                {step === 2 && (
                    <Step3
                        data={data}
                        onPrev={prev}
                        onCreate={handleCreate}
                        loading={loading}
                    />
                )}
            </div>

            <FloatingBottomNav currentStep={step} onGoto={setStep} />
        </div>
    );
}
