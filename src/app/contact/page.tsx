import type { Metadata } from "next";
import { CafButton, NavyCard } from "@/components/caf/ui";
import { CafForm, contactFields } from "@/components/caf/form";
import { stripeDonateUrl } from "@/lib/getNavItems";

export const metadata: Metadata = {
    title: "Contact Us – Canadian Arab Federation",
    description: "Contact the Canadian Arab Federation at 1057 McNicoll Ave, Scarborough.",
};

const mapSrc = "https://maps.google.com/maps?q=1057%20McNicoll%20Ave%2C%20Scarborough%2C%20ON%20M1W%203W6&z=14&output=embed";

export default function Contact() {
    return (
        <div className="bg-white py-14">
            <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 lg:grid-cols-2">
                <div>
                    <p className="text-lg font-medium">Lets Work Together</p>
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight">How Can We Help</h1>
                    <div className="mt-4 h-px w-48 bg-neutral-900" />

                    <h2 className="mt-8 text-lg font-semibold">Office Location</h2>
                    <div className="mt-4 h-px w-full bg-neutral-300" />
                    <iframe
                        title="1057 McNicoll Ave, Scarborough, ON M1W 3W6"
                        src={mapSrc}
                        className="mt-4 h-64 w-full border-0"
                        loading="lazy"
                    />
                    <p className="mt-3 text-sm text-neutral-700">1057 McNicoll Ave, Scarborough, ON M1W 3W6</p>
                    <div className="mt-4 h-px w-full bg-neutral-300" />

                    <h2 className="mt-8 text-xl font-semibold">Contact Us Today!</h2>
                    <div className="mt-4">
                        <CafButton href="tel:+14164938635" variant="navy">Call Now</CafButton>
                    </div>
                </div>

                <NavyCard>
                    <h2 className="text-center text-xl font-semibold">Kindly Fill Out The Form And We&apos;ll Get In Touch</h2>
                    <div className="mt-6">
                        <CafForm fields={contactFields} formId="mgavnrzb" />
                    </div>
                    <div className="my-6 h-px w-full bg-white/30" />
                    <p className="text-sm">Reach Out to Us for Support and Information</p>
                    <div className="mt-4">
                        <CafButton href={stripeDonateUrl} variant="red" external>Donate Today →</CafButton>
                    </div>
                </NavyCard>
            </div>
        </div>
    );
}
