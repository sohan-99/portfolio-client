"use client";
import { useLanguage } from "../components/LanguageContext";

export default function PlanningForBangladeshPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
          {lang === "EN"
            ? "Planning for Bangladesh"
            : "বাংলাদেশের জন্য পরিকল্পনা"}
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="prose max-w-none">
            {lang === "EN" ? (
              <>
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-3 sm:mb-4">
                    Vision 2030: A Prosperous Bangladesh
                  </h2>
                  <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
                    Building a democratic, just, and prosperous Bangladesh where
                    every citizen can live with dignity
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                  <div className="text-center p-4 sm:p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl sm:text-4xl text-green-600 mb-3 sm:mb-4">🏛️</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2 sm:mb-3">
                      Democratic Governance
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      Restore democratic institutions and ensure transparent,
                      accountable governance
                    </p>
                  </div>

                  <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-lg">
                    <div className="text-3xl sm:text-4xl text-blue-600 mb-3 sm:mb-4">⚖️</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2 sm:mb-3">
                      Social Justice
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      Ensure equal rights, opportunities, and justice for all
                      citizens
                    </p>
                  </div>

                  <div className="text-center p-4 sm:p-6 bg-orange-50 rounded-lg">
                    <div className="text-3xl sm:text-4xl text-orange-600 mb-3 sm:mb-4">📈</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-orange-800 mb-2 sm:mb-3">
                      Economic Growth
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      Achieve sustainable economic development that benefits all
                      classes
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-red-700 mb-3 sm:mb-4">
                      Political Reforms
                    </h3>
                    <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2 sm:space-y-3">
                      <li>Restore free and fair electoral system</li>
                      <li>Strengthen parliamentary democracy</li>
                      <li>Ensure independence of judiciary</li>
                      <li>Protect press freedom and civil liberties</li>
                      <li>Combat corruption at all levels</li>
                      <li>Decentralize power to local governments</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-red-700 mb-3 sm:mb-4">
                      Economic Development
                    </h3>
                    <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2 sm:space-y-3">
                      <li>Promote private sector investment</li>
                      <li>Develop SME and entrepreneurship</li>
                      <li>Modernize agriculture and food security</li>
                      <li>Expand export-oriented industries</li>
                      <li>Create employment opportunities</li>
                      <li>Reduce income inequality</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-red-700 mb-3 sm:mb-4">
                      Social Development
                    </h3>
                    <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2 sm:space-y-3">
                      <li>Quality education for all</li>
                      <li>Universal healthcare system</li>
                      <li>Women empowerment programs</li>
                      <li>Youth development initiatives</li>
                      <li>Social safety net expansion</li>
                      <li>Cultural heritage preservation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-red-700 mb-3 sm:mb-4">
                      Infrastructure & Technology
                    </h3>
                    <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2 sm:space-y-3">
                      <li>Digital Bangladesh implementation</li>
                      <li>Transport network modernization</li>
                      <li>Energy security and renewable sources</li>
                      <li>Smart city development</li>
                      <li>Climate resilient infrastructure</li>
                      <li>Research and innovation promotion</li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-3 sm:mb-4">
                    ভিশন ২০৩০: একটি সমৃদ্ধ বাংলাদেশ
                  </h2>
                  <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
                    একটি গণতান্ত্রিক, ন্যায়বিচারপূর্ণ এবং সমৃদ্ধ বাংলাদেশ গড়া
                    যেখানে প্রতিটি নাগরিক মর্যাদার সাথে বাঁচতে পারে
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                  <div className="text-center p-4 sm:p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl sm:text-4xl text-green-600 mb-3 sm:mb-4">🏛️</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2 sm:mb-3">
                      গণতান্ত্রিক শাসনব্যবস্থা
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      গণতান্ত্রিক প্রতিষ্ঠান পুনরুদ্ধার এবং স্বচ্ছ, জবাবদিহিমূলক
                      শাসন নিশ্চিত করা
                    </p>
                  </div>

                  <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-lg">
                    <div className="text-3xl sm:text-4xl text-blue-600 mb-3 sm:mb-4">⚖️</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2 sm:mb-3">
                      সামাজিক ন্যায়বিচার
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      সকল নাগরিকের জন্য সমান অধিকার, সুযোগ এবং ন্যায়বিচার
                      নিশ্চিত করা
                    </p>
                  </div>

                  <div className="text-center p-4 sm:p-6 bg-orange-50 rounded-lg">
                    <div className="text-3xl sm:text-4xl text-orange-600 mb-3 sm:mb-4">📈</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-orange-800 mb-2 sm:mb-3">
                      অর্থনৈতিক প্রবৃদ্ধি
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      টেকসই অর্থনৈতিক উন্নয়ন অর্জন যা সকল শ্রেণীর উপকারে আসে
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-red-700 mb-3 sm:mb-4">
                      রাজনৈতিক সংস্কার
                    </h3>
                    <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2 sm:space-y-3">
                      <li>স্বাধীন ও নিরপেক্ষ নির্বাচনী ব্যবস্থা পুনরুদ্ধার</li>
                      <li>সংসদীয় গণতন্ত্র শক্তিশালীকরণ</li>
                      <li>বিচার বিভাগের স্বাধীনতা নিশ্চিত করা</li>
                      <li>সংবাদপত্রের স্বাধীনতা ও নাগরিক অধিকার রক্ষা</li>
                      <li>সর্বস্তরে দুর্নীতি প্রতিরোধ</li>
                      <li>স্থানীয় সরকারে ক্ষমতা বিকেন্দ্রীকরণ</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-red-700 mb-3 sm:mb-4">
                      অর্থনৈতিক উন্নয়ন
                    </h3>
                    <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2 sm:space-y-3">
                      <li>বেসরকারি খাতের বিনিয়োগ উৎসাহিত করা</li>
                      <li>ক্ষুদ্র ও মাঝারি শিল্প এবং উদ্যোক্তা উন্নয়ন</li>
                      <li>কৃষি আধুনিকীকরণ ও খাদ্য নিরাপত্তা</li>
                      <li>রপ্তানিমুখী শিল্প সম্প্রসারণ</li>
                      <li>কর্মসংস্থানের সুযোগ সৃষ্টি</li>
                      <li>আয় বৈষম্য হ্রাস</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-red-700 mb-3 sm:mb-4">
                      সামাজিক উন্নয়ন
                    </h3>
                    <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2 sm:space-y-3">
                      <li>সবার জন্য মানসম্পন্ন শিক্ষা</li>
                      <li>সর্বজনীন স্বাস্থ্যসেবা ব্যবস্থা</li>
                      <li>নারী ক্ষমতায়ন কর্মসূচি</li>
                      <li>যুব উন্নয়ন উদ্যোগ</li>
                      <li>সামাজিক নিরাপত্তা বেষ্টনী সম্প্রসারণ</li>
                      <li>সাংস্কৃতিক ঐতিহ্য সংরক্ষণ</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-red-700 mb-3 sm:mb-4">
                      অবকাঠামো ও প্রযুক্তি
                    </h3>
                    <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-2 sm:space-y-3">
                      <li>ডিজিটাল বাংলাদেশ বাস্তবায়ন</li>
                      <li>পরিবহন নেটওয়ার্ক আধুনিকীকরণ</li>
                      <li>জ্বালানি নিরাপত্তা ও নবায়নযোগ্য উৎস</li>
                      <li>স্মার্ট সিটি উন্নয়ন</li>
                      <li>জলবায়ু সহনশীল অবকাঠামো</li>
                      <li>গবেষণা ও উদ্ভাবন প্রচার</li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-red-600 text-white p-4 sm:p-6 lg:p-8 rounded-lg text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            {lang === "EN"
              ? "Together We Can Build a Better Bangladesh"
              : "একসাথে আমরা একটি উন্নত বাংলাদেশ গড়তে পারি"}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            {lang === "EN"
              ? "This vision requires the participation and commitment of every citizen. Join us in building the Bangladesh of our dreams."
              : "এই দৃষ্টিভঙ্গি বাস্তবায়নে প্রতিটি নাগরিকের অংশগ্রহণ ও অঙ্গীকার প্রয়োজন। আমাদের স্বপ্নের বাংলাদেশ গড়তে আমাদের সাথে যোগ দিন।"}
          </p>
        </div>
      </div>
    </div>
  );
}
