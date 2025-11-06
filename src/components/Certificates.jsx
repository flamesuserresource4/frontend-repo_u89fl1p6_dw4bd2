import { BadgeCheck, XCircle } from "lucide-react";

export default function Certificates({ items = [] }) {
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Certificates</h2>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((c) => (
          <div key={c.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{c.course}</p>
                <h3 className="font-semibold">{c.title}</h3>
              </div>
              {c.paid ? (
                <BadgeCheck className="h-6 w-6 text-emerald-500" />
              ) : (
                <XCircle className="h-6 w-6 text-rose-500" />
              )}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className={`inline-flex text-xs px-2 py-1 rounded-full font-medium ${
                c.paid ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-rose-50 text-rose-700 border border-rose-200"
              }`}>
                {c.paid ? "Paid" : "Unpaid"}
              </span>
              <span className="text-xs text-slate-500">Issue: {c.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
