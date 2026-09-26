import Link from "next/link";
import { cn } from "@/lib/utils";

export function PageBanner({ title }: { title: string }) {
    return (
        <div className="border-y border-neutral-200 bg-[#ececec]">
            <div className="mx-auto max-w-6xl px-4 py-8">
                <h1 className="text-2xl font-medium tracking-tight text-neutral-900 md:text-3xl">{title}</h1>
            </div>
        </div>
    );
}

export function NavyCard({
    children,
    className,
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {
    return (
        <div id={id} className={cn("rounded-2xl bg-[#10203f] p-6 text-white md:p-8", className)}>
            {children}
        </div>
    );
}

const buttonStyles = {
    white: "bg-white text-[#10203f] hover:bg-neutral-100",
    red: "bg-[#e10600] text-white hover:bg-[#c10500]",
    navy: "bg-[#10203f] text-white hover:bg-[#1b335f]",
} as const;

export function CafButton({
    href,
    children,
    variant = "white",
    className,
    external,
}: {
    href: string;
    children: React.ReactNode;
    variant?: keyof typeof buttonStyles;
    className?: string;
    external?: boolean;
}) {
    const classes = cn(
        "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors",
        buttonStyles[variant],
        className,
    );

    if (external || href.startsWith("http") || href.startsWith("tel:")) {
        return (
            <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
}
