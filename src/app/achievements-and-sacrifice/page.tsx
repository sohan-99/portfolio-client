/* eslint-disable react/no-unescaped-entities */
"use client";
import { useLanguage } from "../components/LanguageContext";

export default function AchievementsAndSacrificePage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          {lang === "EN" ? "Achievements and Sacrifice" : "অর্জন ও ত্যাগ"}
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            {lang === "EN" ? (
              <>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">
                      Achievements
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-3">
                      <li>
                        Successfully represented the constituency for multiple
                        terms
                      </li>
                      <li>
                        Initiated development projects for rural infrastructure
                      </li>
                      <li>
                        Established educational institutions in remote areas
                      </li>
                      <li>
                        Implemented healthcare programs for the underprivileged
                      </li>
                      <li>Created employment opportunities for local youth</li>
                      <li>Promoted women empowerment initiatives</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-red-700 mb-4">
                      Sacrifices
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-3">
                      <li>Personal time dedicated to public service</li>
                      <li>Financial contributions for community development</li>
                      <li>Political persecution during democratic movements</li>
                      <li>Family time sacrificed for the greater good</li>
                      <li>Personal comfort given up for people's welfare</li>
                      <li>Faced threats for standing against injustice</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Legacy of Service
                  </h2>
                  <p className="text-gray-700">
                    Throughout my political career, I have always prioritized
                    the welfare of the people over personal gain. Every
                    achievement has come through dedication and sacrifice, and
                    every sacrifice has been made with the hope of building a
                    better future for our community and nation.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">
                      অর্জনসমূহ
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-3">
                      <li>একাধিকবার নির্বাচনী এলাকার সফল প্রতিনিধিত্ব</li>
                      <li>গ্রামীণ অবকাঠামো উন্নয়ন প্রকল্পের সূচনা</li>
                      <li>দূরবর্তী এলাকায় শিক্ষা প্রতিষ্ঠান স্থাপন</li>
                      <li>
                        সুবিধাবঞ্চিতদের জন্য স্বাস্থ্যসেবা কর্মসূচি বাস্তবায়ন
                      </li>
                      <li>স্থানীয় যুবকদের জন্য কর্মসংস্থানের সুযোগ সৃষ্টি</li>
                      <li>নারী ক্ষমতায়ন উদ্যোগের প্রচার</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-red-700 mb-4">
                      ত্যাগসমূহ
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-3">
                      <li>জনসেবায় ব্যক্তিগত সময়ের উৎসর্গ</li>
                      <li>সমাজ উন্নয়নে আর্থিক অবদান</li>
                      <li>গণতান্ত্রিক আন্দোলনের সময় রাজনৈতিক নিপীড়ন</li>
                      <li>বৃহত্তর কল্যাণের জন্য পারিবারিক সময়ের ত্যাগ</li>
                      <li>জনগণের কল্যাণে ব্যক্তিগত আরামের বিসর্জন</li>
                      <li>অন্যায়ের বিরুদ্ধে দাঁড়ানোর জন্য হুমকির মুখোমুখি</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    সেবার উত্তরাধিকার
                  </h2>
                  <p className="text-gray-700">
                    আমার রাজনৈতিক জীবনব্যাপী, আমি সর্বদা ব্যক্তিগত স্বার্থের
                    চেয়ে জনগণের কল্যাণকে অগ্রাধিকার দিয়েছি। প্রতিটি অর্জন
                    এসেছে নিষ্ঠা ও ত্যাগের মাধ্যমে, এবং প্রতিটি ত্যাগ করা হয়েছে
                    আমাদের সমাজ ও জাতির জন্য একটি উন্নত ভবিষ্যৎ গড়ার আশা নিয়ে।
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
