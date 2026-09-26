"use client"
import { Accordion as AccordionComponent, AccordionItem as AccordionItemComponent } from "@szhsin/react-accordion";
import { Plus, Minus } from "lucide-react";
import { hVariants } from '@/lib/variants';

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    text?: string;
    items: AccordionItem[];
}

export function Accordion({ text, items }: AccordionProps){
    return (
        <>
        <section id="accordion" className="bg-(--color-background-dark)">
            <div className="bold-container mx-auto text-white py-12">
                <h2 className={hVariants({role: "pageSection"})}>Frequently Asked Questions</h2>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-5">
                        <h3 className="section-subtitle">Q&A</h3>
                        <p className="w-10/12 text-lg tracking-wide mb-12">{text}</p>
                    </div>
                
                    <div className="col-span-12 md:col-span-7">
                        <AccordionComponent className="w-full">
                        {items.map((item, index) => (
                            <AccordionItemComponent
                            key={index}
                            className="group w-full"
                            buttonProps={{
                                className:
                                // border when CLOSED, remove when OPEN
                                "w-full text-left border-b border-gray-200 pb-8 mb-8 " +
                                "aria-expanded:border-b-0 aria-expanded:mb-0",
                            }}
                            header={({ state: { isEnter } }) => (
                                // no border here anymore
                                <div className="flex w-full items-center justify-between cursor-pointer">
                                <span className="flex-1 text-left text-2xl font-normal">
                                    {item.question}
                                </span>
                                {isEnter ? (
                                    <Minus className="h-6 w-6 shrink-0" />
                                ) : (
                                    <Plus className="h-6 w-6 shrink-0" />
                                )}
                                </div>
                            )}
                            >
                            {/* border appears at bottom ONLY when OPEN */}
                            <div
                                className={
                                "text-xl font-light pb-8 mb-8 border-b border-transparent " +
                                "group-has-[button[aria-expanded='true']]:border-gray-200"
                                }
                            >
                                {item.answer}
                            </div>
                            </AccordionItemComponent>
                        ))}
                        </AccordionComponent>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}