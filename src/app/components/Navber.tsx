"use client";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// Mobile Menu Dropdown Component
interface MobileMenuDropdownProps {
  title: string;
  submenu: string[];
  createUrlPath: (text: string) => string;
  router: AppRouterInstance;
  setIsMobileMenuOpen: (open: boolean) => void;
  index: number;
}

function MobileMenuDropdown({
  title,
  submenu,
  createUrlPath,
  router,
  setIsMobileMenuOpen,
  index,
}: MobileMenuDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="space-y-1"
      style={{
        animationDelay: `${index * 50}ms`,
        animation: `slideInFromRight 0.3s ease-out forwards`,
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-800 hover:bg-white hover:text-green-700 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-[1.02] bg-white border border-gray-100"
      >
        <div className="flex items-center">
          <span className="w-1 h-4 bg-blue-500 rounded-full mr-3"></span>
          <span>{title}</span>
        </div>
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-green-600" : "text-gray-400"
          }`}
        />
      </button>

      {isOpen && (
        <div className="pl-4 space-y-1 overflow-hidden">
          {submenu.map((sub, subIndex) => (
            <button
              key={sub}
              onClick={() => {
                const urlPath = createUrlPath(sub);
                router.push(urlPath);
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm font-medium text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-lg transition-all duration-200 border-l-2 border-gray-200 hover:border-green-500 bg-white shadow-sm hover:shadow-md ml-2 transform hover:scale-[1.01]"
              style={{
                animationDelay: `${(subIndex + 1) * 100}ms`,
                animation: `fadeInUp 0.3s ease-out forwards`,
              }}
            >
              <div className="flex items-center">
                <span className="w-1 h-1 bg-green-400 rounded-full mr-3"></span>
                {sub}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to convert menu item to URL path
  const createUrlPath = (text: string) => {
    return `/${text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")}`;
  };

  return (
    <header className="bg-[#F5F5F5] shadow-sm">
      <div className="lg:w-full px-6 mx-auto flex items-center justify-between h-20">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 hover:text-green-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Navigation Menu */}
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
                        {({ close }) => (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              const urlPath = createUrlPath(sub);
                              console.log("Navigating to:", urlPath);
                              close(); // Close the dropdown
                              router.push(urlPath);
                            }}
                            className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden hover:bg-gray-100 transition-colors duration-200"
                          >
                            {sub}
                          </button>
                        )}
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

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <div
              className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-red-50">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/harij.jpg"
                      alt="Profile"
                      width={32}
                      height={32}
                      className="object-contain rounded-full"
                    />
                    <h2 className="text-base font-semibold text-gray-800">
                      {lang === "EN" ? "Menu" : "মেনু"}
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <XMarkIcon className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <nav className="flex-1 overflow-y-auto bg-gray-50">
                  <div className="px-3 py-4 space-y-1">
                    {(lang === "EN" ? menuItemsEN : menuItemsBN).map(
                      (item, index) =>
                        item.submenu ? (
                          <MobileMenuDropdown
                            key={item.title}
                            title={item.title}
                            submenu={item.submenu}
                            createUrlPath={createUrlPath}
                            router={router}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                            index={index}
                          />
                        ) : (
                          <button
                            key={item.title}
                            onClick={() => {
                              const urlPath = createUrlPath(item.title);
                              router.push(urlPath);
                              setIsMobileMenuOpen(false);
                            }}
                            className="w-full text-left px-4 py-3 text-base font-medium text-gray-800 hover:bg-white hover:text-green-700 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-[1.02] bg-white border border-gray-100"
                            style={{
                              animationDelay: `${index * 50}ms`,
                              animation: `slideInFromRight 0.3s ease-out forwards`,
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <span>{item.title}</span>
                              <div className="w-2 h-2 bg-green-500 rounded-full opacity-60"></div>
                            </div>
                          </button>
                        )
                    )}
                  </div>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="border-t border-gray-200 p-4 bg-white">
                  {/* Social Icons */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                      <span className="w-1 h-4 bg-green-500 rounded-full mr-2"></span>
                      {lang === "EN" ? "Follow Us" : "আমাদের ফলো করুন"}
                    </p>
                    <div className="flex items-center justify-center space-x-4 bg-gray-50 rounded-lg py-3">
                      {socialIcons.map((s, index) => (
                        <a
                          key={s.name}
                          href={s.link}
                          title={s.name}
                          className="hover:scale-110 transition-all duration-200 hover:drop-shadow-md"
                          style={{
                            animationDelay: `${(index + 10) * 100}ms`,
                            animation: `fadeInUp 0.3s ease-out forwards`,
                          }}
                        >
                          <Image
                            src={s.icon}
                            alt={s.name}
                            width={28}
                            height={28}
                            className="object-contain"
                          />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Language Toggle */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 flex items-center">
                      <span className="w-1 h-4 bg-red-500 rounded-full mr-2"></span>
                      {lang === "EN" ? "Language" : "ভাষা"}
                    </span>
                    <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm">
                      <button
                        className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                          lang === "EN"
                            ? "text-white scale-105"
                            : "bg-white text-black hover:bg-gray-50"
                        }`}
                        onClick={() => setLang("EN")}
                        style={
                          lang === "EN"
                            ? {
                                background:
                                  "linear-gradient(90deg, #006a4e 60%, #f42a41 100%)",
                              }
                            : {}
                        }
                      >
                        EN
                      </button>
                      <button
                        className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                          lang === "BN"
                            ? "text-white scale-105"
                            : "bg-white text-black hover:bg-gray-50"
                        }`}
                        onClick={() => setLang("BN")}
                        style={
                          lang === "BN"
                            ? {
                                background:
                                  "linear-gradient(90deg, #006a4e 60%, #f42a41 100%)",
                              }
                            : {}
                        }
                      >
                        বাং
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add custom CSS for animations */}
        <style jsx>{`
          @keyframes slideInFromRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        {/* Social Icons and Language */}
        <div className="hidden md:flex items-center space-x-2">
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
