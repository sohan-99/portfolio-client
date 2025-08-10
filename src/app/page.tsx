"use client";
import Navbar from "./components/Navber";
import { LanguageProvider } from "./components/LanguageContext";
import { FloatButton } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <LanguageProvider>
        {/* Content Container */}
        <div className="relative z-10">
          <Navbar />
          <Header />
          <Footer />
        </div>
        <FloatButton
          icon={<VerticalAlignTopOutlined />}
          tooltip="Scroll to Top (Alt)"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </LanguageProvider>
  );
}

