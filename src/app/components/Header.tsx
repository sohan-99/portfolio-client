"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full">
      <div className="w-full relative">
        <Image
          src="/WhatsApp Image 2025-08-06 at 7.34.34 PM.jpeg"
          alt="Portfolio preview"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto object-cover"
          sizes="100vw"
        />
      </div>
    </header>
  );
}
