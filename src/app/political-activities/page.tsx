"use client";
import { useLanguage } from "../components/LanguageContext";

export default function PoliticalActivitiesPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          {lang === "EN" ? "Political Activities" : "রাজনৈতিক কার্যক্রম"}
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            {lang === "EN" ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                    Journey in Politics
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    My political journey spans decades of dedicated service to
                    the people and unwavering commitment to democratic
                    principles. Through various roles and responsibilities, I
                    have worked tirelessly for the betterment of my constituency
                    and the nation.
                  </p>
                </div>

                <div className="timeline space-y-8">
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                      Early Political Involvement
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Started political career with grassroots involvement in
                      community issues and local politics.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Youth wing leadership positions</li>
                      <li>Community organizing and mobilization</li>
                      <li>Local issue advocacy</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">
                      Party Leadership Roles
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Progressed through various party positions, gaining
                      experience in organizational management and policy
                      development.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>District committee member</li>
                      <li>Regional organizing secretary</li>
                      <li>Policy committee participation</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h3 className="text-xl font-semibold text-orange-800 mb-3">
                      Electoral Success
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Successfully contested and won elections, representing the
                      constituency with dedication and integrity.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Multiple successful electoral campaigns</li>
                      <li>Strong grassroots support base</li>
                      <li>Consistent voter confidence</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">
                      Legislative Work
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Active participation in parliamentary proceedings and
                      legislative development.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Committee memberships and contributions</li>
                      <li>Bill sponsorship and amendments</li>
                      <li>Parliamentary question sessions</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Current Activities
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-red-700 mb-3">
                        Constituency Work
                      </h3>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Regular public meetings and consultations</li>
                        <li>Development project monitoring</li>
                        <li>Grievance resolution services</li>
                        <li>Infrastructure improvement initiatives</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-red-700 mb-3">
                        National Politics
                      </h3>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Party policy formulation</li>
                        <li>Opposition coordination</li>
                        <li>Democratic movement leadership</li>
                        <li>Media engagement and communication</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                    রাজনীতিতে যাত্রা
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    আমার রাজনৈতিক যাত্রা কয়েক দশক ধরে জনগণের প্রতি নিবেদিত সেবা
                    এবং গণতান্ত্রিক নীতির প্রতি অটুট অঙ্গীকারের মধ্য দিয়ে
                    বিস্তৃত। বিভিন্ন ভূমিকা ও দায়িত্বের মাধ্যমে আমি আমার
                    নির্বাচনী এলাকা এবং জাতির উন্নতির জন্য নিরলসভাবে কাজ করেছি।
                  </p>
                </div>

                <div className="timeline space-y-8">
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                      প্রাথমিক রাজনৈতিক সম্পৃক্ততা
                    </h3>
                    <p className="text-gray-700 mb-3">
                      কমিউনিটির সমস্যা এবং স্থানীয় রাজনীতিতে তৃণমূল পর্যায়ের
                      সম্পৃক্ততার মাধ্যমে রাজনৈতিক জীবন শুরু।
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>যুব সংগঠনের নেতৃত্ব পদ</li>
                      <li>কমিউনিটি সংগঠন ও সংঘবদ্ধকরণ</li>
                      <li>স্থানীয় সমস্যার পক্ষে ওকালতি</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">
                      দলীয় নেতৃত্বের ভূমিকা
                    </h3>
                    <p className="text-gray-700 mb-3">
                      বিভিন্ন দলীয় পদের মাধ্যমে সাংগঠনিক ব্যবস্থাপনা এবং নীতি
                      প্রণয়নে অভিজ্ঞতা অর্জন।
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>জেলা কমিটির সদস্য</li>
                      <li>আঞ্চলিক সংগঠন সম্পাদক</li>
                      <li>নীতি কমিটিতে অংশগ্রহণ</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h3 className="text-xl font-semibold text-orange-800 mb-3">
                      নির্বাচনী সাফল্য
                    </h3>
                    <p className="text-gray-700 mb-3">
                      সফলভাবে নির্বাচনে প্রতিদ্বন্দ্বিতা করে জয়লাভ, নিষ্ঠা ও
                      সততার সাথে নির্বাচনী এলাকার প্রতিনিধিত্ব।
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>একাধিক সফল নির্বাচনী প্রচারণা</li>
                      <li>শক্তিশালী তৃণমূল সমর্থন ভিত্তি</li>
                      <li>ধারাবাহিক ভোটার আস্থা</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">
                      আইনপ্রণয়ন কাজ
                    </h3>
                    <p className="text-gray-700 mb-3">
                      সংসদীয় কার্যক্রম এবং আইনপ্রণয়ন উন্নয়নে সক্রিয়
                      অংশগ্রহণ।
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>কমিটি সদস্যপদ ও অবদান</li>
                      <li>বিল স্পনসরশিপ ও সংশোধনী</li>
                      <li>সংসদীয় প্রশ্ন অধিবেশন</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    বর্তমান কার্যক্রম
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-red-700 mb-3">
                        নির্বাচনী এলাকার কাজ
                      </h3>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>নিয়মিত জনসভা ও পরামর্শ সভা</li>
                        <li>উন্নয়ন প্রকল্প তত্ত্বাবধান</li>
                        <li>অভিযোগ নিষ্পত্তি সেবা</li>
                        <li>অবকাঠামো উন্নয়ন উদ্যোগ</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-red-700 mb-3">
                        জাতীয় রাজনীতি
                      </h3>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>দলীয় নীতি প্রণয়ন</li>
                        <li>বিরোধীদলীয় সমন্বয়</li>
                        <li>গণতান্ত্রিক আন্দোলনের নেতৃত্ব</li>
                        <li>মিডিয়া সম্পৃক্ততা ও যোগাযোগ</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
