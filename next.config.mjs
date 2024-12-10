/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn-images.dzcdn.net', 'e-cdns-images.dzcdn.net'], // Ajoutez ici le domaine problématique
  },
};

export default nextConfig;
