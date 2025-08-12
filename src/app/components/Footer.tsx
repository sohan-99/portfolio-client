"use client";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { useRouter } from "next/navigation";

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

const quickLinksEN = [
  { title: "History", href: "/history" },
  { title: "Philosophy", href: "/philosophy" },
  { title: "Political Activities", href: "/political-activities" },
  { title: "News and Media", href: "/news-and-media" },
];

const quickLinksBN = [
  { title: "ইতিহাস", href: "/history" },
  { title: "দর্শন", href: "/philosophy" },
  { title: "রাজনৈতিক কার্যক্রম", href: "/political-activities" },
  { title: "সংবাদ ও মিডিয়া", href: "/news-and-media" },
];

const servicesEN = [
  { title: "Planning for Sherpur", href: "/planning-for-sherpur" },
  { title: "Planning for Dhunut", href: "/planning-for-dhunut" },
  { title: "Planning for Bangladesh", href: "/planning-for-bangladesh" },
  { title: "Achievements and Sacrifice", href: "/achievements-and-sacrifice" },
];

const servicesBN = [
  { title: "শেরপুরের পরিকল্পনা", href: "/planning-for-sherpur" },
  { title: "ধুনট নিয়ে পরিকল্পনা", href: "/planning-for-dhunut" },
  { title: "বাংলাদেশের জন্য পরিকল্পনা", href: "/planning-for-bangladesh" },
  { title: "অর্জন ও ত্যাগ", href: "/achievements-and-sacrifice" },
];

export default function Footer() {
  const { lang } = useLanguage();
  const router = useRouter();

  const quickLinks = lang === "EN" ? quickLinksEN : quickLinksBN;
  const services = lang === "EN" ? servicesEN : servicesBN;

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <footer className="bg-[#00664E] text-white">
      <div className="pt-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/harij.jpg"
                  alt="KM Mahbubar Rahman Harej"
                  width={50}
                  height={50}
                  className="object-cover rounded-full border-2 border-green-500"
                />
                <div>
                  <h3 className="font-bold text-lg text-white">
                    {lang === "EN"
                      ? "KM Mahbubar Rahman Harej"
                      : "কেএম মাহবুবার রহমান হারেজ"}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {lang === "EN"
                      ? "Political Leader & Public Servant"
                      : "রাজনৈতিক নেতা ও জনসেবক"}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {lang === "EN"
                  ? "Dedicated to serving the people of Sherpur-Dhunut constituency and working towards a better Bangladesh for all."
                  : "শেরপুর-ধুনট নির্বাচনী এলাকার জনগণের সেবায় নিবেদিত এবং সবার জন্য একটি উন্নত বাংলাদেশ গড়তে কাজ করছি।"}
              </p>

              {/* Social Media */}
              <div className="flex space-x-3">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    title={social.name}
                    className="hover:scale-110 transition-transform  rounded-full p-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={20}
                      height={20}
                      className="object-contain filter invert"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">
                {lang === "EN" ? "Quick Links" : "দ্রুত লিংক"}
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.title}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-white hover:text-gray-300 transition-colors duration-200 text-sm"
                    >
                      {link.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Plans */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">
                {lang === "EN" ? "Vision & Plans" : "দৃষ্টিভঙ্গি ও পরিকল্পনা"}
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.title}>
                    <button
                      onClick={() => handleNavigation(service.href)}
                      className="text-white hover:text-gray-300 transition-colors duration-200 text-sm"
                    >
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">
                {lang === "EN" ? "Get in Touch" : "যোগাযোগ"}
              </h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="text-white mb-1">
                    {lang === "EN" ? "Constituency:" : "নির্বাচনী এলাকা:"}
                  </p>
                  <p className="text-white">
                    {lang === "EN"
                      ? "Sherpur-Dhunat, Bogura"
                      : "শেরপুর-ধুনট, বগুড়া"}
                  </p>
                </div>

                <div className="text-sm">
                  <p className="text-white mb-1">
                    {lang === "EN" ? "Email:" : "ইমেইল:"}
                  </p>
                  <p className="text-white">harej.official@example.com</p>
                </div>

                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => handleNavigation("/contact")}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200"
                  >
                    {lang === "EN" ? "Contact" : "যোগাযোগ"}
                  </button>
                  <button
                    onClick={() => handleNavigation("/send-message")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200"
                  >
                    {lang === "EN" ? "Send Message" : "বার্তা পাঠান"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#00664E]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-white text-center md:text-left">
              {lang === "EN"
                ? "© 2025 KM Mahbubar Rahman Harej. All rights reserved."
                : "© 2025 KM মাহবুবুর রহমান হরেজ। সকল অধিকার সংরক্ষিত।"}
            </p>
            <p className="text-xs text-white text-center md:text-right">
              {lang === "EN"
                ? "Serving the people of Bangladesh with dedication and integrity"
                : "নিষ্ঠা ও সততার সাথে বাংলাদেশের জনগণের সেবা করছি"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
