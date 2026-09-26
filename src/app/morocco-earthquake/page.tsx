import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CafButton } from "@/components/caf/ui";

export const metadata: Metadata = {
    title: "Morocco Earthquake – Canadian Arab Federation",
    description: "Canadian Arab Federation and the Moroccan community of Canada response to the 2023 earthquake.",
};

export default function MoroccoEarthquake() {
    return (
        <article className="bg-white">
            <div className="mx-auto max-w-4xl px-4 py-12">
                <h1 className="rounded-md bg-[#1f8f3a] px-4 py-3 text-center text-lg font-semibold text-white md:text-2xl">
                    Canadian Arab Federation &amp; The Moroccan Community of Canada Unite in Crisis
                </h1>
                <div className="mt-8 space-y-4 text-sm leading-relaxed text-neutral-800 md:text-base">
                    <p>
                        In the wake of a catastrophic earthquake that struck Morocco, we, the Canadian Arab Federation and the Moroccan community of Canada, are filled with profound sorrow and concern. This devastating event has claimed the lives of thousands, leaving countless others injured and trapped beneath the rubble of their shattered homes, buildings, and critical infrastructure. The situation is dire, and time is of the essence.
                    </p>
                    <p>
                        The epicenter of this seismic catastrophe lies in Morocco’s vulnerable Atlas region, an area already grappling with limited means and resources. The earthquake’s ferocity has magnified the destruction, overwhelming the local response efforts. Families and neighbors are valiantly working to rescue their loved ones, but they face daunting challenges, with insufficient equipment and ambulances at their disposal.
                    </p>
                    <p>
                        In this time of crisis, we extend our heartfelt condolences to the people of Morocco, whose lives have been forever altered by this tragedy. We urgently implore our fellow Canadians to step forward and demonstrate their generosity by contributing to the relief effort. Your donations can make a profound difference, offering hope and assistance to those in dire need. Rest assured; your contributions will be acknowledged with a tax receipt for your records.
                    </p>
                    <p>
                        Furthermore, we call upon our Canadian government to act swiftly and compassionately. We must uphold our tradition of extending humanitarian assistance to those in need. Morocco requires our immediate support to cope with the devastating aftermath of this earthquake. Let us unite with the global community and rally behind Morocco’s reconstruction efforts.
                    </p>
                </div>

                <h2 className="mt-10 text-center text-2xl font-semibold">Donate with the IDRF, Our Trusted Partner</h2>
                <div className="mt-4 text-center">
                    <CafButton href="https://idrf.ca/project/morocco-earthquake-relief/" variant="navy" external>Donate Now</CafButton>
                </div>
                <p className="mt-8 text-sm leading-relaxed text-neutral-800">
                    It is imperative that we act decisively in this critical moment. Lives are hanging in the balance, and the people of Morocco need our support now more than ever. Together, we can make a difference and bring hope to those affected by this tragedy.
                </p>

                <h2 className="mt-12 text-center text-2xl font-semibold">See What Our Partners Are Saying</h2>
                <div className="mt-6 flex justify-center">
                    <Image src="/caf/globalmedic-wordmark.png" alt="GlobalMedic" width={280} height={70} className="h-14 w-auto" />
                </div>

                <section className="mt-10 grid items-start gap-6 md:grid-cols-2">
                    <div>
                        <h3 className="text-xl font-semibold">The Crisis</h3>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-800">
                            Around 11pm local time on September 8, a 6.8 magnitude earthquake struck the High Atlas mountain range, 72 km southwest of Marrakech, Morocco, a city home to 840,000 people. The quake was followed by a 4.9 magnitude aftershock. This has been the biggest earthquake felt in the region. Extensive damage has been reported with buildings collapsed and critical infrastructure severely damaged. The death toll as of Monday was over 2,500. The death toll is expected to rise as rescue teams are unable to reach the most remote areas.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-800">
                            The Interior Ministry has stated that the majority of the damage occurred in rural areas, away from cities and towns. Entire villages near the epicenter have been flattened. In the town of Al-Haouz, located at the earthquake’s epicenter, a collapsed house has trapped its residents beneath the rubble. At Amizmiz, a village close to the epicenter, rescuers worked tirelessly, using their hands to sift through the debris. The town has suffered severe damage, with fears of up to 2,000 casualties. Asni also faced immense devastation, with 90% of its houses destroyed. Furthermore, additional homes in towns near the epicenter either partially or completely collapsed.
                        </p>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        <Image src="/caf/morocco-2.png" alt="Damaged buildings after the Morocco earthquake" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                </section>

                <section className="mt-12">
                    <h3 className="text-xl font-semibold">The Response</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-800">
                        GlobalMedic has deployed our Rapid Response Team (RRT) with 4 AquaResponse3 Water Purification Systems to Morocco.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-800">
                        Following an earthquake of this magnitude, access to basic supplies becomes nearly impossible. This includes clean drinking water, with damage from the earthquake disrupting existing infrastructure such as water reservoirs. The AR3s are point-of-source water filtration devices that can provide clean drinking water to support over 2,000 people every day. These units will be installed at central locations like feeding centers and health clinics to ensure that the water being consumed at these sites is safe to drink.
                    </p>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                            <Image src="/caf/morocco-1.png" alt="GlobalMedic team providing water after the earthquake" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                            <Image src="/caf/morocco-4.png" alt="Hot meal program for people affected by the earthquake" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <CafButton href="https://globalmedic.ca/donate/" variant="navy" external>Donate Now</CafButton>
                    </div>
                    <p className="mt-6 text-sm leading-relaxed text-neutral-800">
                        GlobalMedic’s Rapid Response Team is also working with local partners to run a hot meal program. We have taken over a local cafe and are producing meals daily to provide to people affected by the earthquake. Every day we will be able to feed hundreds of people, ensuring they stay fed and healthy.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-800">
                        The team has delivered meals to displaced people living in makeshift accommodations as well as to a group of people in the hospital. They are continuing to look for vulnerable groups who will benefit from this assistance.
                    </p>
                </section>

                <section className="mt-12 grid items-start gap-6 md:grid-cols-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        <Image src="/caf/morocco-5.png" alt="Volunteers supporting earthquake relief" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Aid Offered</h3>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-800">
                            In response to the quake, GlobalMedic has offered the following forms of aid. We believe that we can make a difference and get the Right Aid to the Right People at the Right Time.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-800">
                            <strong>RescUAV Team:</strong> GlobalMedic has offered to do land/damage surveyance for the areas most heavily affected by the earthquake. This can help establish which roads/access points are up and running and help bring aid quicker.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-800">
                            <strong>Family Emergency Kits:</strong> The kit’s primary component is a Rainfresh Household Water Purification Unit. It allows families to access clean water whenever and wherever they need, which is vital when you may have lost your home. These kits also include hygiene items, which are vital to maintaining good health, and a solar light which allow people in need a light source when power is unavailable. Our dedicated network of volunteers across the Greater Toronto Area pack these FEKs on a weekly basis to support our ongoing programs, and we are ready to get these into the country as soon as we are given the clearance to do so.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-800">
                            <strong>AquaTabs:</strong> AquaTabs are another extremely portable and quick solution to purify water. AquaTabs are compact and foil packaged water purification tablets are easy to use and easy to deploy for humanitarian aid.
                        </p>
                        <div className="mt-4">
                            <CafButton href="https://globalmedic.ca/donate/" variant="navy" external>Donate Now</CafButton>
                        </div>
                        <p className="mt-4 text-sm">
                            Click{" "}
                            <a href="https://globalmedic.ca" className="text-[#e10600] underline" target="_blank" rel="noreferrer">here</a>
                            {" "}to learn more about GlobalMedic’s disaster relief efforts
                        </p>
                    </div>
                </section>
            </div>

            <div className="border-t border-neutral-200 bg-[#f7f7f7]">
                <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-8 md:flex-row md:items-center">
                    <nav className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                        <Link href="/" className="hover:underline">Home</Link>
                        <Link href="/donate" className="hover:underline">Donate</Link>
                        <Link href="/about-us" className="hover:underline">About us</Link>
                        <Link href="/our-call-to-action" className="hover:underline">Our Call To Action</Link>
                        <Link href="/contact" className="hover:underline">Contact Us</Link>
                        <Link href="/get-involved" className="hover:underline">Get Involved</Link>
                    </nav>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <CafButton href="https://idrf.ca/project/morocco-earthquake-relief/" variant="navy" external>Donate With IDRF</CafButton>
                        <CafButton href="https://globalmedic.ca/donate/" variant="navy" external>Donate With Global Medic</CafButton>
                    </div>
                </div>
            </div>
        </article>
    );
}
