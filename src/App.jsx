import { useMemo, useState } from "react";
import Login from "./components/Login";
import Topbar from "./components/Topbar";
import Certificates from "./components/Certificates";
import Library from "./components/Library";
import ArticlesProjects from "./components/ArticlesProjects";

function Dashboard({ user, onLogout }) {
  const certificates = useMemo(
    () => [
      { id: 1, title: "Data Structures", course: "CSE201", date: "2024-04-02", paid: true },
      { id: 2, title: "Operating Systems", course: "CSE301", date: "2024-05-21", paid: false },
      { id: 3, title: "Computer Networks", course: "CSE401", date: "2024-08-09", paid: true },
    ],
    []
  );

  const books = useMemo(
    () => [
      { id: 1, title: "Clean Code", author: "R. Martin", category: "Software" },
      { id: 2, title: "Introduction to Algorithms", author: "CLRS", category: "Algorithms" },
      { id: 3, title: "Database System Concepts", author: "Silberschatz", category: "Databases" },
    ],
    []
  );

  const articles = useMemo(
    () => [
      { id: 1, title: "AI in Education", author: "Dept. of CSE" },
      { id: 2, title: "Green Computing", author: "Dept. of IT" },
    ],
    []
  );

  const projects = useMemo(
    () => [
      { id: 1, title: "Smart Library", supervisor: "Prof. Rao" },
      { id: 2, title: "Campus Navigator", supervisor: "Prof. Mehta" },
    ],
    []
  );

  const internships = useMemo(
    () => [
      { id: 1, title: "Frontend Intern", company: "TechNova", stipend: "₹15,000" },
      { id: 2, title: "Data Analyst Intern", company: "InSight", stipend: "₹18,000" },
    ],
    []
  );

  const handleBorrow = (book) => {
    alert(`${user.role === "student" ? "Borrow" : "Assign"} request for: ${book.title}`);
  };

  const handleApply = (internship) => {
    alert(`Applied to ${internship.title} at ${internship.company}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-violet-50 to-cyan-50">
      <Topbar user={user} onLogout={onLogout} />

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Welcome back</p>
              <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400">
                {user.role === "student" ? "Student" : "Faculty"} Dashboard
              </h1>
            </div>
            <div className="text-sm text-slate-500">
              Logged in as <span className="font-medium text-slate-700">{user.name}</span>
            </div>
          </div>
        </div>

        <Certificates items={certificates} />

        <Library books={books} onBorrow={handleBorrow} />

        <ArticlesProjects
          role={user.role}
          articles={articles}
          projects={projects}
          internships={internships}
          onApply={handleApply}
        />
      </main>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onSuccess={setUser} />;
  }

  return <Dashboard user={user} onLogout={() => setUser(null)} />;
}
