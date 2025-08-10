"use client";
import { useLanguage } from "../components/LanguageContext";

export default function PhilosophyPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          {lang === "EN" ? "Philosophy" : "দর্শন"}
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            {lang === "EN" ? (
              <>
                <p className="text-lg text-gray-700 mb-6">
                  My political philosophy is rooted in the principles of
                  democracy, justice, and service to the people. I believe in
                  creating a society where every citizen has equal opportunities
                  and rights.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Core Beliefs
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Democratic governance and transparency</li>
                  <li>Social justice and equality</li>
                  <li>Economic empowerment of the masses</li>
                  <li>Protection of human rights</li>
                  <li>Sustainable development</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                  Vision for the Future
                </h2>
                <p className="text-gray-700">
                  My vision is to build a prosperous, democratic Bangladesh
                  where every citizen can live with dignity, where corruption is
                  eliminated, and where the voice of the people is heard and
                  respected.
                </p>
              </>
            ) : (
              <>
                <p className="text-lg text-gray-700 mb-6">
                  আমার রাজনৈতিক দর্শন গণতন্ত্র, ন্যায়বিচার এবং জনগণের সেবার
                  নীতির উপর প্রতিষ্ঠিত। আমি এমন একটি সমাজ গঠনে বিশ্বাস করি
                  যেখানে প্রতিটি নাগরিকের সমান সুযোগ ও অধিকার রয়েছে।
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  মূল বিশ্বাস
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>গণতান্ত্রিক শাসনব্যবস্থা ও স্বচ্ছতা</li>
                  <li>সামাজিক ন্যায়বিচার ও সমতা</li>
                  <li>জনগণের অর্থনৈতিক ক্ষমতায়ন</li>
                  <li>মানবাধিকার সংরক্ষণ</li>
                  <li>টেকসই উন্নয়ন</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                  ভবিষ্যতের দৃষ্টিভঙ্গি
                </h2>
                <p className="text-gray-700">
                  আমার দৃষ্টিভঙ্গি হলো একটি সমৃদ্ধ, গণতান্ত্রিক বাংলাদেশ গড়া
                  যেখানে প্রতিটি নাগরিক মর্যাদার সাথে বাঁচতে পারবে, যেখানে
                  দুর্নীতি নির্মূল হবে এবং জনগণের কণ্ঠস্বর শোনা ও সম্মানিত হবে।
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
