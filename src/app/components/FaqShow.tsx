"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type FAQItem = {
    question: string;
    answer: string;
}

function FaqShowUI({ faqs, toggleFaq, activeIndex }: { faqs: FAQItem[], 
    toggleFaq: (index: number) => void,
    activeIndex: number | null 
}) {
    return (
        <div className="py-32 px-4">
            <h1 className="font-bold text-center text-4xl px-3" >Frequently Asked Questions</h1>
            <div className="space-y-4 mt-4 md:mx-16 lg:mx-32"> 
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-600 p-2 px-5 rounded-lg">
                        <div
                            className="font-semibold text-lg cursor-pointer flex justify-between items-center"
                            onClick={() => toggleFaq(index)}
                        >
                            {faq.question}
                            <Image src='/down-icon.png' alt="drop-down" width={25} height={25} />
                        </div>
                        <div 
                            id={`faq-${index}`}
                            className={`mt-2 text-sm leading-relaxed ${activeIndex === index ? '' : 'hidden'}`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function FaqShow() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: "What is the format of the courses offered by Phenom Institute?",
            answer: "Our courses are designed to provide flexibility and convenience to our students. We offer online and self-paced courses, which means you can learn at your own pace, anytime, and from anywhere. Our courses are structured into modules, each with video lessons, readings, and assignments. You can access our courses from your laptop, tablet, or mobile device, making it easy to fit learning into your busy schedule. Our online platform is user-friendly, and our courses are optimized for easy navigation, so you can focus on learning without any technical hassle."
        },
        {
            question: "How long do I have access to the course materials?",
            answer: "We understand that learning is a lifelong process, and you may need to revisit course materials at a later time. That's why we offer lifetime access to our course materials. Once you enroll in a course, you can access the materials as many times as you need, without any restrictions. This means you can review the materials at your own pace, reinforce your learning, and apply the concepts to real-world problems. Our courses are designed to be a valuable resource for you, and we want to ensure that you can continue to benefit from them long after you've completed the course."
        },
        {
            question: "What kind of support can I expect from the instructors?",
            answer: "Our instructors are dedicated to helping you succeed in our courses. They are experienced professionals in their fields and are passionate about teaching and mentoring. When you enroll in a course, you can expect personalized support from our instructors. They are available to answer any questions you may have, provide feedback on your progress, and offer guidance on how to apply the concepts to real-world problems. Our instructors are responsive and will typically respond to your queries within 24-48 hours. We also have a dedicated support team that can assist with any technical issues or general inquiries. Our goal is to provide a supportive learning environment that helps you achieve your goals."
        },
        {
            question: "Are the courses offered by the Phenom Institute accredited?",
            answer: "Yes, the courses offered by the Phenom Institute are accredited by recognized accrediting agencies in the relevant fields. We ensure that our courses meet the highest standards of quality and rigor, and our accreditation status is regularly reviewed and updated to ensure that it remains current. Our accreditation status is listed on our website, and we can provide more information upon request. We are committed to providing high-quality education that is recognized and respected by employers and academic institutions worldwide."
        }
    ];

    const toggleFaq = (index:number) => {
        setActiveIndex(activeIndex === index ? null: index);
    };

    return (
        <FaqShowUI 
            faqs={faqs}
            toggleFaq={toggleFaq}
            activeIndex={activeIndex}
        />
    );
}

export default FaqShow;