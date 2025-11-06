import { LogOut, User } from "lucide-react";

export default function Topbar({ user, onLogout }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-white/60 dark:bg-slate-900/60 border-b border-white/20 dark:border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 shadow-lg shadow-fuchsia-500/30" />
          <div>
            <p className="text-sm text-slate-600 dark:text-slate-300">Campus Portal</p>
            <h1 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400">
              Student & Faculty Dashboard
            </h1>
          </div>
        </div>
        {user && (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-white/30">
              <User className="h-4 w-4 text-violet-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {user.name} • {user.role === "student" ? "Student" : "Faculty"}
              </span>
            </div>
            <button
              onClick={onLogout}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/70 hover:bg-white text-slate-700 border border-slate-200 shadow-sm transition active:scale-[.98]"
            >
              <LogOut className="h-4 w-4" />
              <span className="text-sm font-semibold">Logout</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
