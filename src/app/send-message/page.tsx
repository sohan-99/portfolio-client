"use client";
import { useLanguage } from "../components/LanguageContext";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function SendMessagePage() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // EmailJS configuration from environment variables
      const serviceID =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_18qdp2a";
      const templateID =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_of9a68j";
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "uRDyux5DnSX6eTb8d";

      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      // Prepare template parameters with all information combined in message
      const fullMessage = `
===== Contact Form Message =====

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Subject: ${formData.subject}

Message:
${formData.message}

===========================
Sent from Portfolio Contact Form
      `;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: fullMessage,
        to_name: "KM Mahbubar Rahman Harej",
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus({
          type: "success",
          message:
            lang === "EN"
              ? "Your message has been sent successfully! We'll get back to you soon."
              : "আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        type: "error",
        message:
          lang === "EN"
            ? "Failed to send your message. Please try again later."
            : "আপনার বার্তা পাঠাতে ব্যর্থ হয়েছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।",
      });
    } finally {
      setIsSubmitting(false);
    }
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
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
          {lang === "EN" ? "Send Message" : "বার্তা পাঠান"}
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 sm:mb-4">
              {lang === "EN" ? "Share Your Thoughts" : "আপনার মতামত জানান"}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {lang === "EN"
                ? "Your voice matters to me. Please share your concerns, suggestions, or any message you'd like to convey."
                : "আপনার কণ্ঠস্বর আমার কাছে গুরুত্বপূর্ণ। অনুগ্রহ করে আপনার উদ্বেগ, পরামর্শ বা যেকোনো বার্তা জানান।"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
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
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-black text-sm sm:text-base"
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
                  className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  {lang === "EN" ? "Email Address" : "ইমেইল ঠিকানা"}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-black text-sm sm:text-base"
                  placeholder={
                    lang === "EN" ? "Enter your email" : "আপনার ইমেইল লিখুন"
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  {lang === "EN" ? "Phone Number" : "ফোন নম্বর"}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-black text-sm sm:text-base"
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
                  className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  {lang === "EN" ? "Subject *" : "বিষয় *"}
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-black text-sm sm:text-base"
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
                className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
              >
                {lang === "EN" ? "Your Message *" : "আপনার বার্তা *"}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-vertical text-black text-sm sm:text-base"
                placeholder={
                  lang === "EN"
                    ? "Please describe your message in detail. Your feedback is valuable to me."
                    : "অনুগ্রহ করে আপনার বার্তা বিস্তারিতভাবে বর্ণনা করুন। আপনার মতামত আমার কাছে মূল্যবান।"
                }
              ></textarea>
            </div>

            <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">
                {lang === "EN" ? "Privacy Notice" : "গোপনীয়তার নোটিশ"}
              </h3>
              <p className="text-xs sm:text-sm text-blue-700 leading-relaxed">
                {lang === "EN"
                  ? "Your personal information will be kept confidential and used only to respond to your message. We do not share your information with third parties."
                  : "আপনার ব্যক্তিগত তথ্য গোপনীয় রাখা হবে এবং শুধুমাত্র আপনার বার্তার উত্তর দিতে ব্যবহৃত হবে। আমরা তৃতীয় পক্ষের সাথে আপনার তথ্য ভাগ করি না।"}
              </p>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform shadow-lg text-sm sm:text-base ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 hover:scale-105"
                }`}
              >
                {isSubmitting
                  ? lang === "EN"
                    ? "Sending..."
                    : "পাঠানো হচ্ছে..."
                  : lang === "EN"
                  ? "Send Message"
                  : "বার্তা পাঠান"}
              </button>
            </div>

            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg text-center ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-800 border border-green-300"
                    : "bg-red-100 text-red-800 border border-red-300"
                }`}
              >
                <p className="font-medium text-sm sm:text-base">
                  {submitStatus.message}
                </p>
              </div>
            )}
          </form>

          <div className="mt-6 sm:mt-8 bg-green-50 p-4 sm:p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-base sm:text-lg font-semibold text-green-800 mb-2">
              {lang === "EN" ? "Response Time" : "উত্তরের সময়"}
            </h3>
            <p className="text-green-700 text-xs sm:text-sm leading-relaxed">
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
