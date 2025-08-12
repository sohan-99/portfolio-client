"use client";
import { useLanguage } from "../components/LanguageContext";
import { useState } from "react";

export default function SendMessagePage() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert(
      lang === "EN"
        ? "Message sent successfully!"
        : "বার্তা সফলভাবে পাঠানো হয়েছে!"
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          {lang === "EN" ? "Send Message" : "বার্তা পাঠান"}
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              {lang === "EN" ? "Share Your Thoughts" : "আপনার মতামত জানান"}
            </h2>
            <p className="text-lg text-gray-700">
              {lang === "EN"
                ? "Your voice matters to me. Please share your concerns, suggestions, or any message you'd like to convey."
                : "আপনার কণ্ঠস্বর আমার কাছে গুরুত্বপূর্ণ। অনুগ্রহ করে আপনার উদ্বেগ, পরামর্শ বা যেকোনো বার্তা জানান।"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {lang === "EN" ? "Full Name *" : "পূর্ণ নাম *"}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-black"
                  placeholder={
                    lang === "EN"
                      ? "Enter your full name"
                      : "আপনার পূর্ণ নাম লিখুন"
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {lang === "EN" ? "Email Address" : "ইমেইল ঠিকানা"}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-black"
                  placeholder={
                    lang === "EN" ? "Enter your email" : "আপনার ইমেইল লিখুন"
                  }
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {lang === "EN" ? "Phone Number" : "ফোন নম্বর"}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-black"
                  placeholder={
                    lang === "EN"
                      ? "Enter your phone number"
                      : "আপনার ফোন নম্বর লিখুন"
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {lang === "EN" ? "Subject *" : "বিষয় *"}
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-black"
                >
                  <option value="">
                    {lang === "EN"
                      ? "Select a subject"
                      : "একটি বিষয় নির্বাচন করুন"}
                  </option>
                  <option value="general">
                    {lang === "EN" ? "General Inquiry" : "সাধারণ জিজ্ঞাসা"}
                  </option>
                  <option value="complaint">
                    {lang === "EN" ? "Complaint" : "অভিযোগ"}
                  </option>
                  <option value="suggestion">
                    {lang === "EN" ? "Suggestion" : "পরামর্শ"}
                  </option>
                  <option value="development">
                    {lang === "EN" ? "Development Project" : "উন্নয়ন প্রকল্প"}
                  </option>
                  <option value="support">
                    {lang === "EN" ? "Request for Support" : "সহায়তার অনুরোধ"}
                  </option>
                  <option value="other">
                    {lang === "EN" ? "Other" : "অন্যান্য"}
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {lang === "EN" ? "Your Message *" : "আপনার বার্তা *"}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-vertical text-black"
                placeholder={
                  lang === "EN"
                    ? "Please describe your message in detail. Your feedback is valuable to me."
                    : "অনুগ্রহ করে আপনার বার্তা বিস্তারিতভাবে বর্ণনা করুন। আপনার মতামত আমার কাছে মূল্যবান।"
                }
              ></textarea>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                {lang === "EN" ? "Privacy Notice" : "গোপনীয়তার নোটিশ"}
              </h3>
              <p className="text-sm text-blue-700">
                {lang === "EN"
                  ? "Your personal information will be kept confidential and used only to respond to your message. We do not share your information with third parties."
                  : "আপনার ব্যক্তিগত তথ্য গোপনীয় রাখা হবে এবং শুধুমাত্র আপনার বার্তার উত্তর দিতে ব্যবহৃত হবে। আমরা তৃতীয় পক্ষের সাথে আপনার তথ্য ভাগ করি না।"}
              </p>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {lang === "EN" ? "Send Message" : "বার্তা পাঠান"}
              </button>
            </div>
          </form>

          <div className="mt-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              {lang === "EN" ? "Response Time" : "উত্তরের সময়"}
            </h3>
            <p className="text-green-700">
              {lang === "EN"
                ? "I personally review all messages and aim to respond within 2-3 business days. For urgent matters, please use the emergency contact number."
                : "আমি ব্যক্তিগতভাবে সকল বার্তা পর্যালোচনা করি এবং ২-৩ কার্যদিবসের মধ্যে উত্তর দেওয়ার চেষ্টা করি। জরুরি বিষয়ের জন্য, অনুগ্রহ করে জরুরি যোগাযোগ নম্বর ব্যবহার করুন।"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
