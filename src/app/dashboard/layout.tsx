import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col w-full">
        <Header />

        <main className="flex-grow">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
