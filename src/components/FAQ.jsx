import React from "react";

const faqs = [
  {
    q: "Who can join?",
    a: "Anyone who needs help during office hours is welcome to join the Zoom room.",
  },
  {
    q: "What can I ask?",
    a: "Bring questions about setup, debugging, best practices, or feature ideas.",
  },
  {
    q: "Do I need to book a slot?",
    a: "No booking required. It's a first-come, first-served support room.",
  },
  {
    q: "How often is it?",
    a: "It's every other Tuesday (biweekly) during the posted hours.",
  },
];

export default function FAQ() {
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-semibold text-white">Frequently Asked Questions</h3>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {faqs.map((item) => (
          <div key={item.q} className="p-5 rounded-xl bg-slate-800/60 border border-blue-500/20">
            <p className="text-white font-medium">{item.q}</p>
            <p className="mt-1 text-blue-200/80 text-sm">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
