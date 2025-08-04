"use client";
import React from "react";
import { useLanguage } from "./LanguageContext";
import Image from "next/image";

export default function ProfileCard() {
  const { lang } = useLanguage();
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0  opacity-20"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>

      <div className="flex justify-center items-center min-h-screen py-16 px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-16 gap-12 w-full max-w-5xl border border-white/20 relative overflow-hidden">
          {/* Glass Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-3xl"></div>

          {/* Decorative Accents */}
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-gradient-to-br from-emerald-400/30 to-red-400/30 rounded-full blur-2xl z-0"></div>
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-tl from-blue-400/20 to-emerald-400/20 rounded-full blur-xl z-0"></div>

          {/* Profile Circle with Enhanced Design */}
          <div className="flex-shrink-0 flex items-center justify-center w-64 h-64 md:w-72 md:h-72 rounded-full relative z-10">
            <div className="w-60 h-60 md:w-68 md:h-68 rounded-full p-2 bg-gradient-to-br from-emerald-400 via-emerald-500 to-red-500 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-white p-2">
                <Image
                  src="/harij.jpg"
                  alt="K.M.H. Harej"
                  width={280}
                  height={280}
                  className="object-cover w-full h-full rounded-full shadow-xl"
                  priority
                />
              </div>
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/20 to-red-400/20 blur-xl scale-110 -z-10"></div>
          </div>

          {/* Info Section with Enhanced Typography */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight drop-shadow-lg">
              {lang === "EN"
                ? "KM Mahbubar Rahman Harej"
                : "কে. এম. মাহবুবার রহমান হারেজ"}
            </h1>
            <div className="text-xl md:text-3xl text-gray-200 font-bold mb-3 bg-white/10 px-6 py-2 rounded-xl backdrop-blur-sm border border-white/20">
              {lang === "EN"
                ? "Member, National Executive Committee "
                : "সদস্য, জাতীয় নির্বাহী কমিটি "}
              <span className="text-emerald-300 font-black">
                {lang === "EN" ? "(BNP)" : "(বিএনপি)"}
              </span>
            </div>
            <div className="text-lg md:text-2xl font-bold text-emerald-200 mt-2 bg-emerald-900/30 px-6 py-3 rounded-xl backdrop-blur-sm border border-emerald-400/30">
              {lang === "EN"
                ? "Party Nomination Aspirant, "
                : "দলীয় মনোনয়ন প্রত্যাশী, "}
              <span className="text-emerald-300">
                {lang === "EN" ? "Bogra-5" : "বগুড়া-৫"}
              </span>{" "}
              <span className="text-red-300">
                {lang === "EN" ? "(Sherpur-Dhunat)" : "(শেরপুর-ধুনট)"}
              </span>
            </div>

            {/* Additional Visual Elements */}
            <div className="flex gap-4 mt-6">
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-red-400 rounded-full"></div>
              <div className="w-8 h-1 bg-blue-400 rounded-full"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-red-400 to-emerald-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
