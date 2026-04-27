import React from "react";

const Topbar = ({ setIsSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="flex h-full items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100 transition"
          >
            <span className="material-symbols-outlined text-slate-700">
              menu
            </span>
          </button>

          {/* Search */}
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
              search
            </span>

            <input
              type="text"
              placeholder="Search patients, records, or appointments..."
              className="w-full rounded-full bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none ring-0 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          {/* Notification */}
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-100 transition">
            <span className="material-symbols-outlined text-slate-400">
              notifications
            </span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="hidden sm:block text-right">
              <p className="font-manrope text-sm font-bold text-slate-900">
                Dr. Smith
              </p>
              <p className="text-[10px] uppercase tracking-wider text-slate-400">
                Cardiologist
              </p>
            </div>

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjpjhsC1q9S81Un5qaIb1Kxw7mr-Ybh-qAjjUlbpJtMYurM3daLyQNYdWzjo36qQulRO2fdvPShnqEz-YTGv-wQ7u9kUKUE5KS-TJatRmWNTBe0aCXJdm5Ja6XZljbmrELPSPAquD-OyXZRCOX90afMKw1jbZuIZ-PjAdgf9FGif7H0L-WoAF2zq6GOWy6IqcZuxp7Ouy6iLoDeOxbXPnZK4lQAYFMmAYfbpMWCnmSMcsuXWvrKxuQ8imsh1W3aWpyQ2726rPRZxMm"
              alt="Dr. Smith"
              className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;