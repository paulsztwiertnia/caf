import { CafButton } from "@/components/caf/ui";

export default function NotFound() {
    return (
        <section className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-start justify-center px-4 py-20">
            <h1 className="text-5xl font-semibold">404</h1>
            <p className="mt-4 text-lg text-neutral-700">This page could not be found.</p>
            <div className="mt-6">
                <CafButton href="/" variant="navy">Back to home</CafButton>
            </div>
        </section>
    );
}
