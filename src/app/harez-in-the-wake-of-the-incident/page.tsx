"use client";
import { useLanguage } from "../components/LanguageContext";

export default function HarezInWakeOfIncidentPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          {lang === "EN"
            ? "Harez in the Wake of the Incident"
            : "ঘটনার প্রেক্ষিতে হারেজ"}
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            {lang === "EN" ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-red-700 mb-4">
                    Standing Firm in Crisis
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    In times of political turmoil and crisis, true leadership is
                    tested. Throughout various incidents and challenges that
                    have shaped our political landscape, I have remained
                    steadfast in my commitment to democratic principles and the
                    welfare of the people.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">
                    Response to Political Crisis
                  </h3>
                  <p className="text-gray-700 mb-4">
                    When democratic institutions came under threat, I stood with
                    the people and defended constitutional rights. My response
                    was measured, principled, and focused on the long-term
                    interests of Bangladesh.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Organized peaceful protests and demonstrations</li>
                    <li>Provided legal support to affected citizens</li>
                    <li>Maintained unity within the party ranks</li>
                    <li>Coordinated with civil society organizations</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                      Leadership During Adversity
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Maintained calm and composed leadership</li>
                      <li>Protected party workers and supporters</li>
                      <li>
                        Continued serving the constituency despite challenges
                      </li>
                      <li>Upheld democratic values and principles</li>
                      <li>Promoted dialogue and peaceful resolution</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                      Community Support
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Provided assistance to affected families</li>
                      <li>Organized relief and support programs</li>
                      <li>Maintained communication with constituents</li>
                      <li>Ensured continuity of essential services</li>
                      <li>Built stronger community bonds</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">
                    Lessons Learned
                  </h3>
                  <p className="text-gray-700">
                    Every crisis teaches valuable lessons. These experiences
                    have strengthened my resolve to work for a stronger
                    democracy, better institutions, and a more resilient
                    political system that can withstand future challenges while
                    serving the people effectively.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-red-700 mb-4">
                    সংকটে অটল অবস্থান
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    রাজনৈতিক অস্থিরতা ও সংকটের সময়ে প্রকৃত নেতৃত্বের পরীক্ষা
                    হয়। আমাদের রাজনৈতিক পরিস্থিতি গঠনকারী বিভিন্ন ঘটনা ও
                    চ্যালেঞ্জের মধ্যেও আমি গণতান্ত্রিক নীতি ও জনগণের কল্যাণে
                    আমার অঙ্গীকারে অবিচল থেকেছি।
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">
                    রাজনৈতিক সংকটে সাড়া
                  </h3>
                  <p className="text-gray-700 mb-4">
                    যখন গণতান্ত্রিক প্রতিষ্ঠানগুলি হুমকির মুখে পড়েছে, আমি
                    জনগণের পাশে দাঁড়িয়েছি এবং সাংবিধানিক অধিকার রক্ষা করেছি।
                    আমার প্রতিক্রিয়া ছিল পরিমিত, নীতিনিষ্ঠ এবং বাংলাদেশের
                    দীর্ঘমেয়াদী স্বার্থের উপর কেন্দ্রীভূত।
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>শান্তিপূর্ণ বিক্ষোভ ও প্রদর্শনী সংগঠিত করেছি</li>
                    <li>ক্ষতিগ্রস্ত নাগরিকদের আইনী সহায়তা প্রদান</li>
                    <li>দলের মধ্যে ঐক্য বজায় রেখেছি</li>
                    <li>সুশীল সমাজের সংগঠনগুলোর সাথে সমন্বয়</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                      প্রতিকূলতায় নেতৃত্ব
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>শান্ত ও স্থিতিশীল নেতৃত্ব বজায় রেখেছি</li>
                      <li>দলীয় কর্মী ও সমর্থকদের সুরক্ষা</li>
                      <li>
                        চ্যালেঞ্জ সত্ত্বেও নির্বাচনী এলাকার সেবা অব্যাহত রেখেছি
                      </li>
                      <li>গণতান্ত্রিক মূল্যবোধ ও নীতি অক্ষুণ্ণ রেখেছি</li>
                      <li>কথোপকথন ও শান্তিপূর্ণ সমাধানের প্রচার</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">
                      কমিউনিটি সহায়তা
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>ক্ষতিগ্রস্ত পরিবারগুলোকে সহায়তা প্রদান</li>
                      <li>ত্রাণ ও সহায়তা কর্মসূচি সংগঠিত করেছি</li>
                      <li>
                        নির্বাচনী এলাকার মানুষের সাথে যোগাযোগ বজায় রেখেছি
                      </li>
                      <li>প্রয়োজনীয় সেবার ধারাবাহিকতা নিশ্চিত করেছি</li>
                      <li>শক্তিশালী কমিউনিটি বন্ধন গড়েছি</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">
                    শিক্ষাগ্রহণ
                  </h3>
                  <p className="text-gray-700">
                    প্রতিটি সংকট মূল্যবান শিক্ষা দেয়। এই অভিজ্ঞতাগুলো আমার
                    সংকল্পকে আরও শক্তিশালী করেছে একটি শক্তিশালী গণতন্ত্র, উন্নত
                    প্রতিষ্ঠান এবং আরও স্থিতিস্থাপক রাজনৈতিক ব্যবস্থার জন্য কাজ
                    করার, যা ভবিষ্যতের চ্যালেঞ্জ মোকাবেলা করতে পারবে এবং জনগণের
                    কার্যকর সেবা করতে পারবে।
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
