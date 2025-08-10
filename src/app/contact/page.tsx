"use client";
import { useLanguage } from "../components/LanguageContext";

export default function ContactPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          {lang === "EN" ? "Contact" : "যোগাযোগ"}
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            {lang === "EN" ? (
              <>
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-700">
                    I am always available to hear from the people and address
                    their concerns. Please feel free to reach out through any of
                    the following channels.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-4">
                      Office Address
                    </h3>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">
                        <strong>Constituency Office:</strong>
                        <br />
                        Sherpur-Dhunat
                        <br />
                        Bogura District
                        <br />
                        Bangladesh
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold text-green-700 mb-4 mt-6">
                      Office Hours
                    </h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-gray-700">
                        <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
                        <br />
                        <strong>Saturday:</strong> 9:00 AM - 2:00 PM
                        <br />
                        <strong>Sunday:</strong> By Appointment Only
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">
                          Phone
                        </h4>
                        <p className="text-gray-700">
                          Office: +880-XXX-XXXXXXX
                          <br />
                          Mobile: +880-XXX-XXXXXXX
                        </p>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">
                          Email
                        </h4>
                        <p className="text-gray-700">
                          Official: harej.official@example.com
                          <br />
                          Personal: km.harej@example.com
                        </p>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">
                          Social Media
                        </h4>
                        <p className="text-gray-700">
                          Facebook: @mahbuburrahman.harej
                          <br />
                          Twitter: @kmharej
                          <br />
                          YouTube: KM Mahbubar Rahman Harej
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Public Meetings
                  </h3>
                  <p className="text-gray-700 mb-4">
                    I hold regular public meetings in different areas of the
                    constituency to meet with citizens and discuss their issues
                    directly.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      First Saturday of every month - Sherpur Community Center
                    </li>
                    <li>
                      Third Saturday of every month - Dhunat Union Parishad
                    </li>
                    <li>
                      Special meetings arranged during times of crisis or major
                      developments
                    </li>
                  </ul>
                </div>

                <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-3">
                    Emergency Contact
                  </h3>
                  <p className="text-gray-700">
                    For urgent matters requiring immediate attention, please
                    call the emergency hotline:
                    <strong> +880-XXX-EMERGENCY</strong> (Available 24/7)
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                    যোগাযোগ করুন
                  </h2>
                  <p className="text-lg text-gray-700">
                    আমি সর্বদা জনগণের কথা শুনতে এবং তাদের উদ্বেগের সমাধানে
                    প্রস্তুত। অনুগ্রহ করে নিম্নোক্ত যেকোনো মাধ্যমে যোগাযোগ করুন।
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-4">
                      অফিসের ঠিকানা
                    </h3>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">
                        <strong>নির্বাচনী এলাকার অফিস:</strong>
                        <br />
                        শেরপুর-ধুনট
                        <br />
                        বগুড়া জেলা
                        <br />
                        বাংলাদেশ
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold text-green-700 mb-4 mt-6">
                      অফিসের সময়
                    </h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-gray-700">
                        <strong>সোমবার - শুক্রবার:</strong> সকাল ৯টা - বিকেল ৫টা
                        <br />
                        <strong>শনিবার:</strong> সকাল ৯টা - দুপুর ২টা
                        <br />
                        <strong>রবিবার:</strong> শুধুমাত্র অ্যাপয়েন্টমেন্টে
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-4">
                      যোগাযোগের তথ্য
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">
                          ফোন
                        </h4>
                        <p className="text-gray-700">
                          অফিস: +৮৮০-XXX-XXXXXXX
                          <br />
                          মোবাইল: +৮৮০-XXX-XXXXXXX
                        </p>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">
                          ইমেইল
                        </h4>
                        <p className="text-gray-700">
                          অফিসিয়াল: harej.official@example.com
                          <br />
                          ব্যক্তিগত: km.harej@example.com
                        </p>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">
                          সোশ্যাল মিডিয়া
                        </h4>
                        <p className="text-gray-700">
                          ফেসবুক: @mahbuburrahman.harej
                          <br />
                          টুইটার: @kmharej
                          <br />
                          ইউটিউব: কেএম মাহবুবার রহমান হারেজ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    জনসভা
                  </h3>
                  <p className="text-gray-700 mb-4">
                    আমি নির্বাচনী এলাকার বিভিন্ন এলাকায় নিয়মিত জনসভা করি
                    নাগরিকদের সাথে সাক্ষাৎ করতে এবং সরাসরি তাদের সমস্যা নিয়ে
                    আলোচনা করতে।
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>প্রতি মাসের প্রথম শনিবার - শেরপুর কমিউনিটি সেন্টার</li>
                    <li>প্রতি মাসের তৃতীয় শনিবার - ধুনট ইউনিয়ন পরিষদ</li>
                    <li>সংকট বা বড় উন্নয়নের সময় বিশেষ সভার আয়োজন</li>
                  </ul>
                </div>

                <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-3">
                    জরুরি যোগাযোগ
                  </h3>
                  <p className="text-gray-700">
                    জরুরি বিষয়ে তাৎক্ষণিক মনোযোগের প্রয়োজন হলে, অনুগ্রহ করে
                    জরুরি হটলাইনে কল করুন:
                    <strong> +৮৮০-XXX-EMERGENCY</strong> (২৪/৭ উপলব্ধ)
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
