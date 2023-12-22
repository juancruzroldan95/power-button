/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};
module.exports = nextConfig;
