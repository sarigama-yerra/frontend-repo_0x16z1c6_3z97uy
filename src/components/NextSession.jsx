import React from "react";

function getNextBiweeklyTuesday(now = new Date()) {
  // Find the next Tuesday (weekday 2 where Monday=1? In JS Sunday=0, Tuesday=2)
  const date = new Date(now);
  const day = date.getDay(); // 0=Sun ... 2=Tue
  // days until next Tuesday (including today if Tuesday but we want biweekly cadence)
  const daysUntilTuesday = (2 - day + 7) % 7 || 0; // 0 if Tuesday today
  date.setDate(date.getDate() + daysUntilTuesday);

  // Establish a reference biweekly anchor: 2025-01-07 (a Tuesday) as week 0
  const anchor = new Date("2025-01-07T00:00:00");

  // If today is Tuesday but after office hours start, we may still show today depending on time.
  // We'll compute biweekly by week number difference.
  const msInWeek = 7 * 24 * 60 * 60 * 1000;

  function isAnchorWeek(d) {
    const diffWeeks = Math.floor((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - Date.UTC(anchor.getFullYear(), anchor.getMonth(), anchor.getDate())) / msInWeek);
    return diffWeeks % 2 === 0; // even weeks are on-cycle
  }

  // If computed date is Tuesday but off-cycle, advance by 7 days to next Tuesday and check again
  let candidate = date;
  if (!isAnchorWeek(candidate)) {
    candidate = new Date(candidate);
    candidate.setDate(candidate.getDate() + 7);
    if (!isAnchorWeek(candidate)) {
      // then add another 7 to hit the biweekly cycle
      candidate.setDate(candidate.getDate() + 7);
    }
  }

  return candidate;
}

function formatDateTimeRange(date, startHour = 13, endHour = 15, tz = "UTC") {
  // default: 1-3pm UTC; adjust as needed. We'll show user's local time too.
  const start = new Date(date);
  start.setHours(startHour, 0, 0, 0);
  const end = new Date(date);
  end.setHours(endHour, 0, 0, 0);

  const fmt = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });

  const localStart = fmt.format(start);
  const localEnd = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(end);

  return `${localStart} – ${localEnd}`;
}

export default function NextSession({ startHour = 13, endHour = 15, zoomUrl }) {
  const next = getNextBiweeklyTuesday();
  const label = formatDateTimeRange(next, startHour, endHour);

  return (
    <section className="mt-6 md:mt-10 bg-slate-800/60 border border-blue-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
      <h2 className="text-xl md:text-2xl font-semibold text-white">Next Office Hours</h2>
      <p className="mt-2 text-blue-200/80">{label}</p>

      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <a
          href={zoomUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors shadow-lg shadow-blue-500/20"
        >
          Join Zoom Room
        </a>
        <a
          href={zoomUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white/90 font-medium transition-colors"
        >
          Add to Calendar
        </a>
      </div>

      <p className="mt-4 text-sm text-blue-300/70">
        This channel is open every other Tuesday during the listed hours.
      </p>
    </section>
  );
}
