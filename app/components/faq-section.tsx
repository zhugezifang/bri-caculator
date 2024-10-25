"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

interface FAQProps {
  t: (key: string) => string;
}

export function FAQSection({ t }: FAQProps) {
  const faqs = [
    {
      question: t("faqWhat"),
      answer: t("faqWhatAnswer"),
    },
    {
      question: t("faqHow"),
      answer: t("faqHowAnswer"),
    },
    {
      question: t("faqWhy"),
      answer: t("faqWhyAnswer"),
    },
    {
      question: t("faqDifference"),
      answer: t("faqDifferenceAnswer"),
    },
  ];

  return (
    <Card className="p-8 w-full mx-auto bg-white shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">{t("faqTitle")}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-lg text-gray-700 hover:text-blue-600">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
}