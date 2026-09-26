"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useRef, useState } from "react";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
    || (process.env.NODE_ENV === "development" ? "1x00000000000000000000AA" : "");

type TextField = {
    type: "text" | "email" | "tel" | "textarea";
    name: string;
    label: string;
    required?: boolean;
};

type CheckField = {
    type: "checks";
    name: string;
    label: string;
    options: string[];
};

export type CafField = TextField | CheckField;

const inputClass = "mt-1 w-full rounded-sm border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900";

export function CafForm({ fields, id, source = "Contact" }: { fields: CafField[]; id?: string; source?: string }) {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [error, setError] = useState("");
    const [captchaToken, setCaptchaToken] = useState("");
    const turnstileRef = useRef<TurnstileInstance>(undefined);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!captchaToken) {
            setError("Complete the captcha.");
            setStatus("error");
            return;
        }

        setStatus("sending");
        setError("");

        const data = new FormData(event.currentTarget);
        const payload: Record<string, string | string[]> = {};
        for (const field of fields) {
            if (field.type === "checks") {
                payload[field.name] = data.getAll(field.name).map(String);
            } else {
                payload[field.name] = String(data.get(field.name) ?? "");
            }
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ source, fields: payload, captchaToken }),
            });
            const body = await response.json().catch(() => null);
            if (!response.ok) {
                setCaptchaToken("");
                turnstileRef.current?.reset();
                setError(typeof body?.error === "string" ? body.error : "Could not send your message.");
                setStatus("error");
                return;
            }
            setStatus("sent");
        } catch {
            setError("Could not send your message.");
            setStatus("error");
        }
    }

    if (status === "sent") {
        return <p className="rounded-md bg-white/10 px-4 py-6 text-center text-white">Thank you. Your message has been sent.</p>;
    }

    return (
        <form id={id} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {fields.map((field) => {
                    if (field.type === "checks") {
                        return (
                            <fieldset key={field.name} className="md:col-span-2">
                                <legend className="text-sm text-white/90">{field.label}</legend>
                                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                                    {field.options.map((option) => (
                                        <label key={option} className="flex items-center gap-2 text-sm text-white">
                                            <input type="checkbox" name={field.name} value={option} className="size-3.5 accent-white" />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            </fieldset>
                        );
                    }

                    const wide = field.type === "textarea" || field.name === "name" || field.name === "address" || field.name === "skills" || field.name === "experience" || field.name === "emergency";
                    return (
                        <div key={field.name} className={wide ? "md:col-span-2" : ""}>
                            <label htmlFor={field.name} className="text-sm text-white/90">{field.label}</label>
                            {field.type === "textarea" ? (
                                <textarea id={field.name} name={field.name} required={field.required} rows={4} className={inputClass} />
                            ) : (
                                <input id={field.name} name={field.name} type={field.type} required={field.required} className={inputClass} />
                            )}
                        </div>
                    );
                })}
            </div>
            {turnstileSiteKey ? (
                <Turnstile
                    ref={turnstileRef}
                    siteKey={turnstileSiteKey}
                    options={{ theme: "dark" }}
                    onSuccess={setCaptchaToken}
                    onExpire={() => setCaptchaToken("")}
                    onError={() => setCaptchaToken("")}
                />
            ) : (
                <p className="text-sm text-red-200">Captcha is unavailable.</p>
            )}
            {error ? <p className="text-sm text-red-200">{error}</p> : null}
            <button
                type="submit"
                disabled={status === "sending" || !captchaToken}
                className="w-full rounded-sm bg-[#e10600] py-3 text-sm font-semibold text-white hover:bg-[#c10500] disabled:opacity-70"
            >
                Send
            </button>
        </form>
    );
}

export const contactFields: CafField[] = [
    { type: "text", name: "name", label: "Full Name", required: true },
    { type: "email", name: "email", label: "Email", required: true },
    { type: "tel", name: "telephone", label: "Telephone" },
    { type: "textarea", name: "message", label: "Message", required: true },
];

export const involvedFields: CafField[] = [
    { type: "text", name: "name", label: "Full Name", required: true },
    { type: "email", name: "email", label: "Email", required: true },
    { type: "tel", name: "telephone", label: "Telephone" },
    { type: "textarea", name: "address", label: "Address" },
    { type: "textarea", name: "skills", label: "Skills Or Interests" },
    {
        type: "checks",
        name: "availability",
        label: "Availability",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    { type: "textarea", name: "experience", label: "Previous Volunteer Experience" },
    { type: "textarea", name: "emergency", label: "Emergency Contact Information" },
];
