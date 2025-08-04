"use client";
import Navbar from "./components/Navber";
import PhilosophyIntro from "./components/PhilosophyIntro";
import ProfileCard from "./components/ProfileCard";
import { LanguageProvider } from "./components/LanguageContext";
import { FloatButton } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Global Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0ibTM2IDE0IDggOC04IDhWMTR6TTE0IDM2bDgtOCA4IDhIMTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        {/* Floating Background Elements */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-80 h-80 bg-gradient-to-tl from-red-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-bl from-emerald-500/5 to-red-500/5 rounded-full blur-3xl"></div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-blue-900/10 animate-pulse"></div>

        {/* Content Container */}
        <div className="relative z-10">
          <Navbar />
          <ProfileCard />
          <PhilosophyIntro />
        </div>
        <FloatButton
          icon={<VerticalAlignTopOutlined />}
          tooltip="Scroll to Top (Alt)"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>
    </LanguageProvider>
  );
}
