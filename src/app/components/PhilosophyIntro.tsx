"use client";
import React from "react";

export default function PhilosophyIntro() {
  return (
    <section className="relative py-16 px-2 md:px-0 min-h-[380px] bg-gradient-to-br from-[#f5f5f5] via-[#e6f4ea] to-[#f5f5f5] overflow-hidden">
      {/* Floating shapes for depth */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-emerald-300/30 to-red-300/20 rounded-full blur-2xl z-0"></div>
      <div className="absolute top-1/2 right-0 w-32 h-32 bg-gradient-to-tl from-blue-400/20 to-emerald-400/20 rounded-full blur-xl z-0"></div>
      <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-center bg-gradient-to-r from-emerald-600 via-emerald-400 to-red-400 bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-lg">
          আমার দর্শন ও পরিচিতি
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-semibold bg-white/40 rounded-xl px-4 py-2 shadow-sm backdrop-blur-sm border border-emerald-100">
          এই বিয়োগ আমার রাজনৈতিক আদর্শ, লক্ষ্য এবং আমার মানুষের সাথে আমার
          সম্পর্ক তুলে ধরা হয়েছে। আমার পথচলার মূল উদ্দেশ্য হলো জনগণের সেবা এবং
          একটি শান্তিপূর্ণ সমাজ গঠন।
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Left Card */}
          <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl border border-emerald-100 flex flex-col p-8 overflow-hidden">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-emerald-300/30 to-red-300/20 rounded-full blur-2xl z-0"></div>
            <h3 className="text-xl md:text-2xl font-extrabold text-emerald-700 mb-3 drop-shadow-sm">
              কেন এই পথচলা?
            </h3>
            <blockquote className="font-semibold text-gray-800 mb-4 text-base md:text-lg">
              “গণতন্ত্র পুনরুদ্ধার এবং শেরপুর-ধুনটের মানুষের ভাগ্য উন্নয়নই আমার
              একমাত্র লক্ষ্য।”
            </blockquote>
            <ul className="list-none space-y-3 text-gray-700 text-base md:text-lg font-medium">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1 text-lg">✓</span> জনগণের
                ভোটের অধিকার প্রতিষ্ঠা করা।
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1 text-lg">✓</span> একটি
                ন্যায়ভিত্তিক, শোষণমুক্ত ও সমৃদ্ধ সমাজ গঠন।
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1 text-lg">✓</span> এলাকার
                সাধারণ মানুষের সেবা ও তাদের জীবিকারতায় মনোনিবেশ।
              </li>
            </ul>
          </div>
          {/* Right Card */}
          <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl border border-emerald-100 flex flex-col p-8 overflow-hidden">
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tl from-blue-400/20 to-emerald-400/20 rounded-full blur-xl z-0"></div>
            <h3 className="text-xl md:text-2xl font-extrabold text-emerald-700 mb-3 drop-shadow-sm">
              এলাকার সাথে বন্ধন
            </h3>
            <ul className="list-none space-y-3 text-gray-700 text-base md:text-lg font-medium">
              <li>
                <span className="font-bold text-emerald-700">
                  জন্ম ও বেড়ে ওঠা:
                </span>{" "}
                বগুড়ার শেরপুরে জন্ম এবং এখানেই আমার বেড়ে ওঠা। এই মাটির সাথে
                আমার আত্মিক সম্পর্ক।
              </li>
              <li>
                <span className="font-bold text-emerald-700">
                  পরিবারের প্রভাব:
                </span>{" "}
                একটি মর্যাদাপূর্ণ পরিবারের বেড়ে ওঠেছি, যেখানে সততা ও মানুষের
                প্রতি ভালোবাসার শিক্ষা পেয়েছি।
              </li>
              <li>
                <span className="font-bold text-emerald-700">
                  আত্মিক প্রেরণা:
                </span>{" "}
                ছোট ছেলেবেলা থেকে এলাকার মানুষের সুখ-দুঃখের সঙ্গী, তাদের প্রতিটি
                প্রয়োজনে পাশে থেকেছি।
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
