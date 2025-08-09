"use client";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

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

const footerLinksEN = {
  aboutUs: {
    title: "About Us",
    links: [
      { title: "Our Leaders", href: "#" },
      { title: "Constitution", href: "#" },
      { title: "History", href: "#" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { title: "Vision 2030", href: "#" },
      { title: "19 Points", href: "#" },
      { title: "Policies", href: "#" },
    ],
  },
  updates: {
    title: "Updates",
    links: [
      { title: "Press Releases", href: "#" },
      { title: "News", href: "#" },
      { title: "Events", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { title: "Terms and Conditions", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Refund Policy", href: "#" },
    ],
  },
};

const footerLinksBN = {
  aboutUs: {
    title: "আমাদের সম্পর্কে",
    links: [
      { title: "আমাদের নেতৃত্ব", href: "#" },
      { title: "সংবিধান", href: "#" },
      { title: "ইতিহাস", href: "#" },
    ],
  },
  resources: {
    title: "সম্পদ",
    links: [
      { title: "ভিশন ২০৩০", href: "#" },
      { title: "১৯ দফা", href: "#" },
      { title: "নীতিমালা", href: "#" },
    ],
  },
  updates: {
    title: "আপডেট",
    links: [
      { title: "প্রেস রিলিজ", href: "#" },
      { title: "সংবাদ", href: "#" },
      { title: "অনুষ্ঠান", href: "#" },
    ],
  },
  legal: {
    title: "আইনি",
    links: [
      { title: "শর্তাবলী", href: "#" },
      { title: "গোপনীয়তা নীতি", href: "#" },
      { title: "ফেরত নীতি", href: "#" },
    ],
  },
};

export default function Footer() {
  const { lang } = useLanguage();
  const footerLinks = lang === "EN" ? footerLinksEN : footerLinksBN;

  return (
    <footer className="bg-[#00664E] text-white">
      {/* Call to Action Section */}
      <div className="bg-[#00664E] py-12 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
            {lang === "EN"
              ? "Join the Nationalists"
              : "জাতীয়তাবাদীদের সাথে যোগ দিন"}
          </h2>
          <p className="text-lg md:text-xl text-white">
            {lang === "EN"
              ? "Join the Fight for Democracy and Voting Rights"
              : "গণতন্ত্র ও ভোটাধিকারের জন্য লড়াইয়ে যোগ দিন"}
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#0b2922] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* About Us */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                {footerLinks.aboutUs.title}
              </h3>
              <ul className="space-y-2">
                {footerLinks.aboutUs.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="hover:text-green-300 transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                {footerLinks.resources.title}
              </h3>
              <ul className="space-y-2">
                {footerLinks.resources.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="hover:text-green-300 transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Updates */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                {footerLinks.updates.title}
              </h3>
              <ul className="space-y-2">
                {footerLinks.updates.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="hover:text-green-300 transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                {footerLinks.legal.title}
              </h3>
              <ul className="space-y-2">
                {footerLinks.legal.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="hover:text-green-300 transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                {lang === "EN" ? "Follow us" : "আমাদের অনুসরণ করুন"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    title={social.name}
                    className="hover:scale-110 transition-transform duration-200 bg-white rounded-full p-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className=" py-6 border-t bg-[#0b2922]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-300">
              {lang === "EN"
                ? "© 2023 to 2025 Bangladesh Nationalist Party - BNP"
                : "© ২০২৩ থেকে ২০২৫ বাংলাদেশ জাতীয়তাবাদী দল - বিএনপি"}
            </p>

            {/* Powered by */}
            <p className="text-sm text-gray-400">
              {lang === "EN"
                ? "Powered by Information and Technology Office, Bangladesh Nationalist Party - BNP"
                : "তথ্য ও প্রযুক্তি অফিস, বাংলাদেশ জাতীয়তাবাদী দল - বিএনপি কর্তৃক চালিত"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
