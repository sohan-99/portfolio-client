"use client";
import { FloatButton } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      {/* Content Container */}
      <div className="relative z-10">
        <Header />
        <Footer />
      </div>
      <FloatButton
        icon={<VerticalAlignTopOutlined />}
        tooltip="Scroll to Top (Alt)"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </>
  );
}
