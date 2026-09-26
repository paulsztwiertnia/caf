"use client";

import { useCallback, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { ActionButton } from "@/components/ui/button";
import { Asterisk, CircleCheckBig } from "lucide-react";

export function ContactUsForm() {
    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    );
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
    const [state, handleSubmit] = useForm(formId as string);  

    const successRef = useCallback((node: HTMLDivElement | null) => {
        if (!node) return;
        node.scrollIntoView({ behavior: "smooth", block: "start" });
        node.focus();
    }, []);
    
    return (
        <>
        <div className="max-w-2xl mx-auto">
            <h2 className="section-subtitle">Let&rsquo;s talk</h2>
            <p>
                Planning a kitchen, bathroom, basement, or home renovation in Toronto or the GTA?
                Tell us a little about your project and we&apos;ll get back to you.
            </p>
            <p className="mt-4">
                <a className="hover:underline font-semibold" href="tel:+14169947835">Office: 416-994-7835</a>
                <span className="mx-3 text-neutral-400">|</span>
                <a className="hover:underline font-semibold" href="tel:+14167797141">Cell: 416-779-7141</a>
            </p>
            
            <form onSubmit={handleSubmit} id="contactform" className="mt-8 space-y-6">
                <fieldset>
                    <legend>Contact details</legend>
                    <div>
                        <label htmlFor="name">Your Name
                        <Asterisk className="inline-block ms-1 mb-1 text-red-600" />
                        </label>
                        <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Your Email
                        <Asterisk className="inline-block ms-1 mb-1 text-red-600" />
                        </label>
                        <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        />
                    </div>

                    <div>
                        <label htmlFor="subject">Subject
                        <Asterisk className="inline-block ms-1 mb-1 text-red-600" />
                        </label>
                        <input
                        id="subject"
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                        }
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Your message</legend>
                    <div>
                        <label htmlFor="message">Message
                        <Asterisk className="inline-block ms-1 mb-1 text-red-600" />
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        rows={7}
                        required
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                        }
                        />
                    </div>
                </fieldset>

                <p className="text-sm text-neutral-600">
                    By submitting this form, you agree not to solicit or send spam. Violations
                    may be reported under Canada&apos;s Anti-Spam Legislation (CASL).
                </p>

            {!state.succeeded ? (
                <ActionButton
                variant="dark"
                text={state.submitting ? "Sending..." : "Send Message"}
                type="submit"
                />
            ) : (
                <div ref={successRef} tabIndex={-1} role="status" aria-live="polite" className="bg-green-700 text-white px-6 py-5">
                    <div className="flex items-center justify-start gap-4">
                        <CircleCheckBig className="text-white" />
                        <p className="uppercase tracking-wide">Message sent</p>
                    </div>
                    <p>
                        Thanks! We&apos;ve received your message and will be in touch soon.
                    </p>
                </div>
            )}

            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            </form>
        </div>
        </>
    )
}
