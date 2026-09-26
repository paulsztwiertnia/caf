import type { Metadata } from "next";
import { CafButton, NavyCard, PageBanner } from "@/components/caf/ui";
import { stripeDonateUrl } from "@/lib/getNavItems";

export const metadata: Metadata = {
    title: "Donate – Canadian Arab Federation",
    description: "Donate to the Canadian Arab Federation.",
};

export default function Donate() {
    return (
        <>
            <PageBanner title="Donate To The Canadian Arab Federation" />
            <div className="bg-[#f7f7f7] py-12">
                <NavyCard className="mx-auto max-w-3xl">
                    <h2 className="text-xl font-semibold">Join Us in Making a Difference</h2>
                    <p className="mt-4 text-sm leading-relaxed text-white/90">
                        The Canadian Arab Federation (CAF) is dedicated to fostering and promoting the cultural, social, and economic well-being of the Arab community in Canada. Our mission is to build bridges of understanding, advocate for equal rights, and empower individuals through education, advocacy, and community engagement.
                    </p>
                    <h3 className="mt-6 text-lg font-semibold">Your Support Makes an Impact</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/90">
                        By donating to CAF, you are directly contributing to a range of vital programs and services designed to uplift and support the Arab community in Canada.
                    </p>
                    <div className="mt-8">
                        <CafButton href={stripeDonateUrl} variant="red" external>Donate</CafButton>
                    </div>
                </NavyCard>
            </div>
        </>
    );
}
