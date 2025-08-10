"use client";
import { useLanguage } from "../components/LanguageContext";

export default function PlanningForDhunutPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          {lang === "EN" ? "Planning for Dhunut" : "ধুনট নিয়ে পরিকল্পনা"}
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            {lang === "EN" ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-green-700 mb-4">
                    Dhunut Development Strategy
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Dhunut, as part of my constituency, deserves focused
                    attention for its unique challenges and opportunities. This
                    strategic plan addresses the specific needs of Dhunut while
                    integrating it with the broader regional development vision.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 mb-3">
                      Agricultural Enhancement
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Modern irrigation system implementation</li>
                      <li>High-yield crop variety introduction</li>
                      <li>Farmer training and support programs</li>
                      <li>Agricultural equipment subsidies</li>
                      <li>Crop insurance and financial support</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 mb-3">
                      Rural Infrastructure
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Village road improvement and maintenance</li>
                      <li>Rural electrification expansion</li>
                      <li>Clean water supply projects</li>
                      <li>Telecommunication network enhancement</li>
                      <li>Drainage and flood management systems</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 mb-3">
                      Education & Skills
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Primary school infrastructure upgrade</li>
                      <li>Adult literacy programs</li>
                      <li>Computer literacy initiatives</li>
                      <li>Skill development workshops</li>
                      <li>Scholarship programs for students</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 mb-3">
                      Healthcare Access
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Mobile healthcare units</li>
                      <li>Maternal and child health programs</li>
                      <li>Vaccination and immunization drives</li>
                      <li>Health awareness campaigns</li>
                      <li>Traditional medicine integration</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                    Community Engagement Strategy
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Success in Dhunut depends on active community participation.
                    Our approach includes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Regular community meetings and consultations</li>
                    <li>Local leadership development programs</li>
                    <li>Youth engagement in development activities</li>
                    <li>Women participation in decision-making processes</li>
                    <li>Transparent project monitoring and feedback systems</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-green-700 mb-4">
                    ধুনট উন্নয়ন কৌশল
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    ধুনট, আমার নির্বাচনী এলাকার অংশ হিসেবে, এর অনন্য চ্যালেঞ্জ
                    এবং সুযোগের জন্য বিশেষ মনোযোগ প্রাপ্য। এই কৌশলগত পরিকল্পনা
                    ধুনটের নির্দিষ্ট প্রয়োজন মেটাতে এবং একে বৃহত্তর আঞ্চলিক
                    উন্নয়ন দৃষ্টিভঙ্গির সাথে সংহত করার লক্ষ্যে প্রণীত।
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 mb-3">
                      কৃষি উন্নয়ন
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>আধুনিক সেচ ব্যবস্থা বাস্তবায়ন</li>
                      <li>উচ্চ ফলনশীল শস্যের জাত প্রবর্তন</li>
                      <li>কৃষক প্রশিক্ষণ ও সহায়তা কর্মসূচি</li>
                      <li>কৃষি যন্ত্রপাতি ভর্তুকি</li>
                      <li>ফসল বীমা ও আর্থিক সহায়তা</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 mb-3">
                      গ্রামীণ অবকাঠামো
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>গ্রাম্য রাস্তার উন্নতি ও রক্ষণাবেক্ষণ</li>
                      <li>গ্রামীণ বিদ্যুতায়ন সম্প্রসারণ</li>
                      <li>বিশুদ্ধ পানি সরবরাহ প্রকল্প</li>
                      <li>টেলিযোগাযোগ নেটওয়ার্ক উন্নতি</li>
                      <li>নিষ্কাশন ও বন্যা ব্যবস্থাপনা ব্যবস্থা</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 mb-3">
                      শিক্ষা ও দক্ষতা
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>প্রাথমিক বিদ্যালয়ের অবকাঠামো উন্নয়ন</li>
                      <li>প্রাপ্তবয়স্ক শিক্ষা কর্মসূচি</li>
                      <li>কম্পিউটার শিক্ষা উদ্যোগ</li>
                      <li>দক্ষতা উন্নয়ন কর্মশালা</li>
                      <li>শিক্ষার্থীদের জন্য বৃত্তি কর্মসূচি</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 mb-3">
                      স্বাস্থ্যসেবা সুবিধা
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>মোবাইল স্বাস্থ্যসেবা ইউনিট</li>
                      <li>মাতৃ ও শিশু স্বাস্থ্য কর্মসূচি</li>
                      <li>টিকাদান ও রোগ প্রতিরোধ অভিযান</li>
                      <li>স্বাস্থ্য সচেতনতা প্রচারণা</li>
                      <li>ঐতিহ্যবাহী চিকিৎসা সংযোজন</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                    কমিউনিটি সম্পৃক্ততার কৌশল
                  </h2>
                  <p className="text-gray-700 mb-4">
                    ধুনটে সাফল্য নির্ভর করে সক্রিয় কমিউনিটি অংশগ্রহণের উপর।
                    আমাদের পদ্ধতি অন্তর্ভুক্ত করে:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>নিয়মিত কমিউনিটি সভা ও পরামর্শ</li>
                    <li>স্থানীয় নেতৃত্ব উন্নয়ন কর্মসূচি</li>
                    <li>উন্নয়ন কার্যক্রমে যুব সম্পৃক্ততা</li>
                    <li>সিদ্ধান্ত গ্রহণ প্রক্রিয়ায় নারী অংশগ্রহণ</li>
                    <li>স্বচ্ছ প্রকল্প নিরীক্ষণ ও ফিডব্যাক ব্যবস্থা</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
