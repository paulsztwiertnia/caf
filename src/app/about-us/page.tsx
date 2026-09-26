import type { Metadata } from "next";
import Image from "next/image";
import { CafButton, NavyCard, PageBanner } from "@/components/caf/ui";

export const metadata: Metadata = {
    title: "About us – Canadian Arab Federation",
    description: "History, mission, and vision of the Canadian Arab Federation, established in 1967.",
};

export default function AboutUs() {
    return (
        <>
            <PageBanner title="About Us" />
            <div className="bg-[#f7f7f7] py-12">
                <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4">
                    <NavyCard>
                        <h2 className="text-xl font-semibold">Our History and Mission</h2>
                        <p className="mt-4 text-sm leading-relaxed text-white/90">
                            Established in 1967, the Canadian Arab Federation (CAF) is a non-partisan, non-profit, and membership-based organization dedicated to representing Canadian Arabs on critical public policy issues. With a long-standing history of advocating for the Arab community, CAF has been a pivotal voice in shaping societal dialogue and government policies.
                        </p>
                    </NavyCard>

                    <div className="grid items-stretch gap-6 md:grid-cols-2">
                        <NavyCard className="flex flex-col">
                            <h2 className="text-xl font-semibold">Challenges</h2>
                            <p className="mt-4 text-sm leading-relaxed text-white/90">
                                Facing diverse challenges over the years, CAF is actively engaged in renewal. We are committed to redefining our mission and approach to better serve our diverse stakeholders, foster meaningful community engagement, and build stronger relationships within Canadian society.
                            </p>
                            <h3 className="mt-8 text-lg font-semibold">Interested In Our Mission? Learn More About Our Impact</h3>
                            <div className="mt-6">
                                <CafButton href="/our-call-to-action">Learn More →</CafButton>
                            </div>
                        </NavyCard>
                        <div className="relative min-h-72 overflow-hidden rounded-2xl">
                            <Image src="/caf/event-hall.png" alt="CAF event in a banquet hall" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                    </div>

                    <NavyCard>
                        <h2 className="text-xl font-semibold">Our Vision for the Future</h2>
                        <p className="mt-4 text-sm leading-relaxed text-white/90">
                            At CAF, we envision a future where the Arab community in Canada thrives, with strengthened connections to their heritage and an empowered voice within the broader Canadian society. Our vision encompasses a commitment to human rights and anti-racism, advocating for dignity, and combating discrimination in all forms. Through our ongoing renewal process, we aim to foster a dynamic platform that champions inclusivity, understanding, and positive societal change. By addressing critical issues of equity and justice, we strive to create a cohesive community where every individual is respected and celebrated, contributing to a prosperous, just, and inclusive future for all.
                        </p>
                    </NavyCard>
                </div>
            </div>

            <section className="bg-[#f3f3f3] py-14">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
                        Our Dedicated Board Members and Volunteers Shaping Our Vision
                    </h2>
                    <NavyCard className="mt-10">
                        <h3 className="text-xl font-semibold">Guiding Progress: Our Board Members and Volunteers</h3>
                        <p className="mt-4 text-sm leading-relaxed text-white/90">
                            The driving force behind the Canadian Arab Federation: a dedicated group of board members and volunteers who are passionately shaping our vision. Each one brings unique experiences, insights, and dedication to advocate for and serve the Arab Canadian community. Their commitment to public policy, community engagement, and cultural representation is the backbone of our organization. Together, they work tirelessly to ensure that the diverse voices of Arab Canadians are heard, understood, and respected. Join us in celebrating their relentless pursuit of progress and inclusivity. Their stories are not just about individual accomplishments but are a testament to the power of collective action and shared dreams.
                        </p>
                    </NavyCard>
                </div>
            </section>
        </>
    );
}
