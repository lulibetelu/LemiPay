"use client";

import { Mail, User, Wallet } from "lucide-react";

export default function ProfilePage() {
  const user = {
    username: "facu",
    email: "facu@example.com",
    totalDebt: 12400,
  };
  return (
    <div className="min-h-screen bg-base-100 p-5">
      <div className="card bg-base-200 border border-base-300 shadow-xl rounded-2xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-md">
            <User className="w-8 h-8 text-primary-content" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-base-content">{user.username}</h2>
            <p className="text-sm text-neutral flex items-center gap-1">
              <Mail className="w-4 h-4" />
              {user.email}
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-base-300 pt-4">
          <div className="flex items-center justify-between">
            <p className="text-base-content font-medium flex items-center gap-2">
              <Wallet className="w-5 h-5 text-primary" />
              Total Adeudado
            </p>
            <p className="text-xl font-semibold text-primary">${user.totalDebt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
