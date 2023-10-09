/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"]
    },
    env: {
        NEXT_PUBLIC_IMAGIN_API_KEY: 'hrjavascript-mastery',
        NEXT_PUBLIC_RAPID_API_KEY:'1a332cd469mshebdf5c162842004p199878jsn1c21547fdd6b'
    },
}

module.exports = nextConfig