"use client";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const menuItemsEN = [
  { title: "Philosophy" },
  { title: "About Us" },
  { title: "Policies", submenu: ["National", "International", "Economic"] },
  { title: "Party", submenu: ["Chairperson", "Leadership", "Wings"] },
  { title: "Resources", submenu: ["Documents", "Media", "Reports"] },
  { title: "Achievements", submenu: ["Political", "Social", "Economic"] },
  { title: "Latest", submenu: ["News", "Events", "Press"] },
];

const menuItemsBN = [
  { title: "দর্শন" },
  { title: "আমাদের সম্পর্কে" },
  { title: "নীতিমালা", submenu: ["জাতীয়", "আন্তর্জাতিক", "অর্থনৈতিক"] },
  { title: "দল", submenu: ["চেয়ারপার্সন", "নেতৃত্ব", "উইংস"] },
  { title: "রিসোর্সেস", submenu: ["ডকুমেন্টস", "মিডিয়া", "রিপোর্টস"] },
  { title: "অর্জনসমূহ", submenu: ["রাজনৈতিক", "সামাজিক", "অর্থনৈতিক"] },
  { title: "সাম্প্রতিক", submenu: ["সংবাদ", "ইভেন্টস", "প্রেস"] },
];

const socialIcons = [
  { name: "Facebook", icon: "/icons8-facebook.svg", link: "https://www.facebook.com/mahbuburrahman.harej" },
  { name: "YouTube", icon: "/youtube-svgrepo-com.svg", link: "#" },
  { name: "Instagram", icon: "/instagram-svgrepo-com.svg", link: "#" },
  { name: "X", icon: "/icons8-x.svg", link: "#" },
  { name: "Telegram", icon: "/icons8-telegram.svg", link: "#" },
];

export default function BnpNavbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { lang, setLang } = useLanguage();

  return (
    <header className="bg-[#F5F5F5] shadow-sm">
      <div className="lg:w-full px-6 mx-auto flex items-center justify-between  h-20">
        {/* Logo and Title */}
        <div className="flex items-center rounded-2xl space-x-2 text-lg md:text-xl">
          <Image
            src="/harij.jpg"
            alt="BNP Logo"
            width={50}
            height={40}
            className="object-contain rounded-full"
          />
          <div className="leading-tight text-base md:text-lg">
            <div className="font-semibold text-gray-800">
              {lang === "EN"
                ? "KM Mahbubar Rahman Harej"
                : "কেএম মাহবুবার রহমান হারেজ"}
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-4 text-[14px] font-bold text-gray-800">
          {(lang === "EN" ? menuItemsEN : menuItemsBN).map((item) =>
            item.submenu ? (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setOpenMenu(item.title)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="flex items-center gap-1">
                  {item.title}
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                {openMenu === item.title && (
                  <div className="absolute top-8 left-0 bg-white shadow-md rounded py-2 min-w-[140px] z-50">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={item.title} href="#" className="hover:text-green-700">
                {item.title}
              </a>
            )
          )}
        </nav>

        {/* Social Icons and Language */}
        <div className="flex items-center space-x-2">
          {socialIcons.map((s) => (
            <a
              key={s.name}
              href={s.link}
              title={s.name}
              className="hover:scale-110 transition-transform flex items-center"
            >
              <Image
                src={s.icon}
                alt={s.name}
                width={34}
                height={34}
                className="object-contain"
              />
            </a>
          ))}

          {/* Language Toggle */}
          <div className="flex items-center border rounded overflow-hidden text-base md:text-lg ml-1">
            <button
              className={`px-3 py-1.5 ${
                lang === "EN" ? "text-white" : "bg-white text-black"
              }`}
              onClick={() => setLang("EN")}
              style={
                lang === "EN"
                  ? {
                      fontSize: "1.1em",
                      background:
                        "linear-gradient(90deg, #006a4e 60%, #f42a41 100%)",
                    }
                  : { fontSize: "1.1em" }
              }
            >
              EN
            </button>
            <button
              className={`px-3 py-1.5 ${
                lang === "BN" ? "text-white" : "bg-white text-black"
              }`}
              onClick={() => setLang("BN")}
              style={
                lang === "BN"
                  ? {
                      fontSize: "1.1em",
                      background:
                        "linear-gradient(90deg, #006a4e 60%, #f42a41 100%)",
                    }
                  : { fontSize: "1.1em" }
              }
            >
              বাং
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
