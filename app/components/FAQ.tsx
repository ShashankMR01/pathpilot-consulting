"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "🎓 How do I know which college is right for me?",
    answer:
      "We evaluate your interests, academic performance, career goals and budget to recommend colleges that best match your profile.",
  },
  {
    question: "🏫 Can you help with Management Quota admissions?",
    answer:
      "Yes. We guide students through Management Quota admission opportunities in reputed institutions across India.",
  },
  {
    question: "📈 What if I am confused about my career path?",
    answer:
      "Our counseling sessions help students understand their strengths, interests and future opportunities before choosing a course.",
  },
  {
    question: "🌍 Do you provide study abroad guidance?",
    answer:
      "Yes. We assist students with university selection, application planning and understanding international education opportunities.",
  },
  {
    question: "👨‍👩‍👧 Can parents participate in the consultation?",
    answer:
      "Absolutely. We encourage parents to be involved so decisions are made with clarity and confidence.",
  },
  {
    question: "💬 Is the initial consultation free?",
    answer:
      "Yes. Your first consultation is completely free and helps us understand your academic goals and requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 px-6 bg-slate-950 border-t border-yellow-500"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-6">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Questions Students & Parents Often Ask
        </p>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-2xl border border-yellow-500 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="text-lg font-semibold text-yellow-400">
                  {faq.question}
                </span>

                <span className="text-2xl text-yellow-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-gray-300 leading-7">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

        </div>

        <div className="text-center mt-12">

          <h3 className="text-2xl font-bold text-yellow-400">
            Still Have Questions?
          </h3>

          <p className="text-gray-400 mt-3">
            Reach out to our team for personalized guidance.
          </p>

          <a
            href="https://wa.me/919538942118"
            target="_blank"
            className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold"
          >
            Chat With Us on WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}