/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        // This helps prevent build-time fetch errors
        appDocumentPreloading: false,
    },
};