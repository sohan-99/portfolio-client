"use client";
import React from "react";
import { useLanguage } from "./LanguageContext";

export default function PhilosophyIntro() {
  const { lang } = useLanguage();
  return (
    <section className="relative py-16 px-2 md:px-0 min-h-[380px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0  opacity-20"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-center bg-gradient-to-r from-emerald-400 via-emerald-300 to-red-400 bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-lg">
          {lang === "EN"
            ? "My Philosophy & Introduction"
            : "আমার দর্শন ও পরিচিতি"}
        </h2>
        <p className="text-center text-gray-200 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-semibold bg-white/10 rounded-xl px-4 py-2 shadow-sm backdrop-blur-sm border border-white/20">
          {lang === "EN"
            ? "This section highlights my political ideals, goals, and my relationship with the people. My main purpose is to serve the people and build a peaceful society."
            : "এই বিয়োগ আমার রাজনৈতিক আদর্শ, লক্ষ্য এবং আমার মানুষের সাথে আমার সম্পর্ক তুলে ধরা হয়েছে। আমার পথচলার মূল উদ্দেশ্য হলো জনগণের সেবা এবং একটি শান্তিপূর্ণ সমাজ গঠন।"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Left Card */}
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 flex flex-col p-8 overflow-hidden">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-emerald-400/30 to-red-400/30 rounded-full blur-2xl z-0"></div>
            <h3 className="text-xl md:text-2xl font-extrabold text-emerald-300 mb-3 drop-shadow-sm">
              {lang === "EN" ? "Why This Path?" : "কেন এই পথচলা?"}
            </h3>
            <blockquote className="font-semibold text-gray-200 mb-4 text-base md:text-lg">
              {lang === "EN"
                ? '"Restoring democracy and improving the fate of the people of Sherpur-Dhunat is my only goal."'
                : "“গণতন্ত্র পুনরুদ্ধার এবং শেরপুর-ধুনটের মানুষের ভাগ্য উন্নয়নই আমার একমাত্র লক্ষ্য।”"}
            </blockquote>
            <ul className="list-none space-y-3 text-gray-300 text-base md:text-lg font-medium">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1 text-lg">✓</span>{" "}
                {lang === "EN"
                  ? "Establishing people's voting rights."
                  : "জনগণের ভোটের অধিকার প্রতিষ্ঠা করা।"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1 text-lg">✓</span>{" "}
                {lang === "EN"
                  ? "Building a just, exploitation-free, and prosperous society."
                  : "একটি ন্যায়ভিত্তিক, শোষণমুক্ত ও সমৃদ্ধ সমাজ গঠন।"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1 text-lg">✓</span>{" "}
                {lang === "EN"
                  ? "Serving the common people and focusing on their livelihoods."
                  : "এলাকার সাধারণ মানুষের সেবা ও তাদের জীবিকারতায় মনোনিবেশ।"}
              </li>
            </ul>
          </div>
          {/* Right Card */}
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 flex flex-col p-8 overflow-hidden">
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tl from-blue-400/20 to-emerald-400/20 rounded-full blur-xl z-0"></div>
            <h3 className="text-xl md:text-2xl font-extrabold text-emerald-300 mb-3 drop-shadow-sm">
              {lang === "EN" ? "Bond with the Area" : "এলাকার সাথে বন্ধন"}
            </h3>
            <ul className="list-none space-y-3 text-gray-300 text-base md:text-lg font-medium">
              <li>
                <span className="font-bold text-emerald-300">
                  {lang === "EN" ? "Birth & Upbringing:" : "জন্ম ও বেড়ে ওঠা:"}
                </span>{" "}
                {lang === "EN"
                  ? "Born and raised in Sherpur, Bogura. I have a spiritual connection with this land."
                  : "বগুড়ার শেরপুরে জন্ম এবং এখানেই আমার বেড়ে ওঠা। এই মাটির সাথে আমার আত্মিক সম্পর্ক।"}
              </li>
              <li>
                <span className="font-bold text-emerald-300">
                  {lang === "EN" ? "Family Influence:" : "পরিবারের প্রভাব:"}
                </span>{" "}
                {lang === "EN"
                  ? "Grew up in a respected family, learned honesty and love for people."
                  : "একটি মর্যাদাপূর্ণ পরিবারের বেড়ে ওঠেছি, যেখানে সততা ও মানুষের প্রতি ভালোবাসার শিক্ষা পেয়েছি।"}
              </li>
              <li>
                <span className="font-bold text-emerald-300">
                  {lang === "EN" ? "Spiritual Inspiration:" : "আত্মিক প্রেরণা:"}
                </span>{" "}
                {lang === "EN"
                  ? "From childhood, I have stood by the joys and sorrows of the people, always ready to help."
                  : "ছোট ছেলেবেলা থেকে এলাকার মানুষের সুখ-দুঃখের সঙ্গী, তাদের প্রতিটি প্রয়োজনে পাশে থেকেছি।"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
