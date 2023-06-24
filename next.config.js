/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["links.papareact.com"], // whitelisted for image rendering 
  }
}

module.exports = nextConfig
