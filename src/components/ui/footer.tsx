import Image from "next/image";
import Link from "next/link";
import { NavItem } from "@/lib/getNavItems";

interface FooterProps {
    navItems?: NavItem[];
}

export function Footer(_props: FooterProps) {
    return (
        <footer className="bg-white px-4 py-12 text-center text-sm text-neutral-600">
            <Link href="/" aria-label="Canadian Arab Federation home">
                <Image
                    src="/caf/logo.png"
                    alt="CAF"
                    width={88}
                    height={40}
                    className="mx-auto h-12 w-auto"
                />
            </Link>
            <p className="mt-4 font-semibold text-[#e10600]">CAF ©</p>
            <p>All Rights Reserved</p>
            <p className="mt-8">
                Website Designed &amp; Developed by{" "}
                <a
                    href="https://novellsoftwaresolutions.com/"
                    className="font-semibold text-[#e10600] hover:underline"
                    target="_blank"
                    rel="noreferrer"
                >
                    Novell Software Solutions
                </a>
            </p>
        </footer>
    );
}
