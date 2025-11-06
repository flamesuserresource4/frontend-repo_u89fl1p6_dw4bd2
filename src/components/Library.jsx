import { BookOpen, BookmarkPlus } from "lucide-react";

export default function Library({ books = [], onBorrow }) {
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Library</h2>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((b) => (
          <div key={b.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-fuchsia-500" />
              <div>
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-sm text-slate-500">{b.author}</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-slate-500">{b.category}</span>
              <button
                onClick={() => onBorrow?.(b)}
                className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:opacity-95"
              >
                <BookmarkPlus className="h-4 w-4" /> Borrow
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
