import React from "react";
import Header from "./components/Header";
import NextSession from "./components/NextSession";
import Hours from "./components/Hours";
import FAQ from "./components/FAQ";

function App() {
  const ZOOM_URL = "https://zoom.us/j/1234567890"; // Replace with your real Zoom link
  const startHourUTC = 13; // 1 PM UTC
  const endHourUTC = 15; // 3 PM UTC

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_50%)]" />

      <main className="relative max-w-3xl mx-auto px-6 pb-20">
        <Header />
        <NextSession startHour={startHourUTC} endHour={endHourUTC} zoomUrl={ZOOM_URL} />
        <Hours startHour={startHourUTC} endHour={endHourUTC} timezoneLabel="UTC" />
        <FAQ />

        <footer className="mt-12 text-center text-blue-300/70 text-sm">
          Need help outside office hours? Share details in advance so we can prepare.
        </footer>
      </main>
    </div>
  );
}

export default App;
