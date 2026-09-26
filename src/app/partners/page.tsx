import type { Metadata } from "next";
import Image from "next/image";
import { CafButton, NavyCard, PageBanner } from "@/components/caf/ui";

export const metadata: Metadata = {
    title: "Partners – Canadian Arab Federation",
    description: "Humanitarian partners of the Canadian Arab Federation.",
};

export default function Partners() {
    return (
        <>
            <PageBanner title="Explore Our Partners" />
            <div className="bg-white py-12">
                <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
                    <div className="grid items-center gap-6 md:grid-cols-2">
                        <NavyCard>
                            <h2 className="text-xl font-semibold">Global Medic</h2>
                            <p className="mt-4 text-sm leading-relaxed text-white/90">
                                GlobalMedic, a recognized Canadian charity with nearly two decades of expertise, delivers humanitarian assistance following disasters and conflicts worldwide. Our mission centers on preserving health and well-being in situations where access to basic needs is compromised.
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-white/90">
                                Contributing to the Emergency Relief Fund enables us to swiftly react to crises globally, ensuring timely and effective aid. Should you prefer to allocate your donation to a particular emergency, you are welcome to select the designated fund for that specific crisis.
                            </p>
                            <div className="mt-6">
                                <CafButton href="https://globalmedic.ca/donate/" external>Donate</CafButton>
                            </div>
                        </NavyCard>
                        <div className="relative aspect-square overflow-hidden rounded-2xl">
                            <Image src="/caf/global-medic.jpeg" alt="GlobalMedic rapid response team" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                    </div>

                    <div className="grid items-center gap-6 md:grid-cols-2">
                        <NavyCard>
                            <h2 className="text-xl font-semibold">IDRF</h2>
                            <p className="mt-4 text-sm leading-relaxed text-white/90">
                                IDRF is committed to delivering impactful humanitarian aid and lasting development programs that align with the Islamic values of human dignity, independence, and social justice. Established in 1984, IDRF has been active in implementing a variety of relief and development initiatives across South and Southeast Asia, Africa, the Americas, Eastern Europe, and the Middle East, serving communities without bias.
                            </p>
                            <div className="mt-6">
                                <CafButton href="https://idrf.ca/donate/" external>Donate</CafButton>
                            </div>
                        </NavyCard>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                            <Image src="/caf/morocco-4.png" alt="Community members at a food stall" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                    </div>

                    <div className="grid items-center gap-6 md:grid-cols-2">
                        <NavyCard className="text-center">
                            <h2 className="text-xl font-semibold">Moroccan Association In Toronto</h2>
                            <p className="mt-4 text-sm">Join us in making a difference! 🌍🤝</p>
                            <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/90">
                                <p>The Moroccan Association of Toronto (AMDT) is dedicated to helping those in need. We are rallying the strength of our community to provide aid and relief to our fellow Moroccans who have been severely impacted by a recent and catastrophic earthquake.</p>
                                <p>Together, we can provide hope, support, and a brighter future for the affected families in Morocco. Your contribution, no matter how small, can make a significant impact on their lives.</p>
                                <p>Every donation counts. Let’s stand together and make a positive change.</p>
                                <p>Donate today and be a part of the Fundraising for Morocco initiative. Together, we can rebuild lives and communities.</p>
                                <p>Thank you for your compassion and generosity</p>
                            </div>
                        </NavyCard>
                        <div className="relative aspect-square overflow-hidden rounded-2xl bg-black">
                            <Image src="/caf/moroccan-association.png" alt="Fundraising for Morocco poster from the Moroccan Association of Toronto" fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
