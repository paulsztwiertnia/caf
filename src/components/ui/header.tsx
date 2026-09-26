"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { NavItem } from "@/lib/getNavItems";

interface HeaderProps {
    navItems: NavItem[];
}

function isActive(pathname: string, href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header({ navItems = [] }: HeaderProps) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3">
                <Link href="/" aria-label="Canadian Arab Federation home">
                    <Image
                        src="/caf/logo.png"
                        alt="Canadian Arab Federation"
                        width={168}
                        height={72}
                        priority
                        className="h-14 w-auto"
                    />
                </Link>
                <nav className="hidden items-center gap-5 text-sm text-neutral-900 lg:flex" aria-label="Primary">
                    {navItems.map((item) => {
                        const active = isActive(pathname, item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={active
                                    ? "underline decoration-[#e10600] decoration-2 underline-offset-8"
                                    : "hover:underline hover:decoration-[#e10600] hover:underline-offset-8"}
                                aria-current={active ? "page" : undefined}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 lg:hidden"
                    aria-expanded={isMenuOpen}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                </button>
            </div>
            {isMenuOpen && (
                <nav className="flex flex-col gap-1 border-t border-neutral-200 px-4 py-3 lg:hidden" aria-label="Mobile">
                    {navItems.map((item) => {
                        const active = isActive(pathname, item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`rounded-md px-2 py-2 text-sm ${active ? "bg-neutral-100 font-semibold underline decoration-[#e10600]" : ""}`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            )}
        </header>
    );
}
