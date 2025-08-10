"use client";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const menuItemsEN = [
  { title: "History" },
  {
    title: "About me",
    submenu: [
      "Philosophy",
      "Achievements and Sacrifice",
      "Harez in the wake of the incident",
      "Political activities",
    ],
  },
  {
    title: "The plan",
    submenu: [
      "Planning for Sherpur",
      "Planning for Dhunut",
      "Planning for Bangladesh",
    ],
  },
  { title: "News and media" },
  { title: "Contact" },
  { title: "Send message" },
];

const menuItemsBN = [
  { title: "ইতিহাস" },
  {
    title: "আমার সম্পর্কে",
    submenu: [
      "দর্শন ",
      "অর্জন ও ত্যাগ",
      "ঘটনার প্রেক্ষিতে হারেজ",
      "রাজনৈতিক কার্যক্রম ",
    ],
  },
  {
    title: "পরিকল্পনা",
    submenu: [
      "শেরপুরের পরিকল্পনা",
      "ধুনট নিয়ে পরিকল্পনা",
      "বাংলাদেশের জন্য পরিকল্পনা",
    ],
  },
  { title: "সংবাদ ও মিডিয়া" },
  { title: "যোগাযোগ" },
  { title: "বার্তা পাঠান " },
];

const socialIcons = [
  {
    name: "Facebook",
    icon: "/icons8-facebook.svg",
    link: "https://www.facebook.com/mahbuburrahman.harej",
  },
  { name: "YouTube", icon: "/youtube-svgrepo-com.svg", link: "#" },
  { name: "Instagram", icon: "/instagram-svgrepo-com.svg", link: "#" },
  { name: "X", icon: "/icons8-x.svg", link: "#" },
  { name: "Telegram", icon: "/icons8-telegram.svg", link: "#" },
];

export default function BnpNavbar() {
  const { lang, setLang } = useLanguage();
  const router = useRouter();

  // Function to convert menu item to URL path
  const createUrlPath = (text: string) => {
    return `/${text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")}`;
  };

  return (
    <header className="bg-[#F5F5F5] shadow-sm">
      <div className="lg:w-full px-6 mx-auto flex items-center justify-between  h-20">
        {/* Logo and Title */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center rounded-2xl space-x-2 text-lg md:text-xl hover:bg-gray-100 transition-colors duration-200 p-2 -m-2"
        >
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
        </button>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-4 text-[14px] font-bold text-gray-800">
          {(lang === "EN" ? menuItemsEN : menuItemsBN).map((item) =>
            item.submenu ? (
              <Menu as="div" key={item.title} className="relative inline-block">
                <MenuButton className="flex items-center gap-1 hover:text-green-700 transition-colors px-2 py-1 rounded">
                  {item.title}
                  <ChevronDownIcon aria-hidden="true" className="w-4 h-4" />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute left-0 z-[9999] mt-1 w-56 origin-top-left rounded-lg bg-white shadow-lg border border-gray-200 outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-2">
                    {item.submenu.map((sub) => (
                      <MenuItem key={sub}>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            const urlPath = createUrlPath(sub);
                            console.log("Navigating to:", urlPath);
                            router.push(urlPath);
                          }}
                          className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden hover:bg-gray-100 transition-colors duration-200"
                        >
                          {sub}
                        </button>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
            ) : (
              <button
                key={item.title}
                onClick={() => {
                  const urlPath = createUrlPath(item.title);
                  console.log("Navigating to:", urlPath);
                  router.push(urlPath);
                }}
                className="hover:text-green-700 transition-colors cursor-pointer px-2 py-1 rounded"
              >
                {item.title}
              </button>
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
