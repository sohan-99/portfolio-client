"use client";
import { useLanguage } from "../components/LanguageContext";

export default function PlanningForSherpurPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          {lang === "EN" ? "Planning for Sherpur" : "শেরপুরের পরিকল্পনা"}
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            {lang === "EN" ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-green-700 mb-4">
                    Development Vision for Sherpur
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Sherpur holds a special place in my heart as my birthplace
                    and the constituency I serve. My comprehensive development
                    plan aims to transform Sherpur into a model district that
                    serves as an example for rural development across
                    Bangladesh.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                      Infrastructure Development
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Road network improvement and connectivity</li>
                      <li>Bridge construction over major rivers</li>
                      <li>Digital infrastructure and internet connectivity</li>
                      <li>Electricity supply enhancement</li>
                      <li>Water supply and sanitation systems</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                      Economic Development
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Agricultural modernization programs</li>
                      <li>Small and medium enterprise development</li>
                      <li>Tourism industry promotion</li>
                      <li>Handicraft and cottage industry support</li>
                      <li>Market infrastructure development</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                      Education & Healthcare
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Quality education facility expansion</li>
                      <li>Technical and vocational training centers</li>
                      <li>Healthcare center upgrades</li>
                      <li>Specialist medical services</li>
                      <li>Health awareness programs</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                      Social Development
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Youth development programs</li>
                      <li>Women empowerment initiatives</li>
                      <li>Cultural heritage preservation</li>
                      <li>Sports and recreation facilities</li>
                      <li>Community center establishment</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Implementation Timeline
                  </h2>
                  <p className="text-gray-700">
                    This comprehensive plan will be implemented in phases over
                    the next 5 years, with priority given to basic
                    infrastructure and immediate needs of the people. Regular
                    monitoring and community feedback will ensure successful
                    implementation and adaptation of the plan as needed.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-green-700 mb-4">
                    শেরপুরের উন্নয়ন দৃষ্টিভঙ্গি
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    শেরপুর আমার হৃদয়ে একটি বিশেষ স্থান দখল করে আছে কারণ এটি
                    আমার জন্মভূমি এবং আমি যে নির্বাচনী এলাকার সেবা করি। আমার
                    ব্যাপক উন্নয়ন পরিকল্পনার লক্ষ্য হলো শেরপুরকে একটি আদর্শ
                    জেলায় রূপান্তরিত করা যা সমগ্র বাংলাদেশে গ্রামীণ উন্নয়নের
                    উদাহরণ হিসেবে কাজ করবে।
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                      অবকাঠামো উন্নয়ন
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>সড়ক নেটওয়ার্ক উন্নতি এবং সংযোগ</li>
                      <li>প্রধান নদীর উপর সেতু নির্মাণ</li>
                      <li>ডিজিটাল অবকাঠামো এবং ইন্টারনেট সংযোগ</li>
                      <li>বিদ্যুৎ সরবরাহ বৃদ্ধি</li>
                      <li>পানি সরবরাহ এবং স্যানিটেশন ব্যবস্থা</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                      অর্থনৈতিক উন্নয়ন
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>কৃষি আধুনিকীকরণ কর্মসূচি</li>
                      <li>ক্ষুদ্র ও মাঝারি শিল্প উন্নয়ন</li>
                      <li>পর্যটন শিল্পের প্রচার</li>
                      <li>হস্তশিল্প ও কুটির শিল্প সহায়তা</li>
                      <li>বাজার অবকাঠামো উন্নয়ন</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                      শিক্ষা ও স্বাস্থ্যসেবা
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>মানসম্পন্ন শিক্ষা সুবিধার সম্প্রসারণ</li>
                      <li>কারিগরি ও বৃত্তিমূলক প্রশিক্ষণ কেন্দ্র</li>
                      <li>স্বাস্থ্যকেন্দ্রের উন্নতি</li>
                      <li>বিশেষজ্ঞ চিকিৎসা সেবা</li>
                      <li>স্বাস্থ্য সচেতনতা কর্মসূচি</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                      সামাজিক উন্নয়ন
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>যুব উন্নয়ন কর্মসূচি</li>
                      <li>নারী ক্ষমতায়ন উদ্যোগ</li>
                      <li>সাংস্কৃতিক ঐতিহ্য সংরক্ষণ</li>
                      <li>ক্রীড়া ও বিনোদন সুবিধা</li>
                      <li>কমিউনিটি সেন্টার স্থাপন</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    বাস্তবায়নের সময়সূচি
                  </h2>
                  <p className="text-gray-700">
                    এই ব্যাপক পরিকল্পনাটি আগামী ৫ বছরে পর্যায়ক্রমে বাস্তবায়ন
                    করা হবে, যেখানে মৌলিক অবকাঠামো এবং জনগণের তাৎক্ষণিক
                    প্রয়োজনকে অগ্রাধিকার দেওয়া হবে। নিয়মিত মনিটরিং এবং
                    কমিউনিটি ফিডব্যাক সফল বাস্তবায়ন এবং প্রয়োজন অনুযায়ী
                    পরিকল্পনার অভিযোজন নিশ্চিত করবে।
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
