// 'use client'
// import React from 'react'
// import Link from 'next/link'
// import { CheckCircle, Plus } from 'lucide-react'
//
// /**
//  * Expenses list (src/app/event/expenses/page.jsx)
//  * Cada gasto es clickeable y lleva a /event/expenses/[id]
//  */
//
// const mockExpenses = [
//     { id: 'e1', title: 'Compras - supermercado', amount: 120, acceptedPercent: 70 },
//     { id: 'e2', title: 'Decoración', amount: 60, acceptedPercent: 40 },
//     { id: 'e3', title: 'Bebidas', amount: 140, acceptedPercent: 85 },
// ]
//
// export default function ExpensesPage() {
//     return (
//         <div className="min-h-screen p-4" style={{ backgroundColor: '#FBFDF6' }}>
//             <header className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-3">
//                     <div className="p-2 rounded-full bg-white border border-[#DCE4CE]">
//                         ←
//                     </div>
//                     <h2 className="text-xl font-semibold text-[#1A1A1A]">Gastos</h2>
//                 </div>
//
//                 <Link href="/event">
//                     <button className="p-2 rounded-full bg-white border border-[#DCE4CE]">Cerrar</button>
//                 </Link>
//             </header>
//
//             <section className="space-y-3">
//                 {mockExpenses.map(exp => (
//                     <Link href={`/event/expenses/${exp.id}`} key={exp.id} className="block">
//                         <div className="bg-white rounded-2xl p-4 border border-[#DCE4CE] shadow-sm flex items-center justify-between">
//                             <div>
//                                 <div className="text-sm font-medium text-[#1A1A1A]">{exp.title}</div>
//                                 <div className="text-xs text-[#2D2D2D] mt-1">${exp.amount.toFixed(2)}</div>
//                             </div>
//
//                             <div className="flex items-center gap-3">
//                                 <div className="text-xs text-[#2D2D2D]">{exp.acceptedPercent}%</div>
//                                 {exp.acceptedPercent > 50 ? (
//                                     <CheckCircle size={20} className="text-[#56A956]" />
//                                 ) : (
//                                     <div style={{ width: 20, height: 20 }} />
//                                 )}
//                             </div>
//                         </div>
//                     </Link>
//                 ))}
//             </section>
//
//             <Link href="/event">
//                 <button className="fixed right-5 bottom-8 w-16 h-16 rounded-full shadow-2xl" style={{ background: '#F4D03F', color: '#000' }}>
//                     <Plus />
//                 </button>
//             </Link>
//         </div>
//     )
// }
