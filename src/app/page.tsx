// app/page.tsx
import CardEvent from "../components/ui/CardEvent";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen px-6 py-10 bg-gradient-to-b from-[#f7f8ff] to-[#ffffff]">
            <section className="max-w-5xl mx-auto space-y-10">

                {/* HERO */}
                <div className="text-center space-y-4">
                    <h1 className="text-5xl font-extrabold text-primary drop-shadow-sm">
                        Tus eventos
                    </h1>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Acá puedes ver los eventos de los cuales formas parte
                    </p>
                </div>

                {/* SEPARADOR */}
                <div className="h-[2px] w-24 bg-primary/40 rounded-full mx-auto"></div>

                {/* EVENTOS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="/event">
                    <CardEvent
                        title="Asado Domingo"
                        date="Nov 30, 2025"
                        description="Asado en la casa de Chimu"
                        estimatedPrice={1000}
                        spentPrice={1100}
                    />
                    </Link>
                    <Link href="/event">
                    <CardEvent
                        title="Viaje a las vegas"
                        date="Dec 5, 2025"
                        description="Nos vamos a apostar"
                        estimatedPrice={100000}
                        spentPrice={20000}
                    />
                    </Link>
                </div>
            </section>
        </main>
    );
}
