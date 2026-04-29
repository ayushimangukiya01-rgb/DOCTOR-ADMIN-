import React from "react";
import IconButton from "../../common/ui/IconButton";
import SearchInput from "../../common/ui/SearchInput";
import TopbarProfile from "../../common/display/TopbarProfile";

const Topbar = ({ setIsSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="flex h-full items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
          <IconButton
            icon="menu"
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden h-10 w-10 rounded-lg hover:bg-slate-100"
          />

          <SearchInput placeholder="Search patients, records, or appointments..." />
        </div>

        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          <IconButton
            icon="notifications"
            className="h-10 w-10 rounded-full hover:bg-slate-100 text-slate-400"
          />

          <TopbarProfile
            name="Dr. Smith"
            role="Cardiologist"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDjpjhsC1q9S81Un5qaIb1Kxw7mr-Ybh-qAjjUlbpJtMYurM3daLyQNYdWzjo36qQulRO2fdvPShnqEz-YTGv-wQ7u9kUKUE5KS-TJatRmWNTBe0aCXJdm5Ja6XZljbmrELPSPAquD-OyXZRCOX90afMKw1jbZuIZ-PjAdgf9FGif7H0L-WoAF2zq6GOWy6IqcZuxp7Ouy6iLoDeOxbXPnZK4lQAYFMmAYfbpMWCnmSMcsuXWvrKxuQ8imsh1W3aWpyQ2726rPRZxMm"
          />
        </div>
      </div>
    </header>
  );
};

export default Topbar;