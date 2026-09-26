import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.canadianarabsfederation.com'
    const paths = [
        '',
        '/about-us',
        '/contact',
        '/get-involved',
        '/our-call-to-action',
        '/donate',
        '/partners',
        '/morocco-earthquake',
        '/blog',
    ]

    return paths.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' || path === '/blog' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : 0.7,
    }))
}
