import { useState } from "react";
import { KeyRound, LockKeyhole, School, User } from "lucide-react";

const FACULTY_CREDENTIALS = { username: "pavan", password: "pavan1", role: "faculty", name: "Pavan" };
const STUDENT_CREDENTIALS = { username: "Uday", password: "Uday1", role: "student", name: "Uday" };

export default function Login({ onSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const creds = [FACULTY_CREDENTIALS, STUDENT_CREDENTIALS].find(
      (c) => c.username === username && c.password === password
    );

    if (!creds) {
      setError("Invalid username or password");
      return;
    }

    onSuccess({ name: creds.name, role: creds.role, username: creds.username });
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="relative hidden md:block overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.25),transparent_60%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center px-8">
            <div className="flex items-center justify-center mb-4">
              <School className="h-12 w-12" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Welcome to the Campus Portal</h2>
            <p className="mt-3 text-white/90">Access dashboards for certificates, library, articles, projects and internships.</p>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center p-6">
        <div className="absolute inset-0 -z-0 bg-gradient-to-b from-white via-white to-white/60" />
        <form onSubmit={handleSubmit} className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400" />
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Sign in</p>
              <h3 className="text-lg font-semibold">Student & Faculty</h3>
            </div>
          </div>

          <label className="block text-sm font-medium text-slate-700">Username</label>
          <div className="mt-1 mb-4 flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white focus-within:ring-2 focus-within:ring-violet-400">
            <User className="h-4 w-4 text-slate-400" />
            <input
              className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <label className="block text-sm font-medium text-slate-700">Password</label>
          <div className="mt-1 mb-2 flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white focus-within:ring-2 focus-within:ring-violet-400">
            <LockKeyhole className="h-4 w-4 text-slate-400" />
            <input
              type="password"
              className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="mb-3 text-sm text-rose-600 bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">
              <KeyRound className="inline h-4 w-4 mr-2" />
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-3 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 shadow-lg shadow-violet-500/30 hover:opacity-95 active:scale-[.99]"
          >
            Sign In
          </button>

          <p className="mt-4 text-xs text-slate-500">
            Faculty: pavan / pavan1 — Student: Uday / Uday1
          </p>
        </form>
      </div>
    </div>
  );
}
