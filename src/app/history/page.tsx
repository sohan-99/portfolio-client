"use client";
import { useLanguage } from "../components/LanguageContext";

export default function HistoryPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          {lang === "EN" ? "History" : "ইতিহাস"}
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            {lang === "EN" ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                    A Legacy of Service
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    The history of KM Mahbubar Rahman Harej is deeply
                    intertwined with the political and social development of
                    Bangladesh. From humble beginnings to becoming a respected
                    leader, this journey reflects dedication, sacrifice, and
                    unwavering commitment to the people.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-3">
                      Early Life & Background
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Born and raised in Sherpur, Bogura</li>
                      <li>Grew up in a politically aware family</li>
                      <li>
                        Early exposure to social issues and community problems
                      </li>
                      <li>
                        Educational foundation that shaped political thinking
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-3">
                      Political Awakening
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Involvement in student politics</li>
                      <li>Active participation in democratic movements</li>
                      <li>Leadership roles in local organizations</li>
                      <li>Building connections with grassroots communities</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-semibold text-red-700 mb-4">
                    Historical Milestones
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-800 mb-2">
                        First Electoral Victory
                      </h4>
                      <p className="text-gray-700">
                        Won the first election with overwhelming public support,
                        marking the beginning of a distinguished political
                        career.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        Development Initiatives
                      </h4>
                      <p className="text-gray-700">
                        Launched multiple development projects that transformed
                        the socio-economic landscape of the constituency.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-semibold text-orange-800 mb-2">
                        Democratic Movements
                      </h4>
                      <p className="text-gray-700">
                        Played crucial roles in various democratic movements and
                        constitutional reforms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Legacy and Impact
                  </h3>
                  <p className="text-gray-700">
                    The historical journey of KM Mahbubar Rahman Harej continues
                    to inspire future generations. His commitment to democratic
                    values, social justice, and people-centered development has
                    left an indelible mark on the political landscape of
                    Bangladesh.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                    সেবার ঐতিহ্য
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    কেএম মাহবুবার রহমান হারেজের ইতিহাস বাংলাদেশের রাজনৈতিক ও
                    সামাজিক উন্নয়নের সাথে গভীরভাবে জড়িত। বিনম্র শুরু থেকে একজন
                    সম্মানিত নেতা হয়ে ওঠার এই যাত্রা নিষ্ঠা, ত্যাগ এবং জনগণের
                    প্রতি অটুট অঙ্গীকারের প্রতিফলন।
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-3">
                      প্রাথমিক জীবন ও পটভূমি
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>বগুড়ার শেরপুরে জন্ম ও বেড়ে ওঠা</li>
                      <li>রাজনৈতিকভাবে সচেতন পরিবারে বেড়ে ওঠা</li>
                      <li>
                        সামাজিক সমস্যা ও কমিউনিটির সমস্যার সাথে প্রাথমিক পরিচয়
                      </li>
                      <li>রাজনৈতিক চিন্তাভাবনা গঠনকারী শিক্ষাগত ভিত্তি</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-3">
                      রাজনৈতিক জাগরণ
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>ছাত্র রাজনীতিতে সম্পৃক্ততা</li>
                      <li>গণতান্ত্রিক আন্দোলনে সক্রিয় অংশগ্রহণ</li>
                      <li>স্থানীয় সংগঠনে নেতৃত্বের ভূমিকা</li>
                      <li>তৃণমূল সম্প্রদায়ের সাথে সংযোগ স্থাপন</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-semibold text-red-700 mb-4">
                    ঐতিহাসিক মাইলফলক
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-800 mb-2">
                        প্রথম নির্বাচনী বিজয়
                      </h4>
                      <p className="text-gray-700">
                        অপ্রতিরোধ্য জনসমর্থন নিয়ে প্রথম নির্বাচনে জয়লাভ, যা
                        একটি বিশিষ্ট রাজনৈতিক জীবনের সূচনা করে।
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        উন্নয়ন উদ্যোগ
                      </h4>
                      <p className="text-gray-700">
                        একাধিক উন্নয়ন প্রকল্প চালু করেছেন যা নির্বাচনী এলাকার
                        আর্থসামাজিক চেহারা পরিবর্তন করেছে।
                      </p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-semibold text-orange-800 mb-2">
                        গণতান্ত্রিক আন্দোলন
                      </h4>
                      <p className="text-gray-700">
                        বিভিন্ন গণতান্ত্রিক আন্দোলন ও সাংবিধানিক সংস্কারে
                        গুরুত্বপূর্ণ ভূমিকা পালন।
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    উত্তরাধিকার ও প্রভাব
                  </h3>
                  <p className="text-gray-700">
                    কেএম মাহবুবার রহমান হারেজের ঐতিহাসিক যাত্রা ভবিষ্যৎ
                    প্রজন্মকে অনুপ্রাণিত করে চলেছে। গণতান্ত্রিক মূল্যবোধ,
                    সামাজিক ন্যায়বিচার এবং জনকেন্দ্রিক উন্নয়নের প্রতি তার
                    অঙ্গীকার বাংলাদেশের রাজনৈতিক দৃশ্যপটে এক অমোচনীয় ছাপ
                    রেখেছে।
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
