import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-background">
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <AdminTopbar onMenuClick={() => setIsSidebarOpen(true)} />

      <main className="pt-24 px-4 pb-12 sm:px-6 lg:ml-64 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;