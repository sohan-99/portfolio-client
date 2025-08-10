"use client";
import { useLanguage } from "../components/LanguageContext";

export default function NewsAndMediaPage() {
  const { lang } = useLanguage();

  const newsItems = [
    {
      id: 1,
      titleEN: "Recent Development Projects Announcement",
      titleBN: "সাম্প্রতিক উন্নয়ন প্রকল্পের ঘোষণা",
      date: "2025-01-15",
      summaryEN:
        "New infrastructure projects announced for Sherpur-Dhunat constituency including road improvements and healthcare facilities.",
      summaryBN:
        "শেরপুর-ধুনট নির্বাচনী এলাকার জন্য নতুন অবকাঠামো প্রকল্প ঘোষণা করা হয়েছে যার মধ্যে রয়েছে সড়ক উন্নয়ন ও স্বাস্থ্যসেবা সুবিধা।",
    },
    {
      id: 2,
      titleEN: "Parliamentary Address on Education Reform",
      titleBN: "শিক্ষা সংস্কারে সংসদীয় ভাষণ",
      date: "2025-01-10",
      summaryEN:
        "Delivered a comprehensive speech on the need for educational reforms and increased funding for rural schools.",
      summaryBN:
        "শিক্ষা সংস্কারের প্রয়োজনীয়তা এবং গ্রামীণ স্কুলের জন্য বর্ধিত অর্থায়নের উপর একটি ব্যাপক ভাষণ প্রদান করেছেন।",
    },
    {
      id: 3,
      titleEN: "Community Meeting on Agricultural Support",
      titleBN: "কৃষি সহায়তায় কমিউনিটি সভা",
      date: "2025-01-05",
      summaryEN:
        "Held a successful community meeting to discuss agricultural support programs and farmer subsidies.",
      summaryBN:
        "কৃষি সহায়তা কর্মসূচি এবং কৃষক ভর্তুকি নিয়ে আলোচনার জন্য একটি সফল কমিউনিটি সভা অনুষ্ঠিত হয়েছে।",
    },
  ];

  const mediaAppearances = [
    {
      id: 1,
      titleEN: "Interview on National Development",
      titleBN: "জাতীয় উন্নয়নে সাক্ষাৎকার",
      platform: "Bangladesh Television",
      date: "2025-01-12",
      type: "TV Interview",
    },
    {
      id: 2,
      titleEN: "Radio Discussion on Democracy",
      titleBN: "গণতন্ত্রে রেডিও আলোচনা",
      platform: "Radio Bangladesh",
      date: "2025-01-08",
      type: "Radio Show",
    },
    {
      id: 3,
      titleEN: "Press Conference on Local Issues",
      titleBN: "স্থানীয় সমস্যায় সংবাদ সম্মেলন",
      platform: "Multiple Media Outlets",
      date: "2025-01-03",
      type: "Press Conference",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          {lang === "EN" ? "News and Media" : "সংবাদ ও মিডিয়া"}
        </h1>

        {/* Recent News Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            {lang === "EN"
              ? "Recent News & Updates"
              : "সাম্প্রতিক সংবাদ ও আপডেট"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">
                    {new Date(news.date).toLocaleDateString(
                      lang === "EN" ? "en-US" : "bn-BD"
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {lang === "EN" ? news.titleEN : news.titleBN}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {lang === "EN" ? news.summaryEN : news.summaryBN}
                  </p>
                  <button className="mt-4 text-green-600 hover:text-green-800 font-medium text-sm transition-colors">
                    {lang === "EN" ? "Read More →" : "আরও পড়ুন →"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Appearances Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">
            {lang === "EN" ? "Media Appearances" : "মিডিয়া উপস্থিতি"}
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-6">
              {mediaAppearances.map((media) => (
                <div
                  key={media.id}
                  className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {lang === "EN" ? media.titleEN : media.titleBN}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {media.platform}
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {media.type}
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                          {new Date(media.date).toLocaleDateString(
                            lang === "EN" ? "en-US" : "bn-BD"
                          )}
                        </span>
                      </div>
                    </div>
                    <button className="mt-3 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      {lang === "EN" ? "Watch/Listen" : "দেখুন/শুনুন"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Press Releases Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-700 mb-6">
            {lang === "EN" ? "Press Releases" : "প্রেস বিজ্ঞপ্তি"}
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  {lang === "EN"
                    ? "Latest Statement on Democracy"
                    : "গণতন্ত্রে সর্বশেষ বিবৃতি"}
                </h3>
                <p className="text-purple-700 text-sm mb-3">January 20, 2025</p>
                <p className="text-gray-700 text-sm">
                  {lang === "EN"
                    ? "Official statement regarding the current political situation and the importance of democratic values."
                    : "বর্তমান রাজনৈতিক পরিস্থিতি এবং গণতান্ত্রিক মূল্যবোধের গুরুত্ব সম্পর্কে অফিসিয়াল বিবৃতি।"}
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  {lang === "EN"
                    ? "Development Progress Report"
                    : "উন্নয়ন অগ্রগতি রিপোর্ট"}
                </h3>
                <p className="text-green-700 text-sm mb-3">January 15, 2025</p>
                <p className="text-gray-700 text-sm">
                  {lang === "EN"
                    ? "Comprehensive report on the progress of ongoing development projects in the constituency."
                    : "নির্বাচনী এলাকায় চলমান উন্নয়ন প্রকল্পের অগ্রগতির ব্যাপক রিপোর্ট।"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-red-700 mb-6">
            {lang === "EN"
              ? "Follow on Social Media"
              : "সোশ্যাল মিডিয়ায় অনুসরণ করুন"}
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">f</span>
              </div>
              <h3 className="font-semibold text-gray-800">Facebook</h3>
              <p className="text-sm text-gray-600 mt-1">
                25,000+ {lang === "EN" ? "Followers" : "অনুসারী"}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">▶</span>
              </div>
              <h3 className="font-semibold text-gray-800">YouTube</h3>
              <p className="text-sm text-gray-600 mt-1">
                10,000+ {lang === "EN" ? "Subscribers" : "সাবস্ক্রাইবার"}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">📷</span>
              </div>
              <h3 className="font-semibold text-gray-800">Instagram</h3>
              <p className="text-sm text-gray-600 mt-1">
                5,000+ {lang === "EN" ? "Followers" : "অনুসারী"}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">✈</span>
              </div>
              <h3 className="font-semibold text-gray-800">Telegram</h3>
              <p className="text-sm text-gray-600 mt-1">
                2,000+ {lang === "EN" ? "Members" : "সদস্য"}
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 mb-4">
              {lang === "EN"
                ? "Stay updated with the latest news, announcements, and activities by following our social media channels."
                : "আমাদের সোশ্যাল মিডিয়া চ্যানেল অনুসরণ করে সর্বশেষ খবর, ঘোষণা এবং কার্যক্রম সম্পর্কে আপডেট থাকুন।"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
