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
     
    </LanguageProvider>
  );
}
