import type { Metadata } from "next";
import Image from "next/image";
import { CafButton, NavyCard, PageBanner } from "@/components/caf/ui";
import { CafForm, contactFields } from "@/components/caf/form";
import { stripeDonateUrl } from "@/lib/getNavItems";

export const metadata: Metadata = {
    title: "Our Call To Action – Canadian Arab Federation",
    description: "Statements and appeals from the Canadian Arab Federation.",
};

export default function CallToAction() {
    return (
        <>
            <PageBanner title="Our Call To Action" />
            <div className="bg-[#f7f7f7] py-12">
                <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
                    <NavyCard>
                        <h2 className="text-center text-lg font-semibold md:text-xl">
                            Ottawa and Niagara Police to Serve and Protect Israeli Genocide
                        </h2>
                        <h3 className="mt-4 text-center text-base font-semibold">
                            Statement from Coalition of Canadian Organizations in Solidarity with Palestine.
                        </h3>
                        <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/90">
                            <p>
                                We, the undersigned, stand in firm solidarity with the Palestinian people facing genocide and denounce the recent acts of bullying, harassment, and intimidation by the Ottawa and Niagara Police Services against Ms. Joanna Berry, a refugee lawyer targeted for her advocacy for Palestine. The recent appalling and outrageous interaction, with the police, captured on{" "}
                                <a href="https://www.youtube.com/watch?v=DGNDKNmVIXs" className="underline" target="_blank" rel="noreferrer">video</a>
                                , is symptomatic of a broader, systemic anti-Palestinian racism present in policing across Canada.
                            </p>
                            <p>
                                Peaceful demonstrators from all backgrounds, united in their stand against human rights abuses, war crimes, violations of international law and genocide, are increasingly subjected to police violence, harassment, arbitrary arrests, and intimidation. Joanna Berry, a white Canadian woman and a lawyer, was able to resist police misconduct, because of her understanding of the law and her rights. Yet, her case is a chilling reminder that the police are now attempting to silence Canadians who speak out, serving the interests of Israel, a foreign state supported by powerful lobby groups in Canada.
                            </p>
                            <p>Today, it’s Joanna. Tomorrow, it could be any of us.</p>
                            <p>
                                We call on all fellow Canadians to reject this police abuse of power and intimidation. We demand that all legislators at all levels—federal, provincial, and municipal—launch immediate investigations into the misuse of police power in this country. The Ottawa and Niagara Police Chiefs and Mayors, and Police Service Boards must conduct a thorough investigation into this egregious abuse of authority and hold those responsible accountable.
                            </p>
                            <p>
                                Together, we must ensure that Canada remains a place where freedom of expression is protected, and all individuals, regardless of their stance or background, are treated with dignity and respect.
                            </p>
                        </div>
                        <div className="mt-6">
                            <CafButton href="tel:+19053341745">Contact Atif Kubursi →</CafButton>
                        </div>
                    </NavyCard>

                    <div className="grid items-stretch gap-6 md:grid-cols-2">
                        <NavyCard>
                            <p className="text-sm text-white/70">Morocco Earthquake - September 8 2023</p>
                            <h2 className="mt-3 text-xl font-semibold">Join Us in Making a Difference</h2>
                            <p className="mt-3 text-sm leading-relaxed text-white/90">
                                The Canadian Arab Federation (CAF) is dedicated to fostering and promoting the cultural, social, and economic well-being of the Arab community in Canada. Our mission is to build bridges of understanding, advocate for equal rights, and empower individuals through education, advocacy, and community engagement.
                            </p>
                            <h3 className="mt-5 text-lg font-semibold">Your Support Makes an Impact</h3>
                            <p className="mt-3 text-sm leading-relaxed text-white/90">
                                By donating to CAF, you are directly contributing to a range of vital programs and services designed to uplift and support the Arab community in Canada
                            </p>
                            <div className="mt-6">
                                <CafButton href="https://globalmedic.ca/donate/" external>Donate →</CafButton>
                            </div>
                        </NavyCard>
                        <div className="relative min-h-72 overflow-hidden rounded-2xl">
                            <Image src="/caf/morocco-3.png" alt="Earthquake damage in Morocco" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                        <div className="relative min-h-72 overflow-hidden rounded-2xl">
                            <Image src="/caf/gaza.jpg" alt="Destruction from the Israel-Gaza conflict" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                        <NavyCard>
                            <h2 className="text-xl font-semibold">Israel Gaza Conflict - September 8 2023</h2>
                            <p className="mt-4 text-sm leading-relaxed text-white/90">
                                Since October 7, 2023, a significant armed conflict has erupted primarily in the Gaza Strip, extending into the West Bank and the Israel-Lebanon border, involving Israel and Palestinian militant groups led by Hamas. The conflict began with an unexpected attack by militants on southern Israel, triggering the most intense military flare-up in the region since the Yom Kippur War. In response, Israel launched a comprehensive aerial assault targeting Hamas, followed by a substantial ground offensive into Gaza. This conflict marks the fifth major confrontation in the ongoing Gaza-Israel hostilities, under the larger umbrella of the Israeli-Palestinian conflict. The violence has led to the internal displacement of approximately 1.9 million Palestinians, constituting over 85% of the population in Gaza, and about 500,000 Israelis.
                            </p>
                            <div className="mt-6">
                                <CafButton href="https://idrf.ca/project/palestine/" external>Donate →</CafButton>
                            </div>
                        </NavyCard>
                    </div>

                    <div className="grid items-start gap-8 pt-6 lg:grid-cols-2">
                        <div>
                            <p className="text-lg font-medium text-neutral-900">Lets Work Together</p>
                            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900">How Can We Help</h2>
                            <div className="mt-4 h-px w-48 bg-neutral-900" />
                            <p className="mt-8 text-sm text-neutral-700">Reach Out to Us for Support and Information</p>
                            <div className="mt-4">
                                <CafButton href={stripeDonateUrl} variant="navy" external>Donate Today →</CafButton>
                            </div>
                        </div>
                        <NavyCard>
                            <h2 className="text-xl font-semibold">Contact Us</h2>
                            <div className="mt-4">
                                <CafForm fields={contactFields} source="Contact" />
                            </div>
                        </NavyCard>
                    </div>
                </div>
            </div>
        </>
    );
}
