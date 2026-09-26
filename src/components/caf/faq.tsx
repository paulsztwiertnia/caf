"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const items = [
    {
        question: "What is the Canadian Arab Federation (CAF)?",
        answer:
            "The Canadian Arab Federation is a national, non-partisan, non-profit organization established in 1967. It serves as a representative body for Canadian Arabs on issues relating to public policy. As a membership-based organization, CAF has been pivotal in voicing the perspectives of Arab-Canadians to government agencies, civil society groups, and the media, especially in Central Canada and the Toronto area.",
    },
    {
        question: "How has CAF's role in the community evolved, especially in light of recent international events and domestic policies?",
        answer:
            "CAF’s role has evolved significantly over the years, particularly after major global events such as 9/11, the wars in Lebanon and Gaza, the rise of Islamist military groups, and civil wars in Arab countries. These events have led to divergent views within the community and affected participation and funding. CAF has shifted from a more proactive stance to mainly reacting to events and providing commentary, with a focus on preserving the core interests of Arab Canadians.",
    },
    {
        question: "What are the current challenges facing CAF, and how has it affected its operations and stakeholder involvement?",
        answer:
            "CAF is in a period of transition, focusing on optimizing operations and enhancing constituent engagement. While activities have become more targeted and selective, this approach ensures quality and relevance in a changing socio-political landscape. The organization smartly utilizes its resources, with a lean, dedicated team, ensuring that expenditures directly support its mission. This strategic adaptation reflects a broader vision for revitalization and growth. As part of this forward-thinking approach, CAF is actively exploring new avenues for funding and partnerships to expand its impact. The current phase is seen as an opportunity to innovate and reinvigorate the organization’s commitment to representing and serving Arab Canadians effectively.",
    },
    {
        question: "What are the strategic initiatives proposed for CAF's renewal, and what do they entail?",
        answer:
            "The proposed strategic initiatives for CAF’s renewal are Re-Branding, Re-Organizing, and Re-Engaging. Re-Branding involves revisiting the mission statement and focusing on unifying issues for Arab Canadians. Re-Organizing includes reviewing membership eligibility, governance, and organizational structure to reflect the current needs and goals. Re-Engaging means revitalizing relationships with other groups, younger generations of Arab Canadians, and key stakeholders like the government and media to build productive collaborations.",
    },
    {
        question: "How can individuals and organizations get involved with CAF's renewal process and help shape the future of the Arab Canadian community?",
        answer:
            "Individuals and organizations can get involved by participating in stakeholder consultations, contributing ideas for the strategic initiatives, and offering support in various capacities. Engaging with CAF’s activities, becoming members, and advocating for the Arab Canadian community’s interests are all ways to contribute. The organization welcomes diverse perspectives and resources to guide the renewal process and ensure a representative and effective future for the federation.",
    },
];

export function HomeFaq() {
    const [open, setOpen] = useState(0);

    return (
        <section className="bg-[#f3f3f3] py-14">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-center text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
                <p className="mt-6 text-sm font-medium text-neutral-700">Looking for more information?</p>
                <div className="mt-4 overflow-hidden rounded-md border border-neutral-200 bg-[#f7f7f7]">
                    {items.map((item, index) => {
                        const isOpen = open === index;
                        return (
                            <div key={item.question} className="border-b border-neutral-200 last:border-b-0">
                                <button
                                    type="button"
                                    className="flex w-full items-start gap-3 px-4 py-4 text-left"
                                    aria-expanded={isOpen}
                                    onClick={() => setOpen(isOpen ? -1 : index)}
                                >
                                    {isOpen ? <Minus className="mt-0.5 size-4 shrink-0" /> : <Plus className="mt-0.5 size-4 shrink-0" />}
                                    <span className="font-medium">{item.question}</span>
                                </button>
                                {isOpen && <p className="px-11 pb-5 text-sm leading-relaxed text-neutral-700">{item.answer}</p>}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
