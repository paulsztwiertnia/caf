export interface NavItem {
    label: string;
    href: string;
}

const navItems = {
    header: [
        { label: 'Home', href: '/' },
        { label: 'About us', href: '/about-us' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Get Involved', href: '/get-involved' },
        { label: 'Our Call To Action', href: '/our-call-to-action' },
        { label: 'Donate', href: '/donate' },
    ],
    footer: [
        { label: 'Home', href: '/' },
        { label: 'About us', href: '/about-us' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Get Involved', href: '/get-involved' },
        { label: 'Our Call To Action', href: '/our-call-to-action' },
        { label: 'Donate', href: '/donate' },
    ],
} satisfies Record<'header' | 'footer', NavItem[]>;

export async function getNavItems(slug: 'header' | 'footer'): Promise<NavItem[]> {
    return navItems[slug];
}

export const stripeDonateUrl = 'https://buy.stripe.com/28obL73SH2hcb7ydQQ';
