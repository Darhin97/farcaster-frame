/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
        return [
            {
                source: '/fanclub',
                destination: 'https://naruto-official.com/',
                permanent: false
            }
        ]
    }
};

export default nextConfig;
