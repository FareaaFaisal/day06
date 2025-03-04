"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const faqData = [
  {
    question: "How do we serve food?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How is our food quality?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How do we give home delivery?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How can we get in touch with you?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "What will be delivered? And When?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "Is this restaurant 24 hours open?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-full overflow-hidden'>
    <div className="relative font-[sans-serif] pt-20 before:absolute before:w-full before:h-full before:inset-0 bg-black  before:z-[-10] "> {/* Adjusted mt */}
    <Image
      src="/unsplash_4ycv3Ky1ZZU.png"
      alt="Banner Image"
      width={500}
      height={500}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6 mt-[150px]">
      <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
        FAQ Page
      </h2>
      <div className="flex items-center space-x-2 text-white">
        <Link href="/" className="text-white">Home</Link>
        <span className="text-white"> &gt; </span>
        <Link href="/about" className="text-orange-500">faq</Link>
      </div>
    </div>
  </div>
  <main className="max-w-4xl mx-auto py-16 px-4">
  <h2 className="text-5xl font-bold text-center mb-8">Questions Looks Here</h2>
  <p className="text-center text-gray-600 mb-12">
    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  </p>

  <div className="grid gap-6 md:grid-cols-2">
    {faqData.map((faq, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-200"
      >
        <div
          onClick={() => toggleFAQ(index)}
          className="cursor-pointer flex justify-between items-center"
        >
          <h3 className="text-lg font-medium">{faq.question}</h3>
          <span className="text-2xl">
            {openIndex === index ? '-' : '+'}
          </span>
        </div>
        {openIndex === index && (
          <p className="text-sm text-gray-600 mt-4">{faq.answer}</p>
        )}
      </div>
    ))}
  </div>
</main>
</div>

  );
};

export default FAQPage;