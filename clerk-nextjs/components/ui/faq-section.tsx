"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useId, useState } from "react";

const faqs = [
  {
    question: "What is BrowserSky AI?",
    answer:
      "BrowserSky AI is a Chrome extension that lets you chat with any web page using AI. Ask questions, get summaries, and extract insights — all without leaving your current tab.",
  },
  {
    question: "Which browsers are supported?",
    answer:
      "BrowserSky AI is currently available for Google Chrome. Support for additional browsers is on our roadmap.",
  },
  {
    question: "Is my browsing data private?",
    answer:
      "Yes. We only process the content of pages you explicitly interact with. Your data is never sold or shared with third parties.",
  },
  {
    question: "Do I need an account to use it?",
    answer:
      "A free account is required to get started. Sign up takes under a minute and unlocks your daily message allowance.",
  },
  {
    question: "What AI model powers BrowserSky?",
    answer:
      "BrowserSky AI is powered by Claude, Anthropic's frontier AI model, known for its accuracy and safety.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-4 inline-flex rounded-full bg-blue-500/20 p-3"
            aria-hidden="true"
          >
            <HelpCircle
              className="h-8 w-8 text-blue-500"
              aria-hidden="true"
            />
          </motion.div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-white/60 sm:text-base md:text-lg">
            Everything you need to know about BrowserSky AI
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const questionId = `${baseId}-question-${index}`;
            const answerId = `${baseId}-answer-${index}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-white/5 border-white/10 shadow-sm">
                  <CardHeader>
                    <motion.button
                      type="button"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="flex w-full items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      whileHover={{ x: 4 }}
                      aria-expanded={openIndex === index}
                      aria-controls={answerId}
                      id={questionId}
                    >
                      <span className="text-base font-semibold text-white">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        aria-hidden="true"
                      >
                        <ChevronDown className="h-5 w-5 text-white/50" />
                      </motion.div>
                    </motion.button>
                  </CardHeader>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        role="region"
                        id={answerId}
                        aria-labelledby={questionId}
                      >
                        <CardContent className="pt-0">
                          <p className="text-sm leading-relaxed text-white/60">
                            {faq.answer}
                          </p>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
