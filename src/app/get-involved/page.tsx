import type { Metadata } from "next";
import Image from "next/image";
import { CafButton, NavyCard, PageBanner } from "@/components/caf/ui";
import { CafForm, involvedFields } from "@/components/caf/form";
import { stripeDonateUrl } from "@/lib/getNavItems";

export const metadata: Metadata = {
    title: "Get Involved – Canadian Arab Federation",
    description: "Become a member, donate, or advocate with the Canadian Arab Federation.",
};

export default function GetInvolved() {
    return (
        <>
            <PageBanner title="Get Involved" />
            <div className="bg-white py-12">
                <div className="mx-auto grid max-w-6xl items-start gap-6 px-4 md:grid-cols-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                        <Image src="/caf/morocco-5.png" alt="Volunteers with a Moroccan flag" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                    <NavyCard>
                        <h2 className="text-xl font-semibold">Want To Get Involved?</h2>
                        <p className="mt-4 text-sm leading-relaxed text-white/90">
                            Becoming part of the Canadian Arab Federation (CAF) is about more than just membership — it’s a commitment to action, understanding, and community growth. Whether you’re looking to engage in policy advocacy, community development, or cultural exchange, there are numerous ways to contribute your unique skills and passion. Here’s how you can get involved:
                        </p>
                        <div className="mt-6">
                            <CafButton href="#getinvolved">Get Involved →</CafButton>
                        </div>
                    </NavyCard>
                </div>

                <div className="mx-auto mt-8 grid max-w-6xl gap-6 px-4 md:grid-cols-3">
                    <NavyCard>
                        <h2 className="text-lg font-semibold">Become a Member</h2>
                        <p className="mt-3 text-sm leading-relaxed text-white/90">
                            Join a network of passionate individuals and organizations committed to the prosperity and representation of Arab Canadians. As a member, you’ll have the opportunity to vote in our elections, participate in exclusive events, and shape the future of CAF.
                        </p>
                        <div className="mt-6">
                            <CafButton href="/contact">Join Us</CafButton>
                        </div>
                    </NavyCard>
                    <NavyCard>
                        <h2 className="text-lg font-semibold">Donate</h2>
                        <p className="mt-3 text-sm leading-relaxed text-white/90">
                            Your contributions help us sustain and expand our programs, initiatives, and community outreach. Every donation, big or small, makes a difference in enabling us to continue our advocacy and provide valuable resources to the community.
                        </p>
                        <div className="mt-6">
                            <CafButton href={stripeDonateUrl} external>Donate</CafButton>
                        </div>
                    </NavyCard>
                    <NavyCard>
                        <h2 className="text-lg font-semibold">Advocate and Share</h2>
                        <p className="mt-3 text-sm leading-relaxed text-white/90">
                            Become a voice for the community by advocating for issues affecting Arab Canadians. Share our mission and your experiences with friends, family, and through social media to help raise awareness and support for CAF’s goals.
                        </p>
                        <div className="mt-6">
                            <CafButton href="#getinvolved">Join Us</CafButton>
                        </div>
                    </NavyCard>
                </div>
            </div>

            <section className="bg-[#f3f3f3] py-14">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <h2 className="text-3xl font-semibold tracking-tight">Ready to Take the Next Step?</h2>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                        We’re excited to welcome you to our community of dedicated individuals working towards a united and empowered Arab Canadian presence in society.
                    </p>
                </div>
                <NavyCard id="getinvolved" className="mx-auto mt-8 max-w-5xl">
                    <h3 className="text-center text-lg font-semibold">Fill Out the Form and Get Involved With the CAF today!</h3>
                    <div className="mt-6">
                        <CafForm fields={involvedFields} source="Get involved" />
                    </div>
                </NavyCard>
            </section>
        </>
    );
}
