"use client";

import { FloatButton } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";

export default function ScrollToTopButton() {
  return (
    <FloatButton
      icon={<VerticalAlignTopOutlined />}
      tooltip="Scroll to Top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    />
  );
}
