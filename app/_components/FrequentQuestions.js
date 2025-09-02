import Link from "next/link";

const faqs = [
  {
    question: "How do I book a flight on SKY|RESERVE?",
    answer:
      "Simply search for your destination, select your preferred flight, and proceed with secure checkout. Your e-ticket will be emailed instantly.",
  },
  {
    question: "Can I cancel or change my booking?",
    answer:
      "Yes, most airlines allow cancellations or modifications. Check the fare rules during booking or contact our 24/7 support for help.",
  },
  {
    question: "Is it safe to pay online on SKY|RESERVE?",
    answer:
      "Absolutely. We use top-level encryption and secure payment gateways to protect your data.",
  },
  {
    question: "Do I need to create an account to book?",
    answer:
      "Yes, you can only check out after login. And creating an account helps you manage bookings faster and access exclusive deals.",
  },
];

function FrequentQuestions() {
  return (
    <section className="py-15 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-start mb-10">
          <h2 className="h2 text-fg  mb-3">Frequently Asked Questions</h2>
          <p className="text-default text-fg-faint md:mx-0 max-w-xl mx-auto">
            Here are answers to the most common questions travelers ask us.
          </p>
        </div>

        <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 mb-20 gap-x-30  sm:px-10 px-5">
          {faqs.map((faq, index) => (
            <div key={index} className=" p-6  border-b border-stroke-faint   ">
              <h3 className="h4 font-semibold text-fg mb-2">
                0{index + 1}. {faq.question}
              </h3>
              <p className="text-default text-fg-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
        <p className="text-default text-fg-faint ">
          Still have questions?{" "}
          <Link
            href="https://mail.google.com/mail/u/0/#inbox"
            className=" text-brand underline mr-1"
          >
            Contact Us
          </Link>
          — we’re here to help!
        </p>
      </div>
    </section>
  );
}

export default FrequentQuestions;
