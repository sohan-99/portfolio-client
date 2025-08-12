"use client";

import Header from "./components/Header";
import HistoryPage from "./history/page";
import AchievementsAndSacrificePage from "./achievements-and-sacrifice/page";
import ContactPage from "./contact/page";
import HarezIncidentPage from "./harez-in-the-wake-of-the-incident/page";
import NewsAndMediaPage from "./news-and-media/page";
import PhilosophyPage from "./philosophy/page";
import PlanningForBangladeshPage from "./planning-for-bangladesh/page";
import PlanningForDhunutPage from "./planning-for-dhunut/page";
import PlanningForSherpurPage from "./planning-for-sherpur/page";
import PoliticalActivitiesPage from "./political-activities/page";
import SendMessagePage from "./send-message/page";

export default function Home() {
  return (
    <>
      {/* Content Container */}
      <div className="relative z-10">
        <Header />
        <main className="space-y-8 sm:space-y-12 lg:space-y-16">
          <HistoryPage />
          <AchievementsAndSacrificePage />
          <ContactPage />
          <HarezIncidentPage />
          <NewsAndMediaPage />
          <PhilosophyPage />
          <PlanningForBangladeshPage />
          <PlanningForDhunutPage />
          <PlanningForSherpurPage />
          <PoliticalActivitiesPage />
          <SendMessagePage />
        </main>
      </div>
    </>
  );
}
