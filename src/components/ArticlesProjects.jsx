import { FileText, GraduationCap, Send } from "lucide-react";

export default function ArticlesProjects({ articles = [], projects = [], internships = [], role, onApply }) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-3">Articles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((a) => (
            <div key={a.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-violet-500 to-fuchsia-500" />
                <div>
                  <h3 className="font-semibold">{a.title}</h3>
                  <p className="text-sm text-slate-500">{a.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div key={p.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500" />
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-slate-500">{p.supervisor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Internships</h2>
          <div className="text-sm text-slate-500 flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            Only students can apply
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {internships.map((i) => (
            <div key={i.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="font-semibold">{i.title}</h3>
              <p className="text-sm text-slate-500">{i.company}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-slate-500">Stipend: {i.stipend}</span>
                <button
                  disabled={role !== "student"}
                  onClick={() => role === "student" && onApply?.(i)}
                  className={`inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-lg border ${
                    role === "student"
                      ? "bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-white border-transparent"
                      : "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
                  }`}
                >
                  <Send className="h-4 w-4" /> Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
