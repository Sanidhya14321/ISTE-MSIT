"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionTitle } from "./section-title";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is ISTE and what do you do?",
    answer:
      "ISTE is a national society for the technical education community. Our MSIT chapter organizes workshops, seminars, and networking events to help students grow their skills and connect with industry professionals.",
  },
  {
    question: "Who can become a member of ISTE-MSIT?",
    answer:
      "Any student of MSIT, regardless of their branch or year of study, is welcome to join our community. We believe in learning for everyone!",
  },
  {
    question: "What are the benefits of a lifetime membership?",
    answer:
      "Your one-time membership fee of ₹295 gives you lifetime access to all ISTE events, a nationally recognized certificate, exclusive workshop discounts, and opportunities to lead and participate in national-level projects.",
  },
  {
    question: "How can I get involved in the core team?",
    answer:
      "We recruit for our core team annually. Stay active in our events and keep an eye on our social media channels for announcements. We love to see enthusiastic members step up!",
  },
  {
    question: "Do I get any academic credits for joining events?",
    answer:
      "Yes! Active participation in our workshops and events earns you NSS credits and valuable certificates that add weight to your resume and academic profile.",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function Faq() {
  return (
    <motion.section
      id="faq"
      className="container"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="space-y-12">
        <SectionTitle className="p-2">Frequently Asked Questions</SectionTitle>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={fadeIn}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger className="text-lg text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
}
