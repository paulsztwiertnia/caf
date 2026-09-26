"use client";

import { useForm, ValidationError } from "@formspree/react";

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

export function CafForm({ fields, id, formId }: { fields: CafField[]; id?: string; formId?: string }) {
    const [state, handleSubmit] = useForm(formId || process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "x");

    if (state.succeeded) {
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
                            <ValidationError prefix={field.label} field={field.name} errors={state.errors} className="mt-1 text-xs text-red-200" />
                        </div>
                    );
                })}
            </div>
            <button
                type="submit"
                disabled={state.submitting}
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
