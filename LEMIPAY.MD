# 🍋 LemiPay: Decentralized Event Treasury

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Tech Stack](https://img.shields.io/badge/stack-Next.js_|_TypeScript_|_Hardhat-blue)
![License](https://img.shields.io/badge/license-MIT-green)

**LemiPay** es una plataforma de gestión de fondos comunitarios diseñada para aportar transparencia y democracia a los gastos grupales.

---

## 🚀 El Problema
Organizar eventos (viajes, asados, hackathons) implica juntar dinero. Pero:
1.  **Falta de transparencia:** ¿Quién tiene la plata? ¿Ya gastó lo que dijo?
2.  **Centralización:** El "tesorero" tiene todo el poder.
3.  **Fricción en la aprobación:** Ponerse de acuerdo en gastos extra es un caos de mensajes de WhatsApp.

## 💡 La Solución: LemiPay
Un dashboard financiero donde los fondos se gestionan mediante **Gobernanza On-Chain**.
* **Pools de Liquidez:** Cada evento es una "bóveda" segura.
* **Sistema de Votación:** Para retirar fondos, se requiere la aprobación de `N` participantes (configurado al crear el evento).
* **Trazabilidad:** Cada ingreso y egreso queda registrado e inmutable.

---

## ✨ Funcionalidades Principales (MVP)

### 1. Creación de Eventos Inteligentes
El organizador configura:
* Nombre y Metadata del evento.
* **Reglas de Gobierno:** ¿Cuántas personas deben aprobar un gasto? (ej. 50% + 1).
* Visibilidad (Público/Privado).

### 2. Gestión de Tesorería (Dashboard)
* **Request Money:** Solicitud de fondos al grupo.
* **Withdraw Proposal:** Si un usuario necesita sacar dinero del pozo para comprar insumos, genera una "Propuesta de Retiro".
* **Sistema de Aprobación:** Los otros participantes ven la solicitud y votan ✅ o ❌. Solo si se aprueba, el estado cambia a "Approved".

### 3. Registro de Gastos (Expense Logging)
* **Pagos Directos:** Si pagaste con tu dinero, subís el comprobante para futuro reembolso.
* **Pagos del Pool:** Justificación de en qué se usó el dinero retirado previamente.

---

## 🛠 Tech Stack

El proyecto utiliza una arquitectura **Web3-Native** (Monorepo) para garantizar escalabilidad y seguridad.

* **Frontend:**
    * [Next.js 14](https://nextjs.org/) (App Router) - Framework React.
    * [TypeScript](https://www.typescriptlang.org/) - Tipado estático para robustez.
    * [Tailwind CSS](https://tailwindcss.com/) - Estilizado rápido y responsivo.
* **Smart Contracts / Logic Layer:**
    * [Hardhat](https://hardhat.org/) - Entorno de desarrollo para Ethereum.
    * **Solidity** (Planned) - Para la lógica de los contratos de custodia de fondos.
* **State Management:** Context API & React Hooks.

---

## 📂 Estructura del Proyecto

```text
packages/
├── nextjs/              # Frontend Application
│   ├── app/             # Next.js 14 App Router & Pages
│   ├── components/      # Reusable UI Components
│   ├── context/         # Global State (Simulation of Blockchain State)
│   ├── contracts/       # ABIs and Contract Interactions
│   └── services/        # Web3 integration services
└── hardhat/             # Smart Contract Development Environment
    ├── contracts/       # Solidity Source Code
    └── deploy/          # Deployment Scripts