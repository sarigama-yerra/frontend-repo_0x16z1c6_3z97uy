import React from "react";

export default function Hours({ startHour = 13, endHour = 15, timezoneLabel = "UTC" }) {
  return (
    <section className="mt-8 grid md:grid-cols-3 gap-4">
      <div className="p-5 rounded-xl bg-slate-800/60 border border-blue-500/20">
        <p className="text-blue-300/80 text-sm">Cadence</p>
        <p className="mt-1 text-white font-semibold">Biweekly Tuesdays</p>
      </div>
      <div className="p-5 rounded-xl bg-slate-800/60 border border-blue-500/20">
        <p className="text-blue-300/80 text-sm">Office Hours</p>
        <p className="mt-1 text-white font-semibold">
          {startHour}:00 – {endHour}:00 {timezoneLabel}
        </p>
      </div>
      <div className="p-5 rounded-xl bg-slate-800/60 border border-blue-500/20">
        <p className="text-blue-300/80 text-sm">Format</p>
        <p className="mt-1 text-white font-semibold">Open Zoom room; first come, first served</p>
      </div>
    </section>
  );
}
