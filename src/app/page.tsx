import Image from "next/image";
import { HomeHero } from "@/components/caf/hero";
import { HomeFaq } from "@/components/caf/faq";
import { CafButton, NavyCard } from "@/components/caf/ui";
import { stripeDonateUrl } from "@/lib/getNavItems";

export default function Home() {
    return (
        <>
            <HomeHero />

            <section className="bg-[#f7f7f7] py-14">
                <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
                    <NavyCard>
                        <h2 className="text-xl font-semibold">Our History and Mission</h2>
                        <p className="mt-4 text-sm leading-relaxed text-white/90">
                            Established in 1967, the Canadian Arab Federation (CAF) is a non-partisan, non-profit, and membership-based organization dedicated to representing Canadian Arabs on critical public policy issues. With a long-standing history of advocating for the Arab community, CAF has been a pivotal voice in shaping societal dialogue and government policies.
                        </p>
                        <div className="mt-6">
                            <CafButton href="/about-us">About Us</CafButton>
                        </div>
                    </NavyCard>
                    <NavyCard>
                        <h2 className="text-xl font-semibold">Our Vision for the Future</h2>
                        <p className="mt-4 text-sm leading-relaxed text-white/90">
                            At CAF, we envision a future where the Arab community in Canada thrives, with strengthened connections to their heritage and an empowered voice within the broader Canadian society. Through our ongoing renewal process, we aim to create a dynamic platform that fosters inclusivity, understanding, and positive change for all.
                        </p>
                        <div className="mt-6">
                            <CafButton href="/get-involved">Get Involved</CafButton>
                        </div>
                    </NavyCard>
                </div>
            </section>

            <section className="bg-white py-14">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight">Our Commitment to You</h2>
                    <div className="grid items-center gap-6 md:grid-cols-2">
                        <NavyCard>
                            <h3 className="text-xl font-semibold">Advocacy and Representation</h3>
                            <p className="mt-4 text-sm leading-relaxed text-white/90">
                                At the core of the Canadian Arab Federation’s mission lies a deep-seated commitment to championing the rights, interests, and rich cultural heritage of the Arab Canadian community. We are dedicated to amplifying your voices and ensuring they resonate in every decision. Our advocacy extends from grassroots community initiatives to the broader, more complex arenas of national policy and public discourse.
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-white/90">
                                We understand that the Arab Canadian community is not a monolith but a vibrant mosaic of cultures, experiences, and perspectives.
                            </p>
                            <div className="mt-6">
                                <CafButton href="/about-us">Learn More</CafButton>
                            </div>
                        </NavyCard>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                            <Image src="/caf/event-hall.png" alt="CAF gathering in a banquet hall" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                            <Image src="/caf/morocco-5.png" alt="Volunteers standing with a Moroccan flag" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                        <NavyCard>
                            <h3 className="text-xl font-semibold">Community Engagement</h3>
                            <p className="mt-4 text-sm leading-relaxed text-white/90">
                                Understanding the power of unity and collaboration, CAF actively seeks to engage with and empower individuals and organizations within the Arab Canadian community. We facilitate dialogues, events, and initiatives that aim to strengthen community bonds, celebrate our diverse heritage, and foster a sense of belonging and achievement.
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-white/90">
                                Our efforts are multifaceted, involving education, community mobilization, and collaboration with a network of partners to effect change. We work tirelessly to protect cultural heritage, advance social justice, and foster an environment where every Arab Canadian can thrive.
                            </p>
                            <div className="mt-6">
                                <CafButton href="/get-involved">Learn More</CafButton>
                            </div>
                        </NavyCard>
                        <NavyCard>
                            <h3 className="text-xl font-semibold">Education and Empowerment</h3>
                            <p className="mt-4 text-sm leading-relaxed text-white/90">
                                Recognizing the importance of knowledge and empowerment, CAF invests in educational programs and resources that enrich our community. From cultural workshops to leadership training, we provide opportunities that enable individuals to grow, contribute, and excel in various aspects of their lives.
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-white/90">
                                Join us as we embark on this exciting journey of renewal and empowerment. Together, we can shape a future that reflects the aspirations and diversity of the Arab Canadian community.
                            </p>
                            <div className="mt-6">
                                <CafButton href="/get-involved">Get Involved</CafButton>
                            </div>
                        </NavyCard>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                            <Image src="/caf/morocco-4.png" alt="Community members serving food" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white pb-6">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 px-4 py-8 md:flex-row">
                    <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">Support the Canadian Arab Federation Today!</h2>
                    <CafButton href={stripeDonateUrl} variant="navy" external>Donate Today →</CafButton>
                </div>
            </section>

            <HomeFaq />
        </>
    );
}
